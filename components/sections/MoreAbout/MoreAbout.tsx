import css from "@/app/[locale]/about/About.module.css";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";

export default function MoreAbout() {
  const t = useTranslations("about");
  return (
    <Section className={css.section}>
      <Container className={css.moreContainer}>
        <p className={css.preHeading}>{t("preHeading2")}</p>
        <p className={css.text}>{t("text5")}</p>
        <p className={css.text}>{t("text6")}</p>
      </Container>
    </Section>
  );
}
