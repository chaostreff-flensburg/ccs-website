import HorizontalLine from "../_components/HorizontalLine.tsx";
import GetToKnowUs from "../_components/Modules/GetToKnowUs.tsx";
import Impuls from "../_components/Modules/Impuls.tsx";
import InfoTextList from "../_components/Modules/InfoTextList.tsx";
import Intro from "../_components/Modules/Intro.tsx";
import FundingTimeInfoBox from "../_components/InfoBoxes/FundingTimeInfoBox.tsx";
import ApplyNow from "../_components/Modules/ApplyNow.tsx";

export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <div class="headerBackground row">
            <div class="col">
              <h1 class="headLine">
                Chaotisches <br />
                Catalysator <br />
                Stipendium
              </h1>
              <p>{props.text.current_semester}</p>
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
                href="#newsletter-anmelden"
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
                <FundingTimeInfoBox text={props.text} />
                <Intro text={props.text} />
                <InfoTextList text={props.text} />
                <HorizontalLine />
                <GetToKnowUs text={props.text} />
                <HorizontalLine />
                <ApplyNow text={props.text} />
                <HorizontalLine />
                <Impuls text={props.text} />
                <HorizontalLine />
                {children}
              </div>
              <hr />
              <h2 id="newsletter-anmelden" class="mt-6 mb-2">
                Newsletter
              </h2>
              <props.comp.Newsletter />
            </main>
          </div>
        </div>
      </main>
      <footer class="p-4">
        <props.comp.Footer {...props} />
      </footer>
    </section>
  </props.comp.Base>
);
