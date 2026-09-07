import css from "./Approach.module.css";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container/Container";
import Heading from "@/components/ui/Heading/Heading";
import BenefitsList from "@/components/layout/BenefitsList/BenefitsList";

export default function Approach() {
  const t = useTranslations("services.approach");
  return (
    <Container className={css.container}>
      <Heading className={css.heading} text={t("heading")} />
      <BenefitsList path="services.approach" />
    </Container>
  );
}
