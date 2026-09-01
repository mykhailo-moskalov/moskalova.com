import css from "./Services.module.css";
import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
import Pricing from "@/components/sections/Pricing/Pricing";

export default function Services() {
  const t = useTranslations("services");
  return (
    <main>
      <Heading text={t("heading")} as="h1" parent sectClassName={css.section} />
      <Pricing />
    </main>
  );
}
