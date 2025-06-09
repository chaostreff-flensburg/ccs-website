import { NEWSLETTER_URL } from "../_data/variables.ts";

export default () => (
  <div id="newsletter">
    <h2>Newsletter</h2>
    <form method="post" action={NEWSLETTER_URL} class="listmonk-form">
      <div>
        <input type="hidden" name="nonce" />
        <div class="coolinput">
          <label for="name" class="text">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Please enter your name (optional)"
            name="name"
            class="input"
          />
        </div>
        <div class="coolinput">
          <label for="email" class="text">
            E-Mail:
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. yourName@mail-domain.de"
            name="email"
            class="input"
            required
          />
        </div>
        <input
          hidden
          id="31061"
          type="hidden"
          name="l"
          checked
          aria-hidden="true"
          value="5da15f43-d544-456e-9512-1e4a4ca8c1cd"
        />
        <input
          type="submit"
          aria-label="Jetzt Abbonieren"
          class="btn-grad"
          value="Abonnieren"
        />
      </div>
    </form>
  </div>
);
