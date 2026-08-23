import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { getTransporter, isTestInbox, logPreviewUrl } from "@/lib/mail";
import { perIp, perRecipient, global as globalLimit } from "@/lib/rateLimit";
import { buildOwnerEmail, buildVisitorEmail } from "@/lib/contactEmails";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 100, email: 254, message: 5000 };
const MAX_BODY_BYTES = 16 * 1024;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_PATTERN = /(https?:\/\/|www\.)/i;
const SITE_URL = process.env.SITE_URL ?? "https://moskalova.com";
const SITE_NAME = "Natalia Moskalova Photography";
const OWNER_LOCALE = process.env.CONTACT_OWNER_LOCALE ?? "uk";
/** Honeypot field name — deliberately meaningless so browser autofill ignores it. */
const HONEYPOT_FIELD = "nm_extra";

const ok = (extra?: Record<string, unknown>) =>
  NextResponse.json({ ok: true, ...extra });
const fail = (error: string, status: number) =>
  NextResponse.json({ error }, { status });

/**
 * Client IP as seen by the reverse proxy.
 *
 * nginx (proxy_set_header X-Real-IP $remote_addr) overwrites X-Real-IP, so it
 * is trustworthy. X-Forwarded-For with $proxy_add_x_forwarded_for APPENDS to
 * whatever the client sent, so the trustworthy value is the LAST one, not the
 * first — taking [0] lets a client pick its own rate-limit bucket.
 */
function getIp(request: NextRequest) {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((p) => p.trim()).filter(Boolean);
    if (parts.length) return parts[parts.length - 1];
  }
  return "unknown";
}

/** In production the form is only ever posted from our own origin. */
function isTrustedOrigin(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return true;
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-origin fetches may omit it; nothing to check
  try {
    return new URL(origin).host === new URL(SITE_URL).host;
  } catch {
    return false;
  }
}

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const isLocale = (value: string): value is (typeof routing.locales)[number] =>
  (routing.locales as readonly string[]).includes(value);

export async function POST(request: NextRequest) {
  if (!isTrustedOrigin(request)) return fail("invalid", 403);

  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return fail("invalid", 413);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("invalid", 400);
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return fail("invalid", 400);
  }
  const fields = body as Record<string, unknown>;

  // Honeypot: hidden from humans, irresistible to bots.
  // Answer 200 so the bot has nothing to learn from the response.
  if (asString(fields[HONEYPOT_FIELD]) !== "") {
    console.info("[contact] honeypot hit — dropped");
    return ok();
  }

  const name = asString(fields.name);
  const email = asString(fields.email);
  const message = asString(fields.message);
  const requestedLocale = asString(fields.locale);
  const locale = isLocale(requestedLocale) ? requestedLocale : routing.defaultLocale;

  const isValid =
    name.length >= 2 &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    EMAIL_PATTERN.test(email) &&
    message.length >= 10 &&
    message.length <= LIMITS.message &&
    // a newline inside a header field would let someone inject extra headers
    !/[\r\n]/.test(name + email);

  if (!isValid) return fail("invalid", 400);

  // Limits are charged only for well-formed submissions, so a visitor's
  // typos don't lock them out.
  const ip = getIp(request);
  if (!globalLimit.check("*") || !perIp.check(ip)) return fail("rateLimit", 429);

  let transporter;
  try {
    transporter = await getTransporter();
  } catch (error) {
    console.error("[contact] transporter unavailable:", error);
    return fail("send", 500);
  }

  // In the dev test-inbox mode nothing is delivered, so placeholders are fine.
  const from =
    process.env.SMTP_FROM ||
    (isTestInbox() ? `${SITE_NAME} <noreply@moskalova.com>` : "");
  const contactTo =
    process.env.CONTACT_TO || (isTestInbox() ? "owner@example.com" : "");
  if (!from || !contactTo) {
    console.error("[contact] SMTP_FROM / CONTACT_TO are not configured");
    return fail("send", 500);
  }

  const payload = { name, email, message, locale };
  const site = {
    replyTo: contactTo,
    siteName: SITE_NAME,
    siteUrl: SITE_URL,
    ownerLocale: OWNER_LOCALE,
  };
  const previews: Record<string, string> = {};

  // 1) The message to the photographer — this one must succeed.
  try {
    const owner = await buildOwnerEmail(payload, site);
    const info = await transporter.sendMail({
      from,
      to: contactTo,
      // our own domain in `from` (SPF/DKIM); the visitor goes in Reply-To
      replyTo: { name, address: email },
      subject: owner.subject,
      text: owner.text,
      html: owner.html,
    });
    globalLimit.hit("*");
    perIp.hit(ip);
    const url = logPreviewUrl("owner", info);
    if (url) previews.owner = url;
  } catch (error) {
    // log the real reason, tell the visitor nothing about the mail server
    console.error("[contact] sendMail (owner) failed:", error);
    return fail("send", 500);
  }

  // 2) Confirmation to the visitor — best effort; a failure is only logged.
  //    Guard rails: at most one per address per day, and never echo links
  //    (otherwise noreply@moskalova.com becomes a domain-authenticated relay
  //    for whatever URL a stranger types into the form).
  const recipientKey = email.toLowerCase();
  if (perRecipient.hit(recipientKey)) {
    const includeCopy = !URL_PATTERN.test(message);
    try {
      const visitor = await buildVisitorEmail(payload, site, includeCopy);
      const info = await transporter.sendMail({
        from,
        to: { name, address: email },
        replyTo: contactTo,
        subject: visitor.subject,
        text: visitor.text,
        html: visitor.html,
        headers: {
          // RFC 3834: generated by a form, not in reply to a mail — and tell
          // mail systems not to auto-respond to it
          "Auto-Submitted": "auto-generated",
          "X-Auto-Response-Suppress": "All",
        },
      });
      const url = logPreviewUrl("visitor", info);
      if (url) previews.visitor = url;
    } catch (error) {
      console.error("[contact] sendMail (visitor confirmation) failed:", error);
    }
  } else {
    console.info("[contact] visitor confirmation skipped (per-recipient limit)");
  }

  // Preview links only exist in the dev test-inbox mode; never in production.
  return ok(isTestInbox() ? { previews } : undefined);
}
