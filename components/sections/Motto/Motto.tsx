import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import css from "./Motto.module.css";
import { useTranslations } from "next-intl";
import Btn from "@/components/ui/Btn/Btn";

export default function Motto() {
  const t = useTranslations("home.motto");
  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <div className={css.textBox}>
          <h1 className={css.heading}>{t("heading")}</h1>
          <span className={css.subHeading}>
            <strong>{t("subHeading")}</strong>
          </span>
          <p className={css.subText}>
            {t("text1")}
            <em>{t("text1Italic")}.</em>
          </p>
          <p className={css.subText}>{t("text2")}</p>

          <Btn href="/about" className={css.btn}>
            {t("btn")}
          </Btn>
        </div>
      </Container>
    </Section>
  );
}
