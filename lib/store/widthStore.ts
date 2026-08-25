import { create } from "zustand";

type WidthStore = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  setIsMobile: (value: boolean) => void;
  setIsTablet: (value: boolean) => void;
  setIsDesktop: (value: boolean) => void;
};

export const useWidthStore = create<WidthStore>()((set) => ({
  isMobile: true,
  isTablet: true,
  isDesktop: true,

  setIsMobile: (value: boolean) => set({ isMobile: value }),
  setIsTablet: (value: boolean) => set({ isTablet: value }),
  setIsDesktop: (value: boolean) => set({ isDesktop: value }),
}));
