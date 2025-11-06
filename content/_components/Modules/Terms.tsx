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
  title: {
    "font-size": "1.3rem"
  }
};

export default ({ text }) => (
  <section>
    <h2 id="scholarhip-terms">{text.terms_title}</h2>

      <h3 style={styles.title}>{text.terms_title1}</h3>
      <ul>
        <li>{text.terms_point1_dateframe1} {CURRENT_SEMESTER} {text.terms_point1_dateframe2}</li>
        <li>{text.terms_point2_begin} {START_DATE} {text.terms_point2_and} {END_DATE} {text.terms_point2_end}</li>
        <li>{text.terms_point3_uni}</li>
        <li>{text.terms_point4_taxes}</li>
        <li>{text.terms_point5_profs}</li>
      </ul>

      <h3 style={styles.title}>{text.terms_title2}</h3>
      <ul>
        <li>{text.terms_point1_theme}</li>
        <li>{text.terms_point2_area}</li>
        <li>{text.terms_point3_indipendence}</li>
        <li>{text.terms_point4_content}</li>
      </ul>

      <h3 style={styles.title}>{text.terms_title3}</h3>
      <ul>
        <li>{text.terms_point1_supply}</li>
        <li>{text.terms_point2_openAccess_beginn} <a href="https://zenodo.org/communities/ccstipendium/">{text.terms_point2_openAccess_link}</a> {text.terms_point2_openAccess_end}</li>
        <li>{text.terms_point3_fame}</li>
      </ul>

      <h3 style={styles.title}>{text.terms_title4}</h3>
      <ul>
        <li>{text.terms_point1_poster}</li>
        <li>{text.terms_point2_presentation}</li>
     </ul>

      <h3 style={styles.title}>{text.terms_title5}</h3>
      <ul>
        <li>{text.terms_point1_optional}</li>
      </ul>

    
    <div style={styles.buttonContainer}>
      <Button link={APPLY_URL}>{text.applyNow_buttonText}</Button>
    </div>
  </section>
);
