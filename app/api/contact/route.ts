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
const HONEYPOT_FIELD = "nm_extra";

const ok = (extra?: Record<string, unknown>) =>
  NextResponse.json({ ok: true, ...extra });
const fail = (error: string, status: number) =>
  NextResponse.json({ error }, { status });

function getIp(request: NextRequest) {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length) return parts[parts.length - 1];
  }
  return "unknown";
}

function isTrustedOrigin(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return true;
  const origin = request.headers.get("origin");
  if (!origin) return true;
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

  if (asString(fields[HONEYPOT_FIELD]) !== "") {
    console.info("[contact] honeypot hit — dropped");
    return ok();
  }

  const name = asString(fields.name);
  const email = asString(fields.email);
  const message = asString(fields.message);
  const requestedLocale = asString(fields.locale);
  const locale = isLocale(requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  const isValid =
    name.length >= 2 &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    EMAIL_PATTERN.test(email) &&
    message.length >= 10 &&
    message.length <= LIMITS.message &&
    !/[\r\n]/.test(name + email);

  if (!isValid) return fail("invalid", 400);

  const ip = getIp(request);
  if (!globalLimit.check("*") || !perIp.check(ip))
    return fail("rateLimit", 429);

  let transporter;
  try {
    transporter = await getTransporter();
  } catch (error) {
    console.error("[contact] transporter unavailable:", error);
    return fail("send", 500);
  }

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

  try {
    const owner = await buildOwnerEmail(payload, site);
    const info = await transporter.sendMail({
      from,
      to: contactTo,
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
    console.error("[contact] sendMail (owner) failed:", error);
    return fail("send", 500);
  }

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
    console.info(
      "[contact] visitor confirmation skipped (per-recipient limit)",
    );
  }

  return ok(isTestInbox() ? { previews } : undefined);
}
