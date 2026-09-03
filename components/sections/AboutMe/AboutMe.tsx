import css from "@/app/[locale]/about/About.module.css";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import { photosOf } from "@/lib/data/galleries";
import Heading from "@/components/ui/Heading/Heading";

const ABOUT = photosOf("about");

export default function AboutMe() {
  const t = useTranslations("about");
  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <Image
          src={ABOUT[0]}
          alt=""
          sizes="(min-width: 1440px) 600px, 60vw"
          className={css.img}
        />
        <div className={css.textDiv}>
          <p className={css.preHeading}>{t("preHeading1")}</p>
          <Heading text={t("heading")} className={css.heading} />
          <p className={css.text}>{t("text1")}</p>
          <p className={css.text}>{t("text2")}</p>
          <p className={css.text}>{t("text3")}</p>
          <p className={css.text}>{t("text4")}</p>
        </div>
      </Container>
    </Section>
  );
}
