import { getTranslations } from "next-intl/server";
import Pricing from "@/components/sections/Pricing/Pricing";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/seo/alternates";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/services"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/services`,
    },
  };
}

export default async function Services() {
  return (
    <main>
      <Pricing />
    </main>
  );
}
