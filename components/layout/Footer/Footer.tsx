"use client";

import css from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";
import { useEffect, useRef } from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const footerRef = useRef<HTMLElement>(null);

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
      <Navigation className={css.nav} isLang={false} withSubmenu={false} />
      <ul className={css.socialsList}>
        <li>
          <Link
            href="https://www.instagram.com/natali.moskalova"
            target="_blank"
            className={css.socialsLink}
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IoLogoInstagram />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/nataly.moskalyova"
            target="_blank"
            className={css.socialsLink}
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FiFacebook />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/natalia-moskalova/"
            target="_blank"
            className={css.socialsLink}
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SlSocialLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/4368110652997"
            target="_blank"
            className={css.socialsLink}
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp />
          </Link>
        </li>
      </ul>
      <Link href="/impressum" className={css.legalLink}>
        {t("impressum")}
      </Link>
      <div className={css.meta}>
        <p className={css.copyright}>
          &copy; {new Date().getFullYear()} {t("copyright")}
        </p>
        <p className={css.credit}>
          {t.rich("credit", {
            link: (chunks) => (
              <a
                href="https://github.com/mykhailo-moskalov"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </footer>
  );
}
