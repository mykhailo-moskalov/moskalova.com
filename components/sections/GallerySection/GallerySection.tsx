import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Gallery from "@/components/layout/Gallery/Gallery";

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
