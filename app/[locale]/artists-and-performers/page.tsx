import { useTranslations } from "next-intl";
import GallerySection from "@/components/sections/GallerySection/GallerySection";
import Motto from "@/components/sections/Motto/Motto";

export default function ArtistsAndPerformers() {
  const t = useTranslations("creatives");
  return (
    <main>
      <Motto namespace="creatives.motto" href="/services" />
      <GallerySection
        text={t("gallery.heading")}
        category="artists-and-performers"
        group="creatives"
      />
    </main>
  );
}
