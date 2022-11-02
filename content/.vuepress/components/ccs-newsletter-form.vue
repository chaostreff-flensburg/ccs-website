<template>
  <section>
    <h3 id="newsletter-anmelden">Zum #CCS Newsletter anmelden</h3>
              <p>Mit dem Newsletter bleibst du immer top informiert! Nach der Registration bekommst du eine E-Mail, die bestätigt werden muss. Leider ist diese manchmal erst im Spam Ordner zu finden.</p>

<form
            method="post"
            action="https://newsletter.chaostreff-flensburg.de/subscription/form"
            class="listmonk-form"
          >
            <div>
              <input type="hidden" name="nonce" />
              <p>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  required
                  placeholder="E-Mail"
                  aria-label="E-Mail Adresse"
                />
              </p>
              <p>
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Name (optional)"
                  aria-label="Name (optional)"
                />
              </p>
              <input
                id="5da15"
                type="hidden"
                name="l"
                value="5da15f43-d544-456e-9512-1e4a4ca8c1cd"
              />
              <p>
                <input
                  class="btn btn-success"
                  type="submit"
                  value="Abonnieren"
                  aria-label="Abonnieren"

                />
              </p>
            </div>
          </form>
  </section>
</template>

