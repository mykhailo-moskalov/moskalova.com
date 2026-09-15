import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero/Hero";
import Motto from "@/components/sections/Motto/Motto";
import GalleriesLinks from "@/components/sections/GalleriesLinks/GalleriesLinks";
import Feedback from "@/components/sections/Feedback/Feedback";
import type { Metadata } from "next";
import { alternatesFor, OG_IMAGE } from "@/lib/seo/alternates";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });
  return {
    title: { absolute: t("title") },
    description: t("description"),
    alternates: alternatesFor(locale, ""),
    openGraph: {
      title: { absolute: t("title") },
      description: t("description"),
      url: `/${locale}`,
      images: [OG_IMAGE],
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <Motto namespace="home.motto" href="/about" caps as="h1" />
      <GalleriesLinks />
      <Feedback />
      <Motto namespace="home.mottoEnd" href="/contact" backg />
    </main>
  );
}
