import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;
let isEthereal = false;

/**
 * Returns the shared SMTP transporter.
 *
 * - Production: SMTP_* env vars are required.
 * - Development without SMTP_HOST: falls back to an Ethereal test inbox
 *   (https://ethereal.email). Nothing is really delivered; every message gets
 *   a preview URL logged to the server console (and returned in the API
 *   response, dev only).
 */
export async function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;

  if (!host) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("SMTP_HOST is not configured");
    }
    const test = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: test.smtp.host,
      port: test.smtp.port,
      secure: test.smtp.secure,
      auth: { user: test.user, pass: test.pass },
    });
    isEthereal = true;
    console.warn(
      "[mail] SMTP_HOST not set — using an Ethereal test inbox. Preview URLs will be logged.",
    );
    return transporter;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  transporter = nodemailer.createTransport({
    host,
    port,
    // 465 = implicit TLS. 587 = STARTTLS upgrade; requireTLS makes nodemailer
    // abort instead of ever sending the password over a plain connection.
    secure: port === 465,
    requireTLS: port !== 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  return transporter;
}

export const isTestInbox = () => isEthereal;

/** In dev with Ethereal, log (and return) a link to view the sent message. */
export function logPreviewUrl(label: string, info: unknown) {
  if (!isEthereal) return undefined;
  const url = nodemailer.getTestMessageUrl(
    info as Parameters<typeof nodemailer.getTestMessageUrl>[0],
  );
  if (url) console.info(`[mail] ${label} preview: ${url}`);
  return url || undefined;
}
