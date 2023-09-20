export default (
  { title, children, ...props },
) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <div class="headerBackground row">
            <div class="col">
              <h1>
                Chaotischer Catalysator Stipendien
              </h1>
              <p>
                Themen, die sich die Informationstechnologien dieser Welt genauer anschauen, ihren
                Einfluss auf die Gesellschaft untersuchen und Ideen entwickeln,
                wie die Welt nach den Grundsätzen der Hacker*innen-Ethik
                verbesserbar ist.
              </p>
            </div>
            <div class="col-auto d-flex flex-column justify-content-end">
              <a
                href="#newsletter-anmelden"
                target="blank"
                class="btn btn-outline-light"
              >
                Newsletter abonnieren
              </a>
            </div>
          </div>
          <section class="shadow header">
            <nav class="navbar">
              <a href="/">Startseite</a>
              <a href="/blog/page/1">Blog</a>
            </nav>
          </section>
          <div class="card-body content">
            <main class="p-md-4">
              {children}
              <hr />
              <h2 id="newsletter-anmelden" class="mt-6 mb-2">Newsletter</h2>
              <props.comp.Newsletter />
            </main>
          </div>
        </div>
      </main>
      <footer class="p-4">
        <props.comp.Footer {...props} />
      </footer>
    </section>
  </props.comp.Base>
);
