import css from "./GalleryTitle.module.css";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import { photo } from "@/lib/data/galleries";
import { Photo } from "@/lib/types/gallery";

type GalleryTitleProps = {
  namespace: string;
  as?: "h1" | "h2";
  backg:
    | "personal"
    | "couples"
    | "brand"
    | "personalBrand"
    | "interior"
    | "creatives";
  id?: string;
  priority?: boolean;
};

const BACKGROUNDS = {
  personal: photo("personal/sofiia", 14),
  couples: photo("personal/our-together", 4),
  personalBrand: photo("brand/the-coach", 6),
  brand: photo("brand/coastal-story", 12),
  interior: photo("brand/a-french-escape", 5),
  creatives: photo("creatives/in-form", 0),
} satisfies Record<GalleryTitleProps["backg"], Photo>;

export default function GalleryTitle({
  namespace,
  as: Heading = "h1",
  backg,
  id,
  priority,
}: GalleryTitleProps) {
  const t = useTranslations(namespace);
  const src = BACKGROUNDS[backg];
  return (
    <Section id={id} className={css.section}>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={css.img}
        priority={priority}
      />
      <Container className={css.container}>
        <Heading className={css.heading}>{t("heading")}</Heading>
      </Container>
    </Section>
  );
}
