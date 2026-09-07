import { getTranslations } from "next-intl/server";
import GalleryTitle from "@/components/sections/GalleryTitle/GalleryTitle";
import Motto from "@/components/sections/Motto/Motto";
import GallerySection from "@/components/sections/GallerySection/GallerySection";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/seo/alternates";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "creatives.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/artists-and-performers"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/artists-and-performers`,
    },
  };
}

export default function ArtistsAndPerformers() {
  return (
    <main>
      <GalleryTitle namespace="creatives" backg="creatives" />
      <Motto namespace="creatives.motto" href="/services" />
      <GallerySection category="artists-and-performers" group="creatives" />
      <Motto namespace="creatives.mottoEnd" href="/contact" backg />
    </main>
  );
}
