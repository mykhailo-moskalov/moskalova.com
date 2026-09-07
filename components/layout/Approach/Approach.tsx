import { useTranslations } from "next-intl";
import css from "./Approach.module.css";
import Container from "@/components/ui/Container/Container";
import BenefitsList from "@/components/layout/BenefitsList/BenefitsList";
import Heading from "@/components/ui/Heading/Heading";

export default function Approach() {
  const t = useTranslations("services.approach");
  return (
    <Container className={css.container}>
      <Heading className={css.heading} text={t("heading")} />
      <BenefitsList path="services.approach" />
    </Container>
  );
}
