"use client";

import { Link } from "@/lib/navigation";
import css from "./Footer.module.css";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
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
        <li className={css.socialsItem}>
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
        <li className={css.socialsItem}>
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
        <li className={css.socialsItem}>
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
        <li className={css.socialsItem}>
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
        Impressum &amp; Datenschutz
      </Link>
      <p className={css.copyright}>
        &copy; {new Date().getFullYear()} Natalia Moskalova Photography
      </p>
    </footer>
  );
};

export default Footer;
