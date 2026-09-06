import { create } from "zustand";

type WidthStore = {
  isDesktop: boolean;
  setIsDesktop: (value: boolean) => void;
};

export const useWidthStore = create<WidthStore>()((set) => ({
  isDesktop: true,
  setIsDesktop: (value: boolean) => set({ isDesktop: value }),
}));
