import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
import ContactForm from "@/components/sections/ContactForm/ContactForm";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <main>
      <Heading text={t("heading")} as="h1" />
      <ContactForm />
    </main>
  );
}
