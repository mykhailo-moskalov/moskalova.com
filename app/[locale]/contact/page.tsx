import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/seo/alternates";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alternatesFor(locale, "/contact"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}/contact`,
    },
  };
}

export default async function Contact() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
