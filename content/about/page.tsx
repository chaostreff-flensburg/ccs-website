export const layout = "AboutIndex.mdx";

export default function* () {
 

  yield {
    url: "/about/",
    layout: "AboutIndex.mdx",
    lang: "de",
  };

  yield {
    url: "/en/about/",
    layout: "AboutIndexEN.mdx",
    lang: "en",
  };
}
