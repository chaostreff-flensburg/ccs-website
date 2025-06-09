import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import anchor from "npm:markdown-it-anchor";

const markdown = {
  plugins: [[anchor, { level: 2 }]],
};

const site = lume({
  src: "./content",
},
  {
    markdown,
  });

site
  .use(
    multilanguage({
      languages: ["en", "de"],
      defaultLanguage: "de",
    }),
  )
  .use(jsx_preact(/* Options */))
  .use(pagefind())
  .use(sass())
  // .use(tailwindcss())
  .use(postcss())
  .use(mdx())
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
