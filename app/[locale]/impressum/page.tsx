import css from "./Impressum.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import { useTranslations } from "next-intl";

export default function Impressum() {
  const t = useTranslations("impressum");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container>
          <h2>{t("heading")}</h2>
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
