import {
  APPLY_URL,
  CURRENT_SEMESTER,
  END_DATE,
  START_DATE,
} from "../../_data/variables.ts";
import Button from "../Buttons/Button.tsx";

const styles = {
  buttonContainer: {
    display: "flex",
    'justify-content': "center",
  },
};

export default ({ text }) => (
  <section>
    <h2 id="scholarhip-terms">{text.terms_title}</h2>
    <ol>
      <li>
        {text.terms_point1a}
        {CURRENT_SEMESTER}
        {text.terms_point1b}
      </li>
      <li>
        {text.terms_point11a}
        {START_DATE}
        {text.terms_point11b}
        {END_DATE}
      </li>
      <li>{text.terms_point12}</li>
      <li>{text.terms_point2}</li>
      <ul>
        <li>{text.terms_point21}</li>
      </ul>
      <li>{text.terms_point3}</li>
      <li>{text.terms_point4}</li>
      <li>{text.terms_point5}</li>
      <ul>
        <li>{text.terms_point51}</li>
        <li>{text.terms_point52}</li>
        <li>{text.terms_point53}</li>
      </ul>
      <li>{text.terms_point6}</li>
      <li>{text.terms_point7}</li>
    </ol>
    <div style={styles.buttonContainer}>
      <Button link={APPLY_URL}>{text.applyNow_buttonText}</Button>
    </div>
  </section>
);
