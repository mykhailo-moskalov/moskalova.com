"use client";

import { Link } from "@/lib/navigation";
import Container from "../../ui/Container/Container";
import Logo from "../../ui/Logo/Logo";
import css from "./Footer.module.css";
import { IoLocation, IoLogoInstagram, IoMail, IoOpen } from "react-icons/io5";
import { useWidthStore } from "@/lib/store/widthStore";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const isMobile = useWidthStore((state) => state.isMobile);
  const footerRef = useRef<HTMLElement>(null);
  const t = useTranslations("footer");

  useEffect(() => {
    const updateHeight = () => {
      requestAnimationFrame(() => {
        if (footerRef.current) {
          document.documentElement.style.setProperty(
            "--footer-height",
            `${Math.ceil(footerRef.current.offsetHeight)}px`,
          );
        }
      });
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <footer id="footer" className={css.footer} ref={footerRef}>
      <Container className={css.container}>
        <Logo width={isMobile ? 60 : 120} height={isMobile ? 95 : 190} />
        <div className={css.textDiv}>
          <ul className={css.socialsList}>
            <li className={css.socialsItem}>
              <Link
                href="https://www.instagram.com/blackfirecheer/"
                target="_blank"
                className={css.socialsLink}
              >
                <IoLogoInstagram />
                blackfirecheer
              </Link>
            </li>
            <li className={css.socialsItem}>
              <Link
                href="tel:+436644230063"
                target="_blank"
                className={css.socialsLink}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                +436644230063
              </Link>
            </li>
            <li className={css.socialsItem}>
              <Link
                href="https://maps.app.goo.gl/LHXVDDkNTqQy34UD6"
                target="_blank"
                className={css.socialsLink}
              >
                <IoLocation />
                Ortsstraße 214/3/26 2331 VÖSENDORF
              </Link>
            </li>
            <li className={css.socialsItem}>
              <Link
                href="mailto:office@blackfirecheer.at"
                target="_blank"
                className={css.socialsLink}
              >
                <IoMail />
                office@blackfirecheer.at
              </Link>
            </li>
          </ul>
          <Link href="/legal" className={css.legalLink}>
            <IoOpen />
            {t("legal")}
          </Link>
          <p className={css.copyright}>
            &copy; {new Date().getFullYear()}
            {t("copyright")}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
