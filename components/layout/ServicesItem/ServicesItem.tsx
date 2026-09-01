import { useTranslations } from "next-intl";
import BenefitsList from "../BenefitsList/BenefitsList";
import css from "./ServicesItem.module.css";

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
    <Tag className={`${css.item} ${className ?? ""}`}>
      <h3 className={css.heading}>{t("heading")}</h3>
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
