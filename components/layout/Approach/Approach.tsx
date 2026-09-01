import { useTranslations } from "next-intl";
import css from "./Approach.module.css";
import Container from "@/components/ui/Container/Container";
import BenefitsList from "@/components/layout/BenefitsList/BenefitsList";

export default function Approach() {
  const t = useTranslations("services.approach");
  return (
    <Container className={css.container}>
      <h3 className={css.heading}>{t("heading")}</h3>
      <BenefitsList path="services.approach" />
    </Container>
  );
}
