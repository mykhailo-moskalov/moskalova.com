import Motto from "@/components/sections/Motto/Motto";
import GallerySection from "@/components/sections/GallerySection/GallerySection";
import GalleryTitle from "@/components/sections/GalleryTitle/GalleryTitle";

export default function PersonalStories() {
  return (
    <main>
      <GalleryTitle namespace="personal.personal" backg="personal" />
      <Motto namespace="personal.personal.motto" href="/services" />
      <GallerySection category="personal-stories" group="personal" />
      <Motto namespace="personal.personal.mottoEnd" href="/contact" backg />
      <GalleryTitle
        id="couples"
        namespace="personal.couples"
        backg="couples"
        tar
        as="h2"
      />
      <Motto namespace="personal.couples.motto" href="/services" />
      <GallerySection category="personal-stories" group="couples" />
      <Motto namespace="personal.couples.mottoEnd" href="/contact" backg />
    </main>
  );
}
