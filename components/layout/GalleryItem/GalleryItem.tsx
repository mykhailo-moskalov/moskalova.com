import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/lib/navigation";
import { localize, type GallerySet } from "@/lib/types/gallery";
import css from "./GalleryItem.module.css";

type GalleryItemProps = {
  category: string;
  set: GallerySet;
  priority?: boolean;
};

export default function GalleryItem({
  category,
  set,
  priority = false,
}: GalleryItemProps) {
  const locale = useLocale();
  const title = localize(set.title, locale);
  const subtitle = localize(set.subtitle, locale);

  return (
    <li className={css.item}>
      <Link href={`/${category}/${set.slug}`} className={css.link}>
        <span className={css.thumb}>
          <Image
            src={set.cover.src}
            alt={localize(set.cover.alt, locale) || title}
            fill
            sizes="(min-width: 1440px) 560px, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className={css.img}
          />
        </span>
        <span className={css.caption}>
          <span className={css.title}>{title}</span>
          {subtitle && <span className={css.subtitle}>{subtitle}</span>}
        </span>
      </Link>
    </li>
  );
}
