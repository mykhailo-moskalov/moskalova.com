import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import css from "./Motto.module.css";
import { useTranslations } from "next-intl";
import Btn from "@/components/ui/Btn/Btn";

type MottoProps = {
  namespace: string;
  as?: "h1" | "h2";
  href?: string;
  backg?: boolean;
  caps?: boolean;
};

export default function Motto({
  namespace,
  as: Heading = "h2",
  href,
  backg = false,
  caps = false,
}: MottoProps) {
  const t = useTranslations(namespace);
  return (
    <Section className={`${backg && css.section}`}>
      <Container className={css.container}>
        <div className={`${css.textBox} ${backg && css.noBorder}`}>
          <Heading className={`${css.heading} ${caps ? css.caps : ""}`}>
            {t("heading")}
          </Heading>
          {t.has("subHeading") && (
            <span className={`${css.subHeading} ${caps ? css.caps : ""}`}>
              <strong>{t("subHeading")}</strong>
            </span>
          )}
          <p className={css.subText}>
            {t.rich("text1", { em: (chunks) => <em>{chunks}</em> })}
          </p>
          {t.has("text2") && <p className={css.subText}>{t("text2")}</p>}
          {t.has("text3") && <p className={css.subText}>{t("text3")}</p>}

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
