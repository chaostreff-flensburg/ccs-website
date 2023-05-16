import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import multilanguage from "lume/plugins/multilanguage.ts";

const site = lume({
  src: "./content",
});

site
  .use(
    multilanguage({
      languages: ["en", "de"],
      defaultLanguage: "de",
    }),
  )
  .use(jsx_preact())
  .use(mdx())
  .use(pagefind())
  .use(sass())
  // .use(tailwindcss())
  .use(postcss())
  // .use(minify_html())
  .copy("media")
  .copy("assets", ".")
  .copy("main.js")
  .remoteFile(
    "./code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github.min.css",
  )
  .remoteFile(
    "./bootstrap.css",
    "https://esm.sh/bootstrap@5.2.3/dist/css/bootstrap.min.css",
  )
  .remoteFile(
    "./darktheme.css",
    "https://esm.sh/bootstrap-darkmode@5.0.1/css/darktheme.css",
  );

export default site;
