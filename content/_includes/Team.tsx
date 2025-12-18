export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <div class="headerBackground row">
            <div class="col">
              <h1>Chaotischer Catalysator Stipendium</h1>
            </div>
          </div>
          <section class="shadow header">
            <nav class="navbar">
              <a href="/">Startseite</a>
               <a href="/about/">
                Über uns
              </a>
              <a href="/team/" class="active">
                Team
              </a>
              <a href="/blog/page/1/">Blog</a>
              <a href="/publication/page/1/">Publikationen</a>
            </nav>
          </section>
          <div class="card-body content">
            <main class="p-md-4">{children}</main>
          </div>
        </div>
      </main>
      <footer class="p-4 container">
        <props.comp.Footer {...props} />
      </footer>
    </section>
  </props.comp.Base>
);
