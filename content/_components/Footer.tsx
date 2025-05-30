export default ({ text }) => (
  <section class="row">
    <div class="col-auto">
      <p class="small">
        {text.footer_slogan}{" "}
        <a href="https://chaostreff-flensburg.de/">
          Chaos Computer Club Flensburg e.V.
        </a>
      </p>
    </div>
    <div class="col-auto">
      <p class="small">
        <a href="https://github.com/chaostreff-flensburg/ccs-website/">Code</a>{" "}
        <a href="https://chaostreff-flensburg.de/impressum/">
          {text.footer_imprint}
          {!text.footer_imprint && <span>Impressum</span>}
        </a>{" "}
        &{" "}
        <a href="https://chaostreff-flensburg.de/datenschutz/">
          {text.footer_privacy}
          {!text.footer_privacy && <span>Datenschutz</span>}
        </a>
      </p>
    </div>
  </section>
);
