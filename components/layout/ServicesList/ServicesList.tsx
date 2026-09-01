import { useTranslations } from "next-intl";
import ServicesItem from "../ServicesItem/ServicesItem";
import css from "./ServicesList.module.css";

type ServicesListProps = {
  exclude?: string[];
};

export default function ServicesList({ exclude = [] }: ServicesListProps) {
  const t = useTranslations("services");
  const services = t.raw("services") as Record<
    string,
    { benefits?: Record<string, string> }
  >;

  return (
    <ul className={css.services}>
      {Object.keys(services)
        .filter((id) => !exclude.includes(id))
        .map((id) => (
          <ServicesItem
            key={id}
            id={id}
            hasBenefits={typeof services[id].benefits === "object"}
          />
        ))}
    </ul>
  );
}
