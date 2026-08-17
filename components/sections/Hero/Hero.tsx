"use client";

import { Link } from "@/lib/navigation";
import Container from "../../ui/Container/Container";
import css from "./Hero.module.css";
import Section from "../../ui/Section/Section";
import { useEffect, useRef } from "react";
import { smoothScrollTo } from "@/lib/utils/smoothScroll";
import { useTranslations } from "next-intl";

const Hero = () => {
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("hero");

  useEffect(() => {
    const updateHeight = () => {
      requestAnimationFrame(() => {
        if (bottomDivRef.current) {
          document.documentElement.style.setProperty(
            "--bottom-div-height",
            `${Math.ceil(bottomDivRef.current.offsetHeight)}px`,
          );
        }
      });
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Section id="hero" className={css.hero}>
      <Container className={css.container}>
        <h1 className={css.heading}>{t("heading")}</h1>
        <p className={css.subHeading}>{t("subtitle")}</p>

        <Link
          href="#trainings"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("trainings");
          }}
          className={css.link}
        >
          {t("cta")}
        </Link>
      </Container>
      <div ref={bottomDivRef} className={css.bottomDiv}></div>
    </Section>
  );
};

export default Hero;
