"use client";

import { Link, usePathname } from "@/lib/navigation";
import css from "./Navigation.module.css";

import { useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo/Logo";
import LangSwitcher from "@/components/ui/LangSwitcher/LangSwitcher";
import { HREFS, LEFT_LINKS, RIGHT_LINKS } from "@/lib/constants/navLinks";

interface NavigationProps {
  className?: string;
  isLogo?: boolean;
  isLang?: boolean;
  withSubmenu?: boolean;
  onLinkClick?: () => void;
}

export default function Navigation({
  className,
  isLogo = false,
  isLang = true,
  withSubmenu = true,
  onLinkClick,
}: NavigationProps) {
  const t = useTranslations("nav");
  const ta = useTranslations("aria");
  const pathname = usePathname();

  // "Personal" carries a hover submenu (CSS-only: see .hasSub / .subMenu)
  const renderPersonal = () => {
    const href = HREFS.personal;
    const isActive = pathname.startsWith(href);
    return (
      <li key="personal" className={`${css.navItem} ${css.hasSub}`}>
        <Link
          className={css.navigationLink}
          href={href}
          aria-current={isActive ? "page" : undefined}
          onClick={onLinkClick}
        >
          {t("personal.main")}
        </Link>
        <ul className={css.subMenu}>
          <li>
            <Link className={css.subLink} href={href} onClick={onLinkClick}>
              {t("personal.personal")}
            </Link>
          </li>
          <li>
            <Link
              className={css.subLink}
              href={`${href}#couples`}
              onClick={onLinkClick}
            >
              {t("personal.couples")}
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const renderLink = (key: keyof typeof HREFS) => {
    if (key === "personal" && withSubmenu) return renderPersonal();
    const href = HREFS[key];
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <li key={key} className={css.navItem}>
        <Link
          className={css.navigationLink}
          href={href}
          aria-current={isActive ? "page" : undefined}
          onClick={onLinkClick}
        >
          {key === "personal" ? t("personal.main") : t(key)}
        </Link>
      </li>
    );
  };

  return (
    <nav
      className={`${css.nav} ${className}`}
      aria-label={ta("mainNavigation")}
    >
      <ul className={css.navigation}>
        <li className={css.navigationItem}>
          <ul className={css.navLeft}>{LEFT_LINKS.map(renderLink)}</ul>
        </li>

        {isLogo && (
          <li className={css.navigationItem}>
            <Logo height={64} />
          </li>
        )}

        <li className={css.navigationItem}>
          <ul className={css.navRight}>
            {RIGHT_LINKS.map(renderLink)}
            {isLang && <LangSwitcher className={css.navItem} />}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
