import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import css from "./Story.module.css";

const Story = () => {
  return (
    <Section id="story" className={css.story}>
      <Container className={css.container}>
        <h2 className={css.heading}>heading</h2>
        <ul className={css.storyList}>
          <li className={css.storyItem}>
            <p className={css.storyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quaerat.
            </p>
          </li>
          <li className={css.storyItem}>
            <p className={css.storyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quaerat.
            </p>
          </li>

          <li className={css.storyItem}>
            <p className={css.storyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quaerat.
            </p>
          </li>

          <li className={css.storyItem}>
            <p className={css.storyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quaerat.
            </p>
          </li>

          <li className={css.storyItem}>
            <p className={css.storyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              quaerat.
            </p>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Story;
