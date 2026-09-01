import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import css from "./Motto.module.css";
import { useTranslations } from "next-intl";
import Btn from "@/components/ui/Btn/Btn";

type MottoProps = {
  namespace: string;
  as?: "h1" | "h2";
  href: string;
};

export default function Motto({
  namespace,
  as: Heading = "h1",
  href,
}: MottoProps) {
  const t = useTranslations(namespace);
  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <div className={css.textBox}>
          <Heading className={css.heading}>{t("heading")}</Heading>
          {t.has("subHeading") && (
            <span className={css.subHeading}>
              <strong>{t("subHeading")}</strong>
            </span>
          )}
          <p className={css.subText}>
            {t.rich("text1", { em: (chunks) => <em>{chunks}</em> })}
          </p>
          <p className={css.subText}>{t("text2")}</p>

          {t.has("btn") && (
            <Btn href={href} className={css.btn}>
              {t("btn")}
            </Btn>
          )}
        </div>
      </Container>
    </Section>
  );
}
