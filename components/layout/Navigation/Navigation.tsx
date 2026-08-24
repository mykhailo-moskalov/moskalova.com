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
  onLinkClick?: () => void;
}

const Navigation = ({
  className,
  isLogo = false,
  isLang = true,
  onLinkClick,
}: NavigationProps) => {
  const t = useTranslations("nav");
  const ta = useTranslations("aria");
  const pathname = usePathname();

  const renderLink = (key: keyof typeof HREFS) => {
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
          {t(key)}
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
            <Logo
              height={
                window.innerWidth >= 768 && window.innerWidth <= 860 ? 36 : 64
              }
            />
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
};

export default Navigation;
