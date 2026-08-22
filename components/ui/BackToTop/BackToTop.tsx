"use client";

import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import { smoothScrollTo } from "@/lib/utils/smoothScroll";
import css from "./BackToTop.module.css";
import { useTranslations } from "next-intl";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("aria");

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label={t("backToTop")}
      className={`${css.btn} ${visible ? css.visible : ""}`}
      onClick={() => smoothScrollTo()}
    >
      <IoChevronUp />
      <IoChevronUp />
    </button>
  );
}
