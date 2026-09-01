import css from "./Heading.module.css";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";

interface HeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  sectClassName?: string;
  contClassName?: string;
  parent?: boolean;
}

export default function Heading({
  text,
  as: Tag = "h2",
  className,
  sectClassName,
  contClassName,
  parent = false,
}: HeadingProps) {
  const heading = <Tag className={`${className} ${css.title}`}>{text}</Tag>;

  if (!parent) return heading;

  return (
    <Section className={sectClassName}>
      <Container className={contClassName}>{heading}</Container>
    </Section>
  );
}
