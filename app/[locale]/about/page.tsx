import css from "./About.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import { useTranslations } from "next-intl";

export default function ArtistsAndPerformers() {
  const t = useTranslations("about");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container>
          <h1>{t("heading")}</h1>
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
