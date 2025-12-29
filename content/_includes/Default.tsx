import GetToKnowUs from "../_components/Modules/GetToKnowUs.tsx";
import Impuls from "../_components/Modules/Impuls.tsx";
import InfoTextList from "../_components/Modules/InfoTextList.tsx";
import Intro from "../_components/Modules/Intro.tsx";
import FundingTimeInfoBox from "../_components/InfoBoxes/FundingTimeInfoBox.tsx";
import ApplyNow from "../_components/Modules/ApplyNow.tsx";
import Faq from "../_components/Modules/Faq.tsx";
import {
  CURRENT_SEMESTER,
  FUNDING_IS_OUT,
  SHOW_FUNDING_BOX,
} from "../_data/variables.ts";
import Terms from "../_components/Modules/Terms.tsx";
import Sponsors from "../_components/Modules/Sponsors.tsx";
import AllFundingGoneBox from "../_components/InfoBoxes/AllFundingGoneBox.tsx";
import FundingGoalBox from "../_components/InfoBoxes/FundingGoalBox.tsx";

export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <props.comp.Header {...props} />
          <props.comp.Navbar page={"home"} {...props} />
          <div class="card-body content">
            <main class="p-md-4">
              <div class="homeContent">
                {SHOW_FUNDING_BOX && <FundingTimeInfoBox text={props} />}
                {FUNDING_IS_OUT && <AllFundingGoneBox text={props} />}
                <FundingGoalBox funding={props.funding}/>
                <Intro text={props} />
                <hr />
                <InfoTextList text={props} />
                <hr />
                <ApplyNow text={props} />
                <hr />
                <Impuls text={props} />
                <hr />
                <GetToKnowUs text={props} />
                <hr />
                <Faq text={props} />
                <hr />
                <Terms text={props} />
                {children}
              </div>
              <hr />
              <props.comp.Newsletter text={props} />
              <hr />
              <Sponsors text={props} />
            </main>
          </div>
        </div>
      </main>
      <footer class="p-4 container">
        <props.comp.Footer {...props} />
      </footer>
    </section>
  </props.comp.Base>
);
