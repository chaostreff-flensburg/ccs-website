import { GTKU_DATE_ONE, GTKU_DATE_TWO } from "../../_data/variables.ts";
import OutlineButton from "../Buttons/OutlineButton.tsx";

const styles = {
  buttonContainer: {
    display: "flex",
    "justify-content": "center",
  },
};

export default ({ text }) => (
  <section>
    <h2>{text.getToKnowUs_title}</h2>
    <p>
      {text.getToKnowUs_text}
      <div class="col-md-7">
        <ul>
          <li>{GTKU_DATE_ONE}</li>
          <li>{GTKU_DATE_TWO}</li>
        </ul>
      </div>
    </p>
    <div style={styles.buttonContainer}>
      <OutlineButton link="https://meet.ffmuc.net/ccs-info">
        {text.getToKnowUs_buttonText}
      </OutlineButton>
    </div>
  </section>
);
