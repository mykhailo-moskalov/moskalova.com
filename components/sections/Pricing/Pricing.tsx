import css from "./Pricing.module.css";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Btn from "@/components/ui/Btn/Btn";
import { useTranslations } from "next-intl";
import ServicesList from "@/components/layout/ServicesList/ServicesList";
import ServicesItem from "@/components/layout/ServicesItem/ServicesItem";
import Approach from "@/components/layout/Approach/Approach";

interface PricingProps {
  sectClassName?: string;
}

export default function Pricing({ sectClassName }: PricingProps) {
  const t = useTranslations("services");

  return (
    <Section className={sectClassName}>
      <Container className={css.container}>
        <Approach />
        <ServicesList exclude={["service4"]} />
        <Btn href="/contact" className={css.btn}>
          {t("btn")}
        </Btn>
        <ServicesItem as="div" id="service4" hasBenefits={false} />
      </Container>
    </Section>
  );
}
