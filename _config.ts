import lume from "@lumeland/lume";
import mdx from "@lumeland/plugin-mdx";
import pagefind from "@lumeland/plugin-pagefind";
import postcss from "@lumeland/plugin-postcss";
import sass from "@lumeland/plugin-sass";
import multilanguage from "@lumeland/plugin-multilanguage";
import jsx from "@lumeland/plugin-jsx";
import anchor from "markdown-it-anchor";
import redirects from "@lumeland/plugin-redirects";
import sitemap from "@lumeland/plugin-sitemap";
import minifyHTML from "@lumeland/plugin-minify-html";
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
