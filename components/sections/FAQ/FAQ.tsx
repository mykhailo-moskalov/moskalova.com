import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";
import FAQList from "@/components/layout/FAQList/FAQList";

export type FAQEntry = { question: string; answer: string };

export default function FAQ() {
  const t = useTranslations("services.faq");
  const items = t.raw("items") as FAQEntry[];

  return (
    <Section>
      <Container>
        <Heading as="h2" text={t("heading")} />
        <FAQList items={items} />
      </Container>
    </Section>
  );
}
