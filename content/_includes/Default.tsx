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

export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <div class="headerBackground row">
            <div class="col">
              <h1 class="headLine">
                Chaotischer <br />
                Catalysator <br />
                Stipendium
              </h1>
              <p>
                {props.text.semester}
                {CURRENT_SEMESTER}
              </p>
              <ul class="list-inline">
                {props.alternates?.map((alt) => (
                  <li class="list-inline-item">
                    <a
                      class={
                        alt.lang === props.lang
                          ? "fw-bold text-white btn btn-outline-light"
                          : "text-white btn"
                      }
                      aria-current={alt.lang === props.lang ? "page" : "false"}
                      href={alt.url}
                    >
                      {alt.lang}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-auto d-flex flex-column justify-content-end">
              <a
                href="#newsletter"
                target="blank"
                class="btn btn-outline-light"
              >
                {props.text.subscribe_newsletter}
              </a>
            </div>
          </div>
          <props.comp.Header {...props} />
          <div class="card-body content">
            <main class="p-md-4">
              <div class="homeContent">
                {SHOW_FUNDING_BOX && <FundingTimeInfoBox text={props.text} />}
                {FUNDING_IS_OUT && <AllFundingGoneBox text={props.text} />}
                <Intro text={props.text} />
                <hr />
                <InfoTextList text={props.text} />
                <hr />
                <ApplyNow text={props.text} />
                <hr />
                <Impuls text={props.text} />
                <hr />
                <GetToKnowUs text={props.text} />
                <hr />
                <Faq text={props.text} />
                <hr />
                <Terms text={props.text} />
                {children}
              </div>
              <hr />
              <props.comp.Newsletter text={props.text} />
              <hr />
              <Sponsors text={props.text} />
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
