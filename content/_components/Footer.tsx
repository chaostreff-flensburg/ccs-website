export default ({ text }) => (
  <section class="row">
    <div class="col-auto">
      <p>
        {text.footer_slogan}{" "}
        <a href="https://c3fl.de/">Chaostreff Flensburg e.V.</a>
      </p>
    </div>
    <div class="col-auto">
      <p>
        <a href="https://github.com/chaostreff-flensburg/ccs-website/">Git</a>{" "}
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
