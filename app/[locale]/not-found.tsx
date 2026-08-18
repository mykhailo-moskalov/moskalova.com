import { Metadata } from "next";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";

export const metadata: Metadata = {
  title: "Non-existent page",
  description: "This page does not exist",
  openGraph: {
    title: "Non-existent page",
    description: "This page does not exist",
    url: `https://moskalova.com/not-found`,
    images: [
      {
        url: "/app/icon1.png",
        width: 96,
        height: 96,
        alt: "", //?
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Non-existent page`,
    description: "This page does not exist",
    images: ["/app/icon1.png"],
  },
};

const NotFound = () => {
  return (
    <Section>
      <Container>
        <h1 style={{ marginBottom: 32 }}>404 - Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You will be redirected to the homepage in a while.</p>
      </Container>
    </Section>
  );
};

export default NotFound;
