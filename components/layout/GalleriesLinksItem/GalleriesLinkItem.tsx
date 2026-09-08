import css from "./GalleriesLinksItem.module.css";
import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
import Btn from "@/components/ui/Btn/Btn";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { HREFS } from "@/lib/constants/navLinks";
import { photo } from "@/lib/data/galleries";

type GalleriesLinksItemProps = {
  className?: string;
  id: string;
};

export default function GalleriesLinksItem({
  className,
  id,
}: GalleriesLinksItemProps) {
  const t = useTranslations(`home.galleries.${id}`);
  const href =
    id === "gallery1"
      ? HREFS.personal
      : id === "gallery2"
        ? HREFS.brand
        : HREFS.creatives;
  const src =
    id === "gallery1"
      ? photo("personal/yuliia", 3)
      : id === "gallery2"
        ? photo("brand/at-work", 2)
        : photo("creatives/the-body-speaks", 11);

  return (
    <li className={`${css.item} ${className ?? ""}`}>
      <Link className={css.link} href={href} aria-label={t("title")}>
        <span className={css.thumb}>
          <Image
            src={src}
            alt=""
            className={css.img}
            fill
            sizes="(min-width: 1440px) 373px, (min-width: 768px) 50vw, min(100vw - 40px, 335px)"
          />
        </span>
      </Link>
      <Heading className={css.title} text={t("title")} />
      <p className={css.subtitle}>{t("subtitle")}</p>
      <Btn href={href}>{t("btn")}</Btn>
    </li>
  );
}
