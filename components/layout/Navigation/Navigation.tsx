"use client";

import { Link } from "@/lib/navigation";
import css from "./Navigation.module.css";

import * as Accordion from "@radix-ui/react-accordion";

import { IoChevronDown } from "react-icons/io5";
import { smoothScrollTo } from "@/lib/utils/smoothScroll";
import { useTrainingsStore } from "@/lib/store/trainingsStore";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface NavigationProps {
  className?: string;
  chevronClassName?: string;
  onLinkClick?: () => void;
}

const Navigation = ({
  className,
  chevronClassName,
  onLinkClick,
}: NavigationProps) => {
  const swiper = useTrainingsStore((state) => state.swiper);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const accordionRef = useRef<HTMLLIElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const [openItem, setOpenItem] = useState<string>("");
  const teamIds = [
    "miniFlames",
    "fairies",
    "fireflies",
    "firebirds",
    "forces",
    "firestorm",
  ];
  const t = useTranslations("nav");
  const ta = useTranslations("aria");
  const tt = useTranslations("trainings.teams");

  useEffect(() => {
    const updateWidth = () => {
      if (triggerRef.current) {
        setDropdownWidth(triggerRef.current.offsetWidth);
      }
    };
    updateWidth();

    const handleClickOutside = (e: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(e.target as Node)
      ) {
        setOpenItem("");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenItem("");
    };
    window.addEventListener("resize", updateWidth);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", updateWidth);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      className={`${css.nav} ${className}`}
      aria-label={ta("mainNavigation")}
    >
      <ul className={css.navigation}>
        <li className={css.navigationItem}>
          <Link
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("story");
              onLinkClick?.();
            }}
            className={css.navigationLink}
            href="#story"
          >
            <h3 className={css.navigationTitle}>{t("about")}</h3>
          </Link>
        </li>
        <li ref={accordionRef} className={css.navigationItem}>
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
          >
            <Accordion.Item value="teams" className={css.accordionItem}>
              <Accordion.Trigger
                ref={triggerRef}
                className={css.accordionTrigger}
              >
                <h3 className={css.navigationTitle}>
                  {t("teams")}
                  <IoChevronDown
                    className={`${css.chevronBtn} ${chevronClassName}`}
                  />
                </h3>
              </Accordion.Trigger>

              <Accordion.Content
                className={css.accordionContent}
                style={{ minWidth: dropdownWidth }}
              >
                <ul className={css.subNavigation}>
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#miniFlames"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("trainings");
                        swiper?.slideToLoop(teamIds.indexOf("miniFlames"));
                        onLinkClick?.();
                      }}
                      className={css.subLink}
                    >
                      <h4>{tt("miniFlames.name")}</h4>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#fairies"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("trainings");
                        swiper?.slideToLoop(teamIds.indexOf("fairies"));
                        onLinkClick?.();
                      }}
                      className={css.subLink}
                    >
                      <h4>{tt("fairies.name")}</h4>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#fireflies"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("trainings");
                        swiper?.slideToLoop(teamIds.indexOf("fireflies"));
                        onLinkClick?.();
                      }}
                      className={css.subLink}
                    >
                      <h4>{tt("fireflies.name")}</h4>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#firebirds"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("trainings");
                        swiper?.slideToLoop(teamIds.indexOf("firebirds"));
                        onLinkClick?.();
                      }}
                      className={css.subLink}
                    >
                      <h4>{tt("firebirds.name")}</h4>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#forces"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("trainings");
                        swiper?.slideToLoop(teamIds.indexOf("forces"));
                        onLinkClick?.();
                      }}
                      className={css.subLink}
                    >
                      <h4>{tt("forces.name")}</h4>
                    </Link>
                  </li>
                  <li className={css.subNavigationItem}>
                    <Link
                      href="#firestorm"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("trainings");
                        swiper?.slideToLoop(teamIds.indexOf("firestorm"));
                        onLinkClick?.();
                      }}
                      className={css.subLink}
                    >
                      <h4>{tt("firestorm.name")}</h4>
                    </Link>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
