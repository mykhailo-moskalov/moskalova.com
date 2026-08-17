import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../globals.css";

import MobileLayout from "@/components/layout/MobileLayout/MobileLayout";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000001",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Black Fire",
  description:
    "Cheerdance team bringing energy and passion to every performance.",
  appleWebApp: {
    title: "Black Fire",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    title: "Black Fire",
    description:
      "Cheerdance team bringing energy and passion to every performance.",
    url: `https://black-fire-gamma.vercel.app`,
    siteName: "Black Fire Cheer",
    images: [
      {
        url: "https://black-fire-gamma.vercel.app/bfq-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Black Fire Cheer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Black Fire`,
    description:
      "Cheerdance team bringing energy and passion to every performance.",
    images: ["https://black-fire-gamma.vercel.app/bfq-og-meta.jpg"],
  },
  icons: {
    icon: "/icon0.svg",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: [
    "cheerdance",
    "Black Fire",
    "cheerleading Austria",
    "cheerleading Austria",
    "competitive cheer",
    "dance team",
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero/hero.jpg"
          imageSrcSet="/hero/hero.jpg 1x, /hero/hero@2x.jpg 2x"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href="/hero/hero-tab.jpg"
          fetchPriority="high"
          media="(min-width: 768px) and (max-width: 1439px)"
        />
        <link
          rel="preload"
          as="image"
          href="/hero/hero-desk.jpg"
          fetchPriority="high"
          media="(min-width: 1440px)"
        />
      </head>
      <body className={`${poppins.variable} ${poppins.className}`}>
        <NextIntlClientProvider messages={messages}>
          <MobileLayout>{children}</MobileLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
