export default ({ title, children, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <section data-theme="dark" class="layout">
      <main class="container">
        <div class="card border-0 shadow rounded">
          <props.comp.ShortHeader page={"publication"} {...props}/>
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
