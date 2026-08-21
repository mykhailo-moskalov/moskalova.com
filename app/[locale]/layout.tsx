import type { Metadata, Viewport } from "next";
import { Alice, Forum } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../globals.css";

import MobileLayout from "@/components/layout/MobileLayout/MobileLayout";

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

export const metadata: Metadata = {
  title: "Natalia Moskalova Photography",
  description: "", //?
  appleWebApp: {
    title: "NM photo",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    title: "Natalia Moskalova Photography",
    description: "", //?
    url: `https://moskalova.com`,
    siteName: "Natalia Moskalova Photography",
    images: [
      {
        url: "https://moskalova.com/",
        width: 1200,
        height: 630,
        alt: "Natalia Moskalova Photography",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natalia Moskalova Photography",
    description: "", //?
    images: ["https://moskalova.com/"], //?
  },
  icons: {
    icon: [{ url: "/manifest/icon0.svg", type: "image/svg+xml" }],
    apple: "/manifest/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: [], //?
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
