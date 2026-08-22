import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mail";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);

function getIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: NextRequest) {
  if (!rateLimit(getIp(request))) {
    return NextResponse.json({ error: "rateLimit" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (asString(body.company) !== "") return NextResponse.json({ ok: true });

  const name = asString(body.name);
  const email = asString(body.email);
  const message = asString(body.message);

  const isValid =
    name.length >= 2 &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    EMAIL_PATTERN.test(email) &&
    message.length >= 10 &&
    message.length <= LIMITS.message &&
    !/[\r\n]/.test(name + email);

  if (!isValid) return NextResponse.json({ error: "invalid" }, { status: 400 });

  try {
    await transporter.sendMail({
      // must be an address on your own domain, or SPF/DKIM will fail
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject: `moskalova.com — ${name}`,
      text: `${name} <${email}>\n\n${message}`,
      html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(
        email,
      )}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
  } catch (error) {
    console.error("[contact] sendMail failed:", error);
    return NextResponse.json({ error: "send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
