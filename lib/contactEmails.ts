import { getTranslations } from "next-intl/server";

const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  /** Locale the visitor used on the site — drives the visitor email. */
  locale: string;
};

export type SiteInfo = {
  replyTo: string;
  siteName: string;
  siteUrl: string;
  /** Language the photographer wants her notifications in (CONTACT_OWNER_LOCALE). */
  ownerLocale: string;
};

const wrap = (inner: string, lang: string) => `<!doctype html>
<html lang="${escapeHtml(lang)}">
<body style="margin:0;padding:24px;background:#fff;color:#000001;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.5">
<div style="max-width:560px;margin:0 auto">${inner}</div>
</body>
</html>`;

const quote = (message: string) =>
  `<blockquote style="margin:16px 0;padding:12px 16px;border-left:3px solid #444935;background:#f6f6f4;white-space:pre-wrap">${escapeHtml(message)}</blockquote>`;

const quoteText = (message: string) =>
  message
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");

/** Email delivered to the photographer — always in HER language. */
export async function buildOwnerEmail(p: ContactPayload, site: SiteInfo) {
  const t = await getTranslations({
    locale: site.ownerLocale,
    namespace: "contact.email",
  });
  const subject = t("ownerSubject", { name: p.name });
  const labels = {
    name: t("labelName"),
    email: t("labelEmail"),
    lang: t("labelLanguage"),
  };

  const text = [
    t("ownerIntro"),
    "",
    `${labels.name}: ${p.name}`,
    `${labels.email}: ${p.email}`,
    `${labels.lang}: ${p.locale}`,
    "",
    p.message,
  ].join("\n");

  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#838383;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:4px 0">${value}</td></tr>`;

  const html = wrap(
    `<p>${escapeHtml(t("ownerIntro"))}</p>
<table cellpadding="0" cellspacing="0" style="margin:16px 0;border-collapse:collapse">
${row(labels.name, `<strong>${escapeHtml(p.name)}</strong>`)}
${row(labels.email, `<a href="mailto:${escapeHtml(encodeURI(p.email))}" style="color:#444935">${escapeHtml(p.email)}</a>`)}
${row(labels.lang, escapeHtml(p.locale))}
</table>
${quote(p.message)}`,
    site.ownerLocale,
  );

  return { subject, text, html };
}

export async function buildVisitorEmail(
  p: ContactPayload,
  site: SiteInfo,
  includeCopy: boolean,
) {
  const t = await getTranslations({
    locale: p.locale,
    namespace: "contact.email",
  });
  const subject = t("subject");
  const siteHost = site.siteUrl.replace(/^https?:\/\//, "");

  const text = [
    t("greeting", { name: p.name }),
    "",
    t("body"),
    ...(includeCopy ? ["", t("copyHeading"), "", quoteText(p.message)] : []),
    "",
    t("signoff"),
    t("signature"),
    site.siteUrl,
    "",
    "—",
    t("footer"),
  ].join("\n");

  const html = wrap(
    `<p>${escapeHtml(t("greeting", { name: p.name }))}</p>
<p>${escapeHtml(t("body"))}</p>
${includeCopy ? `<p style="margin-top:24px;color:#838383">${escapeHtml(t("copyHeading"))}</p>\n${quote(p.message)}` : ""}
<p style="margin-top:24px">${escapeHtml(t("signoff"))}<br><strong>${escapeHtml(t("signature"))}</strong><br><a href="${escapeHtml(site.siteUrl)}" style="color:#444935">${escapeHtml(siteHost)}</a></p>
<hr style="border:0;border-top:1px solid #e5e5e5;margin:32px 0 16px">
<p style="font-size:13px;color:#838383">${escapeHtml(t("footer"))}</p>`,
    p.locale,
  );

  return { subject, text, html };
}
