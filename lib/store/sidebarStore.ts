import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
