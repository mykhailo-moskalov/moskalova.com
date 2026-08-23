import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import css from "./Home.module.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main>
      <Section className={css.section}>
        <Container>
          <h2>{t("heading")}</h2>
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
