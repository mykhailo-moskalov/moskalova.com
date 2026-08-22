import css from "./PersonalStories.module.css";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Section from "@/components/ui/Section/Section";
import { useTranslations } from "next-intl";

export default function Legal() {
  const t = useTranslations("personal");
  return (
    <main className={css.main}>
      <Section className={css.section}>
        <h1>{t("heading")}</h1>
      </Section>
      <BackToTop />
    </main>
  );
}
