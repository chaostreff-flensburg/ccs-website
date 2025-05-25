export default () => (
  <form
    method="post"
    action="https://newsletter.c3fl.de/subscription/form"
    class="listmonk-form"
  >
    <div>
      <input type="hidden" name="nonce" />
      <p>
        <input
          type="email"
          name="email"
          aria-label="Deine E-Mail Adresse (Pflichtfeld)"
          required
          placeholder="E-Mail"
          class="form-control"
        />
      </p>
      <p>
        <input
          type="text"
          name="name"
          aria-label="Deine Name  (optional)"
          placeholder="Name (optional)"
          class="form-control"
        />
      </p>

      <p>
        <input
          hidden
          id="31061"
          type="hidden"
          name="l"
          checked
          aria-hidden="true"
          value="5da15f43-d544-456e-9512-1e4a4ca8c1cd"
        />
      </p>

      <p>
        <input
          type="submit"
          aria-label="Jetzt Abbonieren"
          class="btn btn-success"
          value="Abonnieren"
        />
      </p>
    </div>
  </form>
);
