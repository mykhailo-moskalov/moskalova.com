import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
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

export default function Services() {
  const t = useTranslations("services");
  return (
    <main>
      <Heading
        text={t("heading")}
        as="h1"
        parent
        sectClassName="headingSection"
      />
      <Pricing />
    </main>
  );
}
