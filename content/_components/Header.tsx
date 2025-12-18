import { CURRENT_SEMESTER } from "../_data/variables.ts";

export default (props) => (
  <div class="headerBackground row">
    <div class="col">
      <h1 class="headLine">
        Chaotischer <br />
        Catalysator <br />
        Stipendium
      </h1>
      <p>
        {props.semester}
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
        {props.subscribe_newsletter}
      </a>
    </div>
  </div>
);
