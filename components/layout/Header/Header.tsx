"use client";

import { IoArrowBack, IoMenu } from "react-icons/io5";
import Logo from "../../ui/Logo/Logo";
import Container from "../../ui/Container/Container";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import { useSidebarStore } from "@/lib/store/sidebarStore";
import { useWidthStore } from "@/lib/store/widthStore";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/lib/navigation";
import { useTranslations } from "next-intl";

const Header = () => {
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const isMobile = useWidthStore((state) => state.isMobile);
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");
  const ta = useTranslations("aria");

  const isLegal = pathname === "/impressum";

  const [scrolled, setScrolled] = useState(isLegal);

  useEffect(() => {
    const updateHeight = () => {
      requestAnimationFrame(() => {
        if (headerRef.current) {
          document.documentElement.style.setProperty(
            "--header-height",
            `${Math.ceil(headerRef.current.offsetHeight)}px`,
          );
        }
      });
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    if (isLegal)
      return () => window.removeEventListener("resize", updateHeight);

    const handleScroll = () => setScrolled(window.scrollY >= 300);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLegal]);

  return (
    <header
      id="header"
      className={`${css.header} ${scrolled ? css.scrolled : ""}`}
      ref={headerRef}
    >
      <Container className={css.headerContainer}>
        {isLegal ? (
          <>
            <Logo height={isMobile ? 48 : 64} />
            <button
              aria-label={ta("goBack")}
              onClick={router.back}
              className={`${css.backBtn} transp`}
            >
              ← {t("goBack")}
            </button>
          </>
        ) : isMobile ? (
          <>
            <Logo height={48} />
            <button
              aria-label={ta("openMenu")}
              className={`${css.burger} transp`}
              onClick={() => setIsOpen(true)}
            >
              <IoMenu />
            </button>
          </>
        ) : (
          <Navigation className={css.nav} isLogo={true} />
        )}
      </Container>
    </header>
  );
};

export default Header;
