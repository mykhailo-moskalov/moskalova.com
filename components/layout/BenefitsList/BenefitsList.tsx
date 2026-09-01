import css from "./BenefitsList.module.css";
import { useTranslations } from "next-intl";

const TAG = {
  strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
};

interface BenefitsListProps {
  path: string;
  className?: string;
}

export default function BenefitsList({ path, className }: BenefitsListProps) {
  const t = useTranslations(path);
  return (
    <ul className={`${css.benefits} ${className ?? ""}`}>
      {Object.keys(t.raw("benefits")).map((key) => (
        <li key={key}>{t.rich(`benefits.${key}`, TAG)}</li>
      ))}
    </ul>
  );
}
