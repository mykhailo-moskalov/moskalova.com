"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/lib/navigation";
import css from "./LangSwitcher.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { IoGlobeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const accordionRef = useRef<HTMLLIElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const [openItem, setOpenItem] = useState<string>("");
  const t = useTranslations("aria");

  const changeLanguage = (newLocale: "en" | "uk") => {
    router.replace(pathname, { locale: newLocale });
  };

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
    <li className={className && className} ref={accordionRef}>
      <Accordion.Root
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        <Accordion.Item value="teams" className={css.accordionItem}>
          <Accordion.Trigger
            ref={triggerRef}
            className={`${css.btn} ${css.accordionTrigger}`}
          >
            <IoGlobeOutline />
          </Accordion.Trigger>
          <Accordion.Content
            className={css.accordionContent}
            style={{ minWidth: dropdownWidth }}
          >
            <ul className={css.subNavigation}>
              <li
                className={css.subNavigationItem}
                onClick={() => changeLanguage("en")}
                aria-label={t("switchLanguage")}
              >
                EN
              </li>
              <li
                className={css.subNavigationItem}
                onClick={() => changeLanguage("uk")}
                aria-label={t("switchLanguage")}
              >
                UA
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </li>
  );
};

export default LangSwitcher;
