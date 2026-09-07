import css from "./ServicesItem.module.css";
import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";
import BenefitsList from "../BenefitsList/BenefitsList";

type ServicesItemProps = {
  className?: string;
  id: string;
  hasBenefits?: boolean;
  as?: "li" | "div";
};

export default function ServicesItem({
  className,
  id,
  hasBenefits = true,
  as: Tag = "li",
}: ServicesItemProps) {
  const t = useTranslations(`services.services.${id}`);
  return (
    <Tag
      className={`${css.item} ${className ?? ""} ${!hasBenefits ? css.custom : ""}`}
    >
      <Heading className={css.heading} text={t("heading")} />
      <p className={css.subHeading}>{t("subHeading")}</p>
      {hasBenefits && (
        <BenefitsList
          path={`services.services.${id}`}
          className={css.benefits}
        />
      )}
      <p className={css.price}>{t("price")}</p>
    </Tag>
  );
}
