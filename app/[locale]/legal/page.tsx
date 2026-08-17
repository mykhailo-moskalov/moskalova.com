"use client";

import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import css from "./Impressum.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function Legal() {
  const t = useTranslations("legal");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container className={css.container}>
          <h1>{t("heading")}</h1>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>{t("ecg.heading")}</h2>
          <ul className={css.list}>
            <li>
              <p>{t("ecg.name")}</p>
            </li>
            <li>
              <p>Ortsstraße 214/3/26</p>
            </li>
            <li>
              <p>2331 Vösendorf</p>
            </li>
            <li>
              <p>{t("ecg.country")}</p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>{t("contact.heading")}</h2>
          <ul className={css.list}>
            <li>
              <p>
                {t("contact.phone")}
                <Link href="tel:+436644230063">+436644230063</Link>
              </p>
            </li>
            <li>
              <p>
                E-Mail:{" "}
                <Link href="mailto:office@blackfirecheer.at">
                  office@blackfirecheer.at
                </Link>
              </p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>{t("register.heading")}</h2>
          <p>{t("register.text")}</p>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>{t("liability.heading")}</h2>
          <p>{t("liability.text")}</p>
        </Container>
      </Section>

      <Section className={css.section}>
        <Container className={css.container}>
          <h2 className={css.heading}>{t("privacyPolicy.heading")}</h2>
          <p>{t("privacyPolicy.text")}</p>
        </Container>
      </Section>
      <BackToTop />
    </main>
  );
}
