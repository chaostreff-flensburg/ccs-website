import IconMastodonSVG from "./Images/IconMastodonSVG.tsx";
import IconInstagramSVG from "./Images/IconInstagramSVG.tsx";

export default ({ text }) => (
  <section class="row align-items-center">
    <div class="col-auto">
       <a rel="me" href="https://chaos.social/@ccs" style={{ padding: '10px' }}><IconMastodonSVG /></a>
       <a rel="me" href="https://www.instagram.com/ccstipendium"><IconInstagramSVG /></a> 
    </div>
    <div class="col-auto">
      <p class="small">
        {text.footer_slogan}{" "}
        <a href="https://c3fl.de/">Chaos Computer Club Flensburg e.V.</a>
      </p>
    </div>
    <div class="col-auto">
      <p class="small">
        <a href="https://github.com/chaostreff-flensburg/ccs-website/">Code</a>{" "}
        <a href="https://c3fl.de/impressum/">
          {text.footer_imprint}
          {!text.footer_imprint && <span>Impressum</span>}
        </a>{" "}
        &{" "}
        <a href="https://c3fl.de/datenschutz/">
          {text.footer_privacy}
          {!text.footer_privacy && <span>Datenschutz</span>}
        </a>
      </p>
    </div>
  </section>
);
