import { APPLY_URL, FOKUS_TOPIC_NUMBER_TAKEN, FOKUS_TOPIC_NUMBER_TOTAL, GENERAL_NUMBER_TAKEN, GENERAL_NUMBER_TOTAL } from "../../_data/variables.ts";
import Button from "../Buttons/Button.tsx";

const styles = {
  buttonContainer: {
    display: "flex",
    "justify-content": "center",
  },
};

export default ({ text }) => (
  <section id="apply">
    <h2 class="text-center">{text.applyNow_title}</h2>
    <p>
      {text.applyNow_info1}
      <a href={"/#scholarhip-terms"} className={"link-inside-text"}>
        {text.applyNow_conditions}
      </a>
      {text.applyNow_info2}
    </p>
    <p class="section">{text.applyNow_text}</p>
    <div class="display-row ">
      <div style={"padding: 20px"}>
        <h3>{text.applyNow_focusTopicTitle}</h3>
        <p>{text.applyNow_focusTopicInfo}</p>
        <p>{text.applyNow_focusTopicHint}</p>
        <p><mark>{FOKUS_TOPIC_NUMBER_TAKEN} {text.applyNow_numberleft1} {FOKUS_TOPIC_NUMBER_TOTAL} {text.applyNow_numberleft2}</mark></p>
      </div>
      <div style={"padding: 20px"}>
        <h3>{text.applyNow_generalTopicTitle}</h3>
        <p>{text.applyNow_generalTopicInfo}</p>
        <p>{text.applyNow_generalTopicHint}</p>
        <p><mark>{GENERAL_NUMBER_TAKEN} {text.applyNow_numberleft1} {GENERAL_NUMBER_TOTAL} {text.applyNow_numberleft2}</mark></p>
      </div>
    </div>
      <div style={styles.buttonContainer}>
      <Button link={APPLY_URL}>{text.applyNow_buttonText}</Button>
    </div>
  </section>
);
