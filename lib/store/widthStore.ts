import { create } from "zustand";

type WidthStore = {
  isMobile: boolean;
  isTablet: boolean;
  setIsMobile: (value: boolean) => void;
  setIsTablet: (value: boolean) => void;
};

export const useWidthStore = create<WidthStore>()((set) => ({
  isMobile: true,
  isTablet: true,
  setIsMobile: (value: boolean) => set({ isMobile: value }),
  setIsTablet: (value: boolean) => set({ isTablet: value }),
}));
