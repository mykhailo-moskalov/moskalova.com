import css from "./Feedback.module.css";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";
import { useTranslations } from "next-intl";
import FeedbackList from "@/components/layout/FeedbackList/FeedbackList";

export default function Feedback() {
  const t = useTranslations("home.feedback");
  return (
    <Section>
      <Container className={css.container}>
        <Heading text={t("heading")} className={css.heading} />
        <FeedbackList />
      </Container>
    </Section>
  );
}
