import { APPLY_URL } from "../../_data/variables.ts";
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
      </div>
      <div style={"padding: 20px"}>
        <h3>{text.applyNow_generalTopicTitle}</h3>
        <p>{text.applyNow_generalTopicInfo}</p>
        <p>{text.applyNow_generalTopicHint}</p>
      </div>
    </div>
      <div style={styles.buttonContainer}>
      <Button link={APPLY_URL}>{text.applyNow_buttonText}</Button>
    </div>
  </section>
);
