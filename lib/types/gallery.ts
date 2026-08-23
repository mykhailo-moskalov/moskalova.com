import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

export type Localized = { en: string } & Partial<Record<Locale, string>>;

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt?: Localized;
};

export type GallerySet = {
  slug: string;
  title: Localized;
  subtitle?: Localized;
  cover: Photo;
  photos: Photo[];
};

export type GalleryGroup = {
  id: string;
  sets: GallerySet[];
};

export type GalleryCategory = {
  slug: string;
  groups: GalleryGroup[];
};

export const localize = (text: Localized | undefined, locale: string) =>
  text ? (text[locale as Locale] ?? text.en) : "";
