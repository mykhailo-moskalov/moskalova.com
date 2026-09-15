import "../globals.css";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import MobileLayout from "@/components/layout/MobileLayout/MobileLayout";
import { Cormorant_Garamond, Forum } from "next/font/google";
import type { Metadata, Viewport } from "next";
import {
  alternatesFor,
  OG_IMAGE,
  ogLocale,
  SITE_URL,
} from "@/lib/seo/alternates";
import { routing } from "@/i18n/routing";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  variable: "--font-cormorant",
  display: "swap",
  subsets: ["latin", "cyrillic"],
});

const forum = Forum({
  weight: ["400"],
  variable: "--font-forum",
  display: "swap",
  subsets: ["latin", "cyrillic"],
});

export const viewport: Viewport = {
  themeColor: "#fff",
  width: "device-width",
  initialScale: 1,
};

type LayoutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const siteName = t("siteName");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: siteName, template: `%s — ${siteName}` },
    description,
    keywords: t.raw("keywords") as string[],
    alternates: alternatesFor(locale),
    appleWebApp: {
      title: "NM photo",
      statusBarStyle: "black-translucent",
      capable: true,
    },
    openGraph: {
      type: "website",
      siteName,
      title: siteName,
      description,
      url: `/${locale}`,
      locale: ogLocale(locale),
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og.jpg"],
    },
    icons: {
      icon: [{ url: "/manifest/icon.svg", type: "image/svg+xml" }],
      apple: "/manifest/apple-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps & { children: React.ReactNode }) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${cormorant.variable} ${forum.variable} ${forum.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          <MobileLayout>{children}</MobileLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
