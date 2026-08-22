"use client";

import { Link } from "@/lib/navigation";
import css from "./Navigation.module.css";

import { useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo/Logo";
import LangSwitcher from "@/components/ui/LangSwitcher/LangSwitcher";

interface NavigationProps {
  className?: string;
  isLogo?: boolean;
  onLinkClick?: () => void;
}

const Navigation = ({
  className,
  isLogo = false,
  onLinkClick,
}: NavigationProps) => {
  const t = useTranslations("nav");
  const ta = useTranslations("aria");

  return (
    <nav
      className={`${css.nav} ${className}`}
      aria-label={ta("mainNavigation")}
    >
      <ul className={css.navigation}>
        <li className={css.navigationItem}>
          <ul className={css.navLeft}>
            <li className={css.navLeftItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("home")}
              </Link>
            </li>
            <li className={css.navLeftItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("brand")}
              </Link>
            </li>
            <li className={css.navLeftItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("personal")}
              </Link>
            </li>
            <li className={css.navLeftItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("creatives")}
              </Link>
            </li>
          </ul>
        </li>

        {isLogo && (
          <li className={css.navigationItem}>
            <Logo height={64} />
          </li>
        )}

        <li className={css.navigationItem}>
          <ul className={css.navRight}>
            <li className={css.navRightItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("services")}
              </Link>
            </li>
            <li className={css.navRightItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("about")}
              </Link>
            </li>
            <li className={css.navRightItem}>
              <Link
                className={css.navigationLink}
                href="#"
                onClick={() => {
                  onLinkClick?.();
                }}
              >
                {t("contact")}
              </Link>
            </li>
            <LangSwitcher className={css.navRightItem} />
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
