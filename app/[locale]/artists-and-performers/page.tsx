import Gallery from "@/components/layout/Gallery/Gallery";
import css from "./ArtistsAndPerformers.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import { useTranslations } from "next-intl";

export default function ArtistsAndPerformers() {
  const t = useTranslations("creatives");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container>
          <h1>{t("heading")}</h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="galleryHeading">{t("gallery.heading")}</h2>
          <Gallery category="artists-and-performers" group="creatives" />
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
