"use client";

import { useEffect } from "react";
import { useWidthStore } from "@/lib/store/widthStore";

export default function ScreenWidthWatcher() {
  const setIsDesktop = useWidthStore((state) => state.setIsDesktop);

  useEffect(() => {
    const checkDesktopSize = () => setIsDesktop(window.innerWidth >= 1440);
    checkDesktopSize();

    window.addEventListener("resize", checkDesktopSize);
    return () => {
      window.removeEventListener("resize", checkDesktopSize);
    };
  }, [setIsDesktop]);

  return null;
}
