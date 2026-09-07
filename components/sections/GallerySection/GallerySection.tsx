import Gallery from "@/components/layout/Gallery/Gallery";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";

interface GallerySectionProps {
  category: string;
  group: string;
}

export default function GallerySection({
  category,
  group,
}: GallerySectionProps) {
  return (
    <Section>
      <Container>
        <Gallery category={category} group={group} />
      </Container>
    </Section>
  );
}
