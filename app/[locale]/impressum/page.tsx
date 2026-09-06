import css from "./Impressum.module.css";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";

export default function Impressum() {
  const t = useTranslations("impressum");
  const operator = t.raw("operator") as string[];
  const details = t.raw("details") as string[];
  const sections = t.raw("sections") as Record<
    string,
    { heading: string; text: string[] }
  >;

  return (
    <main>
      <Section>
        <Container className={css.container}>
          <Heading text={t("heading")} as="h1" />
          <p className={css.intro}>{t("intro")}</p>

          <div className={css.block}>
            {operator.map((line) => (
              <p key={line} className={css.line}>
                {line}
              </p>
            ))}
          </div>

          <div className={css.block}>
            {details.map((line) => (
              <p key={line} className={css.line}>
                {line}
              </p>
            ))}
          </div>

          {Object.entries(sections).map(([id, section]) => (
            <section key={id}>
              <h2 className={css.subHeading}>{section.heading}</h2>
              {section.text.map((paragraph) => (
                <p key={paragraph} className={css.text}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </Container>
      </Section>
    </main>
  );
}
