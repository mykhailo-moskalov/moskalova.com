"use client";

import css from "./Navigation.module.css";
import { useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo/Logo";
import LangSwitcher from "@/components/ui/LangSwitcher/LangSwitcher";
import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDown } from "react-icons/io5";
import { Link, usePathname } from "@/lib/navigation";
import { HREFS, LEFT_LINKS, RIGHT_LINKS } from "@/lib/constants/navLinks";

interface NavigationProps {
  className?: string;
  langClassName?: string;
  isLogo?: boolean;
  isLang?: boolean;
  withSubmenu?: boolean;
  subAccordionPersonal?: boolean;
  subAccordionBrand?: boolean;
  onLinkClick?: () => void;
}

export default function Navigation({
  className,
  langClassName,
  isLogo = false,
  isLang = true,
  withSubmenu = true,
  subAccordionPersonal = false,
  subAccordionBrand = false,
  onLinkClick,
}: NavigationProps) {
  const t = useTranslations("nav");
  const ta = useTranslations("aria");
  const pathname = usePathname();

  const renderPersonal = () => {
    const href = HREFS.personal;
    const isActive = pathname.startsWith(href);

    const subLinksPersonal = (
      <ul
        className={`${css.subMenu} ${subAccordionPersonal ? css.subMenuStatic : ""} accordionDropdownUl subMenu`}
      >
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
    );

    if (subAccordionPersonal) {
      return (
        <li key="personal" className={css.navigationItem}>
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="personal">
              <Accordion.Trigger
                className={`${css.accordionTrigger} ${isActive ? css.activeTrigger : ""}`}
              >
                {t("personal.main")}
                <IoChevronDown aria-hidden="true" />
              </Accordion.Trigger>
              <Accordion.Content className={css.accordionContent}>
                {subLinksPersonal}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </li>
      );
    }

    return (
      <li key="personal" className={`${css.navigationItem} ${css.hasSub}`}>
        <Link
          className={css.navigationLink}
          href={href}
          aria-current={isActive ? "page" : undefined}
          onClick={onLinkClick}
        >
          {t("personal.main")}
        </Link>
        <div className={css.subPanel}>{subLinksPersonal}</div>
      </li>
    );
  };

  const renderBrand = () => {
    const href = HREFS.brand;
    const isActive = pathname.startsWith(href);

    const subLinksBrand = (
      <ul
        className={`${css.subMenu} ${subAccordionBrand ? css.subMenuStatic : ""} accordionDropdownUl subMenu`}
      >
        <li>
          <Link className={css.subLink} href={href} onClick={onLinkClick}>
            {t("brand.personalBrand")}
          </Link>
        </li>
        <li>
          <Link
            className={css.subLink}
            href={`${href}#brands`}
            onClick={onLinkClick}
          >
            {t("brand.brand")}
          </Link>
        </li>
        <li>
          <Link
            className={css.subLink}
            href={`${href}#hospitality`}
            onClick={onLinkClick}
          >
            {t("brand.interior")}
          </Link>
        </li>
      </ul>
    );

    if (subAccordionBrand) {
      return (
        <li key="brand" className={css.navigationItem}>
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="brand">
              <Accordion.Trigger
                className={`${css.accordionTrigger} ${isActive ? css.activeTrigger : ""}`}
              >
                {t("brand.main")}
                <IoChevronDown aria-hidden="true" />
              </Accordion.Trigger>
              <Accordion.Content className={css.accordionContent}>
                {subLinksBrand}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </li>
      );
    }

    return (
      <li key="brand" className={`${css.navigationItem} ${css.hasSub}`}>
        <Link
          className={css.navigationLink}
          href={href}
          aria-current={isActive ? "page" : undefined}
          onClick={onLinkClick}
        >
          {t("brand.main")}
        </Link>
        <div className={css.subPanel}>{subLinksBrand}</div>
      </li>
    );
  };

  const renderLink = (key: keyof typeof HREFS) => {
    if (key === "personal" && withSubmenu) return renderPersonal();
    if (key === "brand" && withSubmenu) return renderBrand();
    const href = HREFS[key];
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <li key={key} className={css.navigationItem}>
        <Link
          className={css.navigationLink}
          href={href}
          aria-current={isActive ? "page" : undefined}
          onClick={onLinkClick}
        >
          {key === "personal"
            ? t("personal.main")
            : key === "brand"
              ? t("brand.main")
              : t(key)}
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
            <Logo />
          </li>
        )}

        <li className={css.navigationItem}>
          <ul className={css.navRight}>
            {RIGHT_LINKS.map(renderLink)}
            {isLang && (
              <LangSwitcher
                className={`${css.navigationItem} ${langClassName ?? ""}`}
              />
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
