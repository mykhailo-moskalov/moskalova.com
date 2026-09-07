import { getTranslations } from "next-intl/server";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
import MoreAbout from "@/components/sections/MoreAbout/MoreAbout";
import Motto from "@/components/sections/Motto/Motto";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/seo/alternates";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/about"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/about`,
    },
  };
}

export default function ArtistsAndPerformers() {
  return (
    <main>
      <AboutMe />
      <MoreAbout />
      <Motto namespace="home.mottoEnd" href="/contact" backg />
    </main>
  );
}
