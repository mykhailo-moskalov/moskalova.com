import css from "./GalleriesLinks.module.css";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import GalleriesItem from "@/components/layout/GalleriesLinksItem/GalleriesLinkItem";

export default function GalleriesLinks() {
  const t = useTranslations("home");
  return (
    <Section>
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
