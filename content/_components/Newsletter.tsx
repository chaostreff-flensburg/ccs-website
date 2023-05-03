export default () => (
  <form
    method="post"
    action="https://newsletter.chaostreff-flensburg.de/subscription/form"
    class="listmonk-form"
  >
    <div>
      <input type="hidden" name="nonce" />
      <p>
        <input
          type="email"
          name="email"
          required
          placeholder="E-Mail"
          class="form-control"
        />
      </p>
      <p>
        <input
          type="text"
          name="name"
          placeholder="Name (optional)"
          class="form-control"
        />
      </p>

      <p>
        <input
          hidden
          id="31061"
          type="checkbox"
          name="l"
          checked
          value="5da15f43-d544-456e-9512-1e4a4ca8c1cd"
        />
      </p>

      <p>
        <input
          type="submit"
          class="btn btn-success"
          value="Abonnieren"
        />
      </p>
    </div>
  </form>
);
