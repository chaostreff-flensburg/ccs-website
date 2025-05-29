import { NEWSLETTER_URL } from "../_data/variables.ts";

export default ({ text }) => (
  <>
    <h2 id="newsletter-anmelden" class="mt-6 mb-2">
      {text.newsletter}
    </h2>
    <form method="post" action={NEWSLETTER_URL} class="listmonk-form">
      <input type="hidden" name="nonce" />
      <div class="coolinput">
        <label for="name" class="text">
          Name:
        </label>
        <input
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
    </form>
  </>
);
