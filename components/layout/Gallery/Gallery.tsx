import { getGroup } from "@/lib/data/galleries";
import GalleryItem from "../GalleryItem/GalleryItem";
import css from "./Gallery.module.css";

type GalleryProps = {
  /** URL segment of the category page, e.g. "brand-stories" */
  category: string;
  /** Group id inside that category — see lib/data/galleries.ts */
  group: string;
};

export default function Gallery({ category, group }: GalleryProps) {
  const sets = getGroup(category, group)?.sets ?? [];
  if (sets.length === 0) return null;

  return (
    <ul className={css.gallery}>
      {sets.map((set, index) => (
        <GalleryItem
          key={set.slug}
          category={category}
          set={set}
          priority={index < 2}
        />
      ))}
    </ul>
  );
}
