import { useTranslations } from "next-intl";
import css from "./FeedbackItem.module.css";
import { IoMdQuote } from "react-icons/io";

type FeedbackItemProps = {
  className?: string;
  id: string;
};

export default function FeedbackItem({ className, id }: FeedbackItemProps) {
  const t = useTranslations(`home.feedback.feedbacks.${id}`);
  return (
    <li className={`${css.item} ${className ?? ""}`}>
      <IoMdQuote className={css.icon} />
      <p className={css.text}>{t("text")}</p>
      <p className={css.author}>{t("author")}</p>
    </li>
  );
}
