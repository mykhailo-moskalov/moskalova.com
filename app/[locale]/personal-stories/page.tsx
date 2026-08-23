import Gallery from "@/components/layout/Gallery/Gallery";
import css from "./PersonalStories.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import { useTranslations } from "next-intl";

export default function PersonalStories() {
  const t = useTranslations("personal");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container>
          <h2>{t("heading")}</h2>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="galleryHeading">{t("gallery.heading1")}</h2>
          <Gallery category="personal-stories" group="personal" />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="galleryHeading">{t("gallery.heading2")}</h2>
          <Gallery category="personal-stories" group="couples" />
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
