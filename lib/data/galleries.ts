import type { GalleryCategory } from "@/lib/types/gallery";
export { photosOf, set } from "./photos";
import { COUPLES_SETS, PERSONAL_SETS } from "./personal";
import { BRAND_SETS } from "./brand";
import { CREATIVES_SETS } from "./creatives";

export const GALLERIES: GalleryCategory[] = [
  {
    slug: "brand-stories",
    groups: [
      {
        id: "brand",
        sets: BRAND_SETS,
      },
    ],
  },
  {
    slug: "personal-stories",
    groups: [
      {
        id: "personal",
        sets: PERSONAL_SETS,
      },
      {
        id: "couples",
        sets: COUPLES_SETS,
      },
    ],
  },
  {
    slug: "artists-and-performers",
    groups: [
      {
        id: "creatives",
        sets: CREATIVES_SETS,
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
