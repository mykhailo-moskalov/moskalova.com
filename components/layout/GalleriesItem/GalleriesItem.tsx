import css from "./GalleriesItem.module.css";
import { useTranslations } from "next-intl";
import Btn from "@/components/ui/Btn/Btn";
import Image from "next/image";
import { YULIIA } from "@/lib/data/personal";
import { THE_BODY_SPEAKS } from "@/lib/data/creatives";
import { Link } from "@/lib/navigation";
import { HREFS } from "@/lib/constants/navLinks";

type GalleriesItemProps = {
  className?: string;
  id: string;
};

export default function GalleriesItem({ className, id }: GalleriesItemProps) {
  const t = useTranslations(`home.galleries.${id}`);
  const href =
    id === "gallery1"
      ? HREFS.personal
      : id === "gallery2"
        ? HREFS.brand
        : HREFS.creatives;
  const src =
    id === "gallery1"
      ? YULIIA[3]
      : id === "gallery2"
        ? YULIIA[3] // !
        : THE_BODY_SPEAKS[11];

  return (
    <li className={`${css.item} ${className ?? ""}`}>
      <Link className={css.link} href={href} aria-label={t("btn")}>
        <span className={css.thumb}>
          <Image
            src={src}
            alt=""
            className={css.img}
            sizes="(min-width: 1440px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </span>
      </Link>
      <h3 className={css.title}>{t("title")}</h3>
      <p className={css.subtitle}>{t("subtitle")}</p>
      <Btn href={href}>{t("btn")}</Btn>
    </li>
  );
}
