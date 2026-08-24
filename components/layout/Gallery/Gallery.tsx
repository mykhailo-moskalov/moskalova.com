import { getGroup } from "@/lib/data/galleries";
import GalleryItem from "../GalleryItem/GalleryItem";
import Reveal from "@/components/ui/Reveal/Reveal";
import css from "./Gallery.module.css";

type GalleryProps = {
  category: string;
  group: string;
};

export default function Gallery({ category, group }: GalleryProps) {
  const sets = getGroup(category, group)?.sets ?? [];
  if (sets.length === 0) return null;

  return (
    <ul className={css.gallery}>
      {sets.map((set, index) => (
        <Reveal key={set.slug} as="li" index={index % 2} className={css.item}>
          <GalleryItem category={category} set={set} priority={index < 2} />
        </Reveal>
      ))}
    </ul>
  );
}
