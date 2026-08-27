import { Metadata } from "next";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";
import ClientRedirect from "./NotFound.client";

export const metadata: Metadata = {
  title: "Non-existent page",
  description: "This page does not exist",
  openGraph: {
    title: "Non-existent page",
    description: "This page does not exist",
    url: `https://moskalova.com/not-found`,
    images: [
      {
        url: "/manifest/icon1.png",
        width: 96,
        height: 96,
        alt: "Natalia Moskalova Photography",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Non-existent page`,
    description: "This page does not exist",
    images: ["/manifest/icon1.png"],
  },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section>
      <Container>
        <Heading text="404 - Page not found" as="h1" parent={false} />
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You will be redirected to the homepage in a while.</p>
        <ClientRedirect />
      </Container>
    </Section>
  );
}
