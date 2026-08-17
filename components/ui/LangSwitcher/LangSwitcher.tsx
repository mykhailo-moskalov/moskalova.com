"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/lib/navigation";
import css from "./LangSwitcher.module.css";
import { IoGlobe } from "react-icons/io5";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("aria");

  const toggleLanguage = () => {
    const nextLocale = locale === "de" ? "en" : "de";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      className={`${css.btn} ${className && className}`}
      onClick={toggleLanguage}
      aria-label={t("switchLanguage")}
    >
      <IoGlobe />
    </button>
  );
};

export default LangSwitcher;
