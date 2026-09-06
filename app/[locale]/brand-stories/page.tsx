import GallerySection from "@/components/sections/GallerySection/GallerySection";
import GalleryTitle from "@/components/sections/GalleryTitle/GalleryTitle";
import Motto from "@/components/sections/Motto/Motto";

export default function BrandStories() {
  return (
    <main>
      <GalleryTitle namespace="brand" backg="brands" />
      <Motto namespace="brand.motto" href="/services" />
      <GallerySection category="brand-stories" group="brand" />
      <Motto namespace="brand.mottoEnd" href="/contact" backg />
    </main>
  );
}
