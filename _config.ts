import lume from "lume/mod.ts";
import mdx from "lume/plugins/mdx.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import jsx from "lume/plugins/jsx.ts";
import anchor from "npm:markdown-it-anchor";
import redirects from "lume/plugins/redirects.ts";
import sitemap from "lume/plugins/sitemap.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import gzip from "lume/plugins/gzip.ts";

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
  .use(jsx({
  pageSubExtension: "", // Keep Lume 2 default behavior
}))
  .use(pagefind())
  .use(sass())
  .use(postcss())
  .add("main.scss")
  .add("https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github.min.css", 'code.css')
  .add("https://esm.sh/bootstrap@5.2.3/dist/css/bootstrap.min.css", "bootstrap.css")
  .add("https://esm.sh/bootstrap-darkmode@5.0.1/css/darktheme.css", "darktheme.css")
  
  .use(mdx())
  .add("media")
  .add("assets", ".")
  .add("main.js")
  .use(redirects())
  .use(minifyHTML(/* Options */))
  .use(gzip())
  ;

site.use(sitemap(/* Options */));

export default site;
