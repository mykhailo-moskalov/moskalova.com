import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google"; //?
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

import "../globals.css";

// import MobileLayout from "@/components/layout/MobileLayout/MobileLayout";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
}); //?

export const viewport: Viewport = {
  themeColor: "#000001",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "", //?
  description: "", //?
  appleWebApp: {
    title: "NM photo",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    title: "", //?
    description: "", //?
    url: `https://moskalova.com`,
    siteName: "", //?
    images: [
      {
        url: "https://moskalova.com/", //?
        width: 1200,
        height: 630,
        alt: "", //?
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "", //?
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
  // const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${poppins.variable} ${poppins.className}`}>
        {/* <NextIntlClientProvider messages={messages}> */}
        {/* <MobileLayout> */}
        {children}

        {/* </MobileLayout> */}
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
