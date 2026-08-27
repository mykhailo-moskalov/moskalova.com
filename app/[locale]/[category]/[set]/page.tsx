import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/lib/navigation";
import { allSetParams, getSet } from "@/lib/data/galleries";
import { localize } from "@/lib/types/gallery";
import Container from "@/components/ui/Container/Container";
import Section from "@/components/ui/Section/Section";
import PhotoGrid from "@/components/layout/PhotoGrid/PhotoGrid";
import css from "./SetPage.module.css";
import Heading from "@/components/ui/Heading/Heading";

type Props = {
  params: Promise<{ locale: string; category: string; set: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allSetParams().map((p) => ({ locale, ...p })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, set: setSlug } = await params;
  const set = getSet(category, setSlug);
  if (!set) return {};
  const title = localize(set.title, locale);
  return {
    title: `${title} — Natalia Moskalova Photography`,
    openGraph: {
      title,
      images: [
        {
          url: set.cover.src,
          width: set.cover.width,
          height: set.cover.height,
        },
      ],
    },
  };
}

export default async function SetPage({ params }: Props) {
  const { locale, category, set: setSlug } = await params;
  const set = getSet(category, setSlug);
  if (!set) notFound();

  const t = await getTranslations("gallery");
  const title = localize(set.title, locale);
  const subtitle = localize(set.subtitle, locale);

  return (
    <main>
      <Section className={css.head}>
        <Container className={css.headContainer}>
          <Link href={`/${category}`} className={css.back}>
            ← {t("back")}
          </Link>
          <Heading className={css.title} text={title} as="h1" parent={false} />
          {subtitle && <p className={css.subtitle}>{subtitle}</p>}
        </Container>
      </Section>
      <Section>
        <Container>
          <PhotoGrid photos={set.photos} label={title} />
        </Container>
      </Section>
    </main>
  );
}
