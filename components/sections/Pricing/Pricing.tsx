import css from "./Pricing.module.css";
import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import Approach from "@/components/layout/Approach/Approach";
import ServicesList from "@/components/layout/ServicesList/ServicesList";
import Btn from "@/components/ui/Btn/Btn";
import ServicesItem from "@/components/layout/ServicesItem/ServicesItem";

export default function Pricing() {
  const t = useTranslations("services");
  return (
    <>
      <Heading
        text={t("heading")}
        as="h1"
        parent
        sectClassName="headingSection"
      />
      <Section>
        <Container className={css.container}>
          <Approach />
          <ServicesList exclude={["service4"]} />
          <p className={css.disclaimer}>{t("disclaimer")}</p>
          <Btn href="/contact" className={css.btn}>
            {t("btn")}
          </Btn>
          <ServicesItem as="div" id="service4" hasBenefits={false} />
        </Container>
      </Section>
    </>
  );
}
