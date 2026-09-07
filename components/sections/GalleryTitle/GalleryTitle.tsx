import css from "./GalleryTitle.module.css";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import { OUR_TOGETHER, SOPHIIA } from "@/lib/data/personal";
import { IN_FORM } from "@/lib/data/creatives";
import { COASTAL_STORY } from "@/lib/data/brand";

type GalleryTitleProps = {
  namespace: string;
  as?: "h1" | "h2";
  backg: "personal" | "couples" | "brands" | "creatives";
  id?: string;
  priority?: boolean;
};

export default function GalleryTitle({
  namespace,
  as: Heading = "h1",
  backg,
  id,
  priority,
}: GalleryTitleProps) {
  const t = useTranslations(namespace);
  const src =
    backg === "personal"
      ? SOPHIIA[14]
      : backg === "couples"
        ? OUR_TOGETHER[4]
        : backg === "brands"
          ? COASTAL_STORY[12]
          : IN_FORM[0];
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
