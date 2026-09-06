import css from "./GalleriesLinks.module.css";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import GalleriesItem from "@/components/layout/GalleriesItem/GalleriesItem";
import { useTranslations } from "next-intl";

export default function GalleriesLinks() {
  const t = useTranslations("home");
  return (
    <Section className={css.section}>
      <Container>
        <ul className={css.galleries}>
          {Object.keys(
            t.raw("galleries") as Record<
              string,
              { title: string; subtitle: string }
            >,
          ).map((id) => (
            <GalleriesItem key={id} id={id} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
