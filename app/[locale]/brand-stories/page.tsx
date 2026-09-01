import GallerySection from "@/components/sections/GallerySection/GallerySection";
import Motto from "@/components/sections/Motto/Motto";

export default function BrandStories() {
  return (
    <main>
      <Motto namespace="brand.motto" href="/services" />
      <GallerySection category="brand-stories" group="brand" />
    </main>
  );
}
