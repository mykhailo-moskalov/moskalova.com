import css from "./GalleryTitle.module.css";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import Image from "next/image";
import { OUR_TOGETHER, SOPHIIA } from "@/lib/data/personal";

type GalleryTitleProps = {
  namespace: string;
  as?: "h1" | "h2";
  backg: "personal" | "couples" | "brands" | "artists";
  tar?: boolean;
  id?: string;
};

export default function GalleryTitle({
  namespace,
  as: Heading = "h1",
  backg,
  tar = false,
  id,
}: GalleryTitleProps) {
  const t = useTranslations(namespace);
  const src =
    backg === "personal"
      ? SOPHIIA[14]
      : backg === "couples"
        ? OUR_TOGETHER[4]
        : backg === "brands"
          ? SOPHIIA[14]
          : SOPHIIA[14];
  return (
    <Section id={id} className={css.section}>
      <Image src={src} alt="" fill sizes="100vw" className={css.img} />
      <Container className={`${css.container} ${tar ? css.tar : ""}`}>
        <Heading className={css.heading}>{t("heading")}</Heading>
      </Container>
    </Section>
  );
}
