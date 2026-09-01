import { useTranslations } from "next-intl";
import Motto from "@/components/sections/Motto/Motto";
import GallerySection from "@/components/sections/GallerySection/GallerySection";

export default function PersonalStories() {
  const t = useTranslations("personal");
  return (
    <main>
      <Motto namespace="personal.motto" href="/services" />
      <GallerySection
        text={t("gallery.heading1")}
        category="personal-stories"
        group="personal"
      />
      <GallerySection
        text={t("gallery.heading2")}
        category="personal-stories"
        group="couples"
      />
    </main>
  );
}
