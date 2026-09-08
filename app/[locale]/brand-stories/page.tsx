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
  const t = await getTranslations({ locale, namespace: "brand.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/brand-stories"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/brand-stories`,
    },
  };
}

export default async function BrandStories() {
  return (
    <main>
      <GalleryTitle
        namespace="brand.personalBrand"
        backg="personalBrand"
        priority
      />
      <Motto namespace="brand.personalBrand.motto" href="/services" />
      <GallerySection category="brand-stories" group="personalBrand" />
      <Motto namespace="brand.personalBrand.mottoEnd" href="/contact" backg />

      <GalleryTitle id="brands" namespace="brand.brand" backg="brand" />
      <Motto namespace="brand.brand.motto" href="/services" />
      <GallerySection category="brand-stories" group="brand" />
      <Motto namespace="brand.brand.mottoEnd" href="/contact" backg />

      <GalleryTitle
        id="hospitality"
        namespace="brand.interior"
        backg="interior"
      />
      <Motto namespace="brand.interior.motto" href="/services" />
      <GallerySection category="brand-stories" group="interior" />
      <Motto namespace="brand.interior.mottoEnd" href="/contact" backg />
    </main>
  );
}
