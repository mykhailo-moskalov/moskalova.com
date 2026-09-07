import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://moskalova.com";

export function alternatesFor(
  locale: string,
  path = "",
): NonNullable<Metadata["alternates"]> {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}${path}`]),
  );
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...languages,
      "x-default": `/${routing.defaultLocale}${path}`,
    },
  };
}

export const ogLocale = (locale: string) =>
  locale === "uk" ? "uk_UA" : "en_US";
