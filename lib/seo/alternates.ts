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

type OgImage = NonNullable<
  Extract<NonNullable<Metadata["openGraph"]>["images"], unknown[]>[number]
>;

export const ogLocale = (locale: string) =>
  locale === "uk" ? "uk_UA" : "en_US";

export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Natalia Moskalova, photographer in Vienna",
} satisfies OgImage;
