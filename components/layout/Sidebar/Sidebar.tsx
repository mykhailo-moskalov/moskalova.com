"use client";

import css from "./Sidebar.module.css";

import Navigation from "../Navigation/Navigation";

import { useEffect } from "react";
import { useWidthStore } from "@/lib/store/widthStore";
import { useSidebarStore } from "@/lib/store/sidebarStore";
import { IoClose } from "react-icons/io5";
import Container from "../../ui/Container/Container";
import { usePathname } from "@/lib/navigation";
import LangSwitcher from "@/components/ui/LangSwitcher/LangSwitcher";
import { useTranslations } from "next-intl";

export default function Sidebar() {
  const isMobile = useWidthStore((state) => state.isMobile);
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setIsOpen = useSidebarStore((state) => state.setIsOpen);
  const pathname = usePathname();
  const t = useTranslations("aria");

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  if (!isMobile || pathname === "/legal") return null;

  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.show : css.hide}`}
      role="dialog"
      aria-modal="true"
      aria-label={t("navigation")}
      onClick={handleBackdropClick}
    >
      <div className={`${css.sidebar} ${isOpen ? css.open : css.closed}`}>
        <Container className={css.sidebarContainer}>
          <button
            aria-label={t("closeMenu")}
            className={css.btnClose}
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>
          <Navigation
            className={css.nav}
            onLinkClick={() => setIsOpen(false)}
          />
          <LangSwitcher className={css.btnLang} />
        </Container>
      </div>
    </div>
  );
}
