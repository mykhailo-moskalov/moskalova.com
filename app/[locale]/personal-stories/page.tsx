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
  const t = await getTranslations({ locale, namespace: "personal.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/personal-stories"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/personal-stories`,
    },
  };
}

export default function PersonalStories() {
  return (
    <main>
      <GalleryTitle namespace="personal.personal" backg="personal" />
      <Motto namespace="personal.personal.motto" href="/services" />
      <GallerySection category="personal-stories" group="personal" />
      <Motto namespace="personal.personal.mottoEnd" href="/contact" backg />
      <GalleryTitle id="couples" namespace="personal.couples" backg="couples" />
      <Motto namespace="personal.couples.motto" href="/services" />
      <GallerySection category="personal-stories" group="couples" />
      <Motto namespace="personal.couples.mottoEnd" href="/contact" backg />
    </main>
  );
}
