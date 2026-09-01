import GallerySection from "@/components/sections/GallerySection/GallerySection";
import Motto from "@/components/sections/Motto/Motto";

export default function ArtistsAndPerformers() {
  return (
    <main>
      <Motto namespace="creatives.motto" href="/services" />
      <GallerySection category="artists-and-performers" group="creatives" />
    </main>
  );
}
