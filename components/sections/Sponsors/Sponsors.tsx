"use client";

import { Link } from "@/lib/navigation";
import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import css from "./Sponsors.module.css";
import Image from "next/image";
import { useWidthStore } from "@/lib/store/widthStore";
import { useTranslations } from "next-intl";

const Sponsors = () => {
  const isMobile = useWidthStore((state) => state.isMobile);
  const t = useTranslations("sponsors");

  return (
    <Section id="sponsors" className={css.sponsors}>
      <Container className={css.container}>
        <h2 className={css.heading}>
          {t("heading1")}
          <br />
          <span className="pad">{t("heading2")}</span>
        </h2>
        <Link
          href="https://renault-schwechat.at/"
          target="_blank"
          className={css.sponsorsLink}
        >
          <Image
            width={isMobile ? 190 : 380}
            height={isMobile ? 80 : 160}
            alt="Renauld Zidek Logo"
            src="/sponsors/LOGO-RZS.webp"
            className={css.gclean}
          />
        </Link>
      </Container>
    </Section>
  );
};

export default Sponsors;
