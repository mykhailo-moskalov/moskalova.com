import type { GalleryCategory, GallerySet, Photo } from "@/lib/types/gallery";
import manifest from "./galleries.generated.json";

const P = "/galleries/_placeholders/";

const ph = (n: 1 | 2 | 3 | 4): Photo => ({
  src: `${P}portrait-${n}.jpg`,
  width: 1200,
  height: 1600,
});
const pl = (n: 1 | 2): Photo => ({
  src: `${P}landscape-${n}.jpg`,
  width: 1600,
  height: 1067,
});

const photosOf = (folder: string): Photo[] => {
  const entries = (
    manifest as Record<
      string,
      { file: string; width: number; height: number }[]
    >
  )[folder];
  if (!entries) {
    throw new Error(`No scanned photos for "${folder}" — run npm run scan`);
  }
  return entries.map((e) => ({
    src: `/galleries/${folder}/${e.file}`,
    width: e.width,
    height: e.height,
  }));
};

const SOPHIIA = photosOf("personal/sophiia");

const set = (
  slug: string,
  title: string,
  cover: Photo,
  photos: Photo[],
  extra?: Partial<GallerySet>,
): GallerySet => ({ slug, title: { en: title }, cover, photos, ...extra });

export const GALLERIES: GalleryCategory[] = [
  {
    slug: "brand-stories",
    groups: [
      {
        id: "brand",
        sets: [
          set(
            "studio-lumen",
            "Studio Lumen",
            ph(1),
            [ph(1), pl(1), ph(2), ph(3)],
            {
              title: { en: "Studio Lumen", uk: "Студія Lumen" },
              subtitle: { en: "Brand campaign", uk: "Брендова кампанія" },
            },
          ),
          set("atelier-vera", "Atelier Vera", ph(2), [ph(2), ph(4), pl(2)], {
            title: { en: "Atelier Vera", uk: "Майстерня «Вера»" },
            subtitle: { en: "Lookbook", uk: "Лукбук" },
          }),
          set("cafe-nord", "Café Nord", ph(3), [pl(1), ph(3), ph(1)], {
            title: { en: "Café Nord", uk: "Кафе «Норд»" },
            subtitle: { en: "Interior & team", uk: "Інтерʼєр і команда" },
          }),
          set("oak-and-ash", "Oak & Ash", ph(4), [ph(4), pl(2), ph(2)], {
            title: { en: "Oak & Ash", uk: "Дуб & ясен" },
            subtitle: { en: "Product story", uk: "Історія продукту" },
          }),
        ],
      },
    ],
  },
  {
    slug: "personal-stories",
    groups: [
      {
        id: "personal",
        sets: [
          set("marta", "Marta", ph(2), [ph(2), ph(1), pl(1)], {
            title: { en: "Marta", uk: "Марта" },
            subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
          }),
          set("sophiia", "Sophiia", SOPHIIA[1], SOPHIIA, {
            title: { en: "Sophiia", uk: "Софія" },
            subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
          }),
          set("daniel", "Daniel", ph(4), [ph(4), pl(2), ph(3)], {
            title: { en: "Daniel", uk: "Даніель" },
            subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
          }),
        ],
      },
      {
        id: "couples",
        sets: [
          set("anna-and-oleh", "Anna & Oleh", ph(1), [ph(1), pl(1), ph(4)], {
            title: { en: "Anna & Oleh", uk: "Анна & Оле" },
            subtitle: { en: "Engagement", uk: "Заручини" },
          }),
          set("the-kovals", "The Kovals", ph(3), [ph(3), ph(2), pl(2)], {
            title: { en: "The Kovals", uk: "Родина Ковалів" },
            subtitle: { en: "Family", uk: "Сімейна зйомка" },
          }),
        ],
      },
    ],
  },
  {
    slug: "artists-and-performers",
    groups: [
      {
        id: "creatives",
        sets: [
          set("sofia-cello", "Sofia", ph(3), [ph(3), pl(1), ph(1)], {
            title: { en: "Sofia", uk: "Софія" },
            subtitle: { en: "Cellist", uk: "Віолончелістка" },
          }),
          set(
            "kyiv-modern-dance",
            "Kyiv Modern Dance",
            ph(1),
            [pl(2), ph(1), ph(4)],
            {
              title: { en: "Kyiv Modern Dance", uk: "Kyiv Modern Dance" },
              subtitle: { en: "Dance company", uk: "Танцювальна трупа" },
            },
          ),
        ],
      },
    ],
  },
];

export const getCategory = (slug: string) =>
  GALLERIES.find((c) => c.slug === slug);

export const getGroup = (categorySlug: string, groupId: string) =>
  getCategory(categorySlug)?.groups.find((g) => g.id === groupId);

export const getSet = (categorySlug: string, setSlug: string) =>
  getCategory(categorySlug)
    ?.groups.flatMap((g) => g.sets)
    .find((s) => s.slug === setSlug);

export const allSetParams = () =>
  GALLERIES.flatMap((c) =>
    c.groups.flatMap((g) =>
      g.sets.map((s) => ({ category: c.slug, set: s.slug })),
    ),
  );
