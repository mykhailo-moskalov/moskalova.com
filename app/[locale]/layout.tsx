import "../globals.css";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import MobileLayout from "@/components/layout/MobileLayout/MobileLayout";
import { Alice, Forum } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { alternatesFor, ogLocale, SITE_URL } from "@/lib/seo/alternates";

const alice = Alice({
  weight: ["400"],
  variable: "--font-alice",
  display: "swap",
  subsets: ["latin"],
});

const forum = Forum({
  weight: ["400"],
  variable: "--font-forum",
  display: "swap",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000001",
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
      // TODO: images: [{ url: "/og.jpg", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      // TODO: images: ["/og.jpg"]
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
        className={`${alice.variable} ${forum.variable} ${forum.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          <MobileLayout>{children}</MobileLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
