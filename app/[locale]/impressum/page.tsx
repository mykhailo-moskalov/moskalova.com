import { getTranslations } from "next-intl/server";
import ImpressumSection from "@/components/sections/ImpressumSection/ImpressumSection";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/seo/alternates";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/impressum"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/impressum`,
    },
  };
}

export default async function Impressum() {
  return (
    <main>
      <ImpressumSection />
    </main>
  );
}
