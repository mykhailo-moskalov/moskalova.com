import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";

interface HeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  parent?: boolean;
}

export default function Heading({
  text,
  as: Tag = "h2",
  className,
  parent = true,
}: HeadingProps) {
  const heading = <Tag className={className}>{text}</Tag>;

  if (!parent) return heading;

  return (
    <Section>
      <Container>{heading}</Container>
    </Section>
  );
}
