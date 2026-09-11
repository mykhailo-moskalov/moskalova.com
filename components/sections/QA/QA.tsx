import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";
import QAList from "@/components/layout/QAList/QAList";

export type QAEntry = { question: string; answer: string };

export default function QA() {
  const t = useTranslations("services.qa");
  const items = t.raw("items") as QAEntry[];

  return (
    <Section>
      <Container>
        <Heading as="h2" text={t("heading")} />
        <QAList items={items} />
      </Container>
    </Section>
  );
}
