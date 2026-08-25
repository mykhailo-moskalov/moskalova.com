import { useTranslations } from "next-intl";
import css from "./Contact.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Section from "@/components/ui/Section/Section";
import ContactForm from "@/components/sections/ContactForm/ContactForm";
import Container from "@/components/ui/Container/Container";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <Container>
          <h1>{t("heading")}</h1>
        </Container>
      </Section>
      <ContactForm />
      <BackToTop />
    </main>
  );
}
