export default ({ text }) => (
  <section class="row">
    <div class="col-auto">
      <p>
        {text.footer_slogan}{" "}
        <a href="https://chaostreff-flensburg.de/">Chaostreff Flensburg e.V.</a>
      </p>
    </div>
    <div class="col-auto">
      <p>
        <a href="https://chaostreff-flensburg.de/impressum/">
          {text.footer_imprint}
        </a>{" "}
        &{" "}
        <a href="https://chaostreff-flensburg.de/datenschutz/">
          {text.footer_privacy}
        </a>
      </p>
    </div>
  </section>
);
