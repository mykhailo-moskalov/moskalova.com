import css from "./FeedbackList.module.css";
import { useTranslations } from "next-intl";
import FeedbackItem from "../FeedbackItem/FeedbackItem";

export default function FeedbackList() {
  const t = useTranslations("home.feedback");
  const feedbacks = t.raw("feedbacks") as Record<
    string,
    { author: string; text: string }
  >;

  return (
    <ul className={css.feedbacks}>
      {Object.keys(feedbacks).map((id) => (
        <FeedbackItem key={id} id={id} />
      ))}
    </ul>
  );
}
