import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/alternates";
import { routing } from "@/i18n/routing";
import { allSetParams } from "@/lib/data/galleries";

const STATIC_PATHS = [
  "",
  "/about",
  "/services",
  "/contact",
  "/personal-stories",
  "/brand-stories",
  "/artists-and-performers",
  "/impressum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...allSetParams().map((p) => `/${p.category}/${p.set}`),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
      ),
    },
  }));
}
