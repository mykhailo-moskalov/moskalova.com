import { photosOf } from "@/lib/data/galleries";
import HeroSwiper from "./Hero.Client";
import { Photo } from "@/lib/types/gallery";

const HERO_GROUPS = [
  [1],
  [2],
  [3, 4, 5],
  [6],
  [7, 8, 9],
  [10],
  [11],
  [12, 13, 14],
  [15, 16, 17],
  [18],
  [19, 20, 21],
  [22],
  [23, 24, 25],
];

export const heroSlides = (): Photo[][] => {
  const photos = photosOf("hero");
  return HERO_GROUPS.map((group) =>
    group.map((n) => {
      const photo = photos[n - 1];
      if (!photo)
        throw new Error(
          `hero: photo #${n} not scanned (have ${photos.length})`,
        );
      return photo;
    }),
  );
};

export default function Hero() {
  return <HeroSwiper slides={heroSlides()} />;
}
