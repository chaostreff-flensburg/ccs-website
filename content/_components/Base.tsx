export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>
        {title
          ? `${title} - "#CCS"`
          : "Chaotischer Catalysator Stipendien #CCS"}
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Chaos Computer Club Flensburg e.V." />
      <meta name="publisher" content="Chaos Computer Club Flensburg e.V." />
      <meta name="fediverse:creator" content="@ccs@chaos.social"></meta>
      <meta
        name="description"
        content="The Chaotischer Catalysator Scholarship Program."
      ></meta>

      <link rel="icon" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />

      <link rel="stylesheet" href="/bootstrap.css" />
      <link rel="stylesheet" href="/darktheme.css" />
      <link rel="stylesheet" href="/code.css" />
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>{children}</body>
  </html>
);
