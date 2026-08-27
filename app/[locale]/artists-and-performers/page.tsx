import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
import GallerySection from "@/components/sections/GallerySection/GallerySection";

export default function ArtistsAndPerformers() {
  const t = useTranslations("creatives");
  return (
    <main>
      <Heading text={t("heading")} as="h1" />
      <GallerySection
        text={t("gallery.heading")}
        category="artists-and-performers"
        group="creatives"
      />
    </main>
  );
}
