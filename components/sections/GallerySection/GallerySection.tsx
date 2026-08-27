import css from "./GallerySection.module.css";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";
import Gallery from "@/components/layout/Gallery/Gallery";

interface GallerySectionProps {
  text: string;
  className?: string;
  category: string;
  group: string;
}

export default function GallerySection({
  text,
  className,
  category,
  group,
}: GallerySectionProps) {
  return (
    <Section>
      <Container>
        <Heading
          text={text}
          className={`${css.heading} ${className ?? ""}`}
          parent={false}
        />
        <Gallery category={category} group={group} />
      </Container>
    </Section>
  );
}
