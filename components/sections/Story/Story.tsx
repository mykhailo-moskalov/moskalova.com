import { IoRibbon } from "react-icons/io5";
import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import css from "./Story.module.css";
import { useTranslations } from "next-intl";

const Story = () => {
  const t = useTranslations("story");

  return (
    <Section id="story" className={css.story}>
      <Container className={css.container}>
        <h2 className={css.heading}>
          {t("heading1")}
          <br />
          <span className="pad">{t("heading2")}</span>
        </h2>
        <ul className={css.storyList}>
          <li className={css.storyItem}>
            <p className={css.storyText}>{t("story1")}</p>
            <IoRibbon className={css.icon} />
          </li>
          <li className={css.storyItem}>
            <p className={css.storyText}>{t("story2")}</p>
            <IoRibbon className={css.icon} />
          </li>

          <li className={css.storyItem}>
            <p className={css.storyText}>{t("story3")}</p>
            <IoRibbon className={css.icon} />
          </li>

          <li className={css.storyItem}>
            <p className={css.storyText}>{t("story4")}</p>
          </li>

          <li className={css.storyItem}>
            <p className={css.storyText}>{t("story5")}</p>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Story;
