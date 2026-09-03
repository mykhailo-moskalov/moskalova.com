import GallerySection from "@/components/sections/GallerySection/GallerySection";
import GalleryTitle from "@/components/sections/GalleryTitle/GalleryTitle";
import Motto from "@/components/sections/Motto/Motto";

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
