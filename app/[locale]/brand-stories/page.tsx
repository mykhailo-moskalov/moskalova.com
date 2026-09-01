import { useTranslations } from "next-intl";
import GallerySection from "@/components/sections/GallerySection/GallerySection";
import Motto from "@/components/sections/Motto/Motto";

export default function BrandStories() {
  const t = useTranslations("brand");
  return (
    <main>
      <Motto namespace="brand.motto" href="/services" />
      <GallerySection
        text={t("gallery.heading")}
        category="brand-stories"
        group="brand"
      />
    </main>
  );
}
