module.exports = {
  locales: {
    "/": {
      lang: "de-DE",
      title: "Chaotischer Catalysator Stipendien #CCS",
      description: "Mit dem “Chaotischen Catalysator Stipendien #CCS” werden fürs Wintersemester 2022 vier Stipendien für Masterarbeiten vergeben. Jedes Stipendium wird in Höhe von insgesamt 1.500€ gefördert."
    }
  },
  head: [
    ['link', {rel: "icon", sizes: "32x32", href: "/favicon/favicon-32x32.png"}],
    ['link', {rel: "icon", sizes: "16x16", href: "/favicon/favicon-16x16.png"}],
    ['link', {rel: "icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"}],
    ['link', { rel: "shortcut icon", href: "/favicon/favicon.ico"}],
    ['link', { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['meta', { name: "msapplication-TileColor", content: "#da532c"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  markdown: {
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.set({ breaks: true });
    }
  },
  dest: "./dist",
  plugins: [
    [
      'vuepress-plugin-chart'
    ]
  ]
};
