"use client";

import { useEffect } from "react";
import { useWidthStore } from "@/lib/store/widthStore";

export default function ScreenWidthWatcher() {
  const setIsMobile = useWidthStore((state) => state.setIsMobile);
  const setIsTablet = useWidthStore((state) => state.setIsTablet);
  const setIsDesktop = useWidthStore((state) => state.setIsDesktop);

  useEffect(() => {
    const checkMobileSize = () => setIsMobile(window.innerWidth < 768);
    const checkTabletSize = () =>
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1440);
    const checkDesktopSize = () => setIsDesktop(window.innerWidth >= 1440);
    checkMobileSize();
    checkTabletSize();
    checkDesktopSize();

    window.addEventListener("resize", checkMobileSize);
    window.addEventListener("resize", checkTabletSize);
    window.addEventListener("resize", checkDesktopSize);
    return () => {
      window.removeEventListener("resize", checkMobileSize);
      window.removeEventListener("resize", checkTabletSize);
      window.removeEventListener("resize", checkDesktopSize);
    };
  }, [setIsMobile, setIsTablet, setIsDesktop]);

  return null;
}
