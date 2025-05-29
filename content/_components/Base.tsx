export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>
        {title
          ? `${title} - "#CCS"`
          : "Chaotisches Catalysator Stipendien #CCS"}
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Chaostreff Flensburg e.V." />
      <meta name="publisher" content="Chaostreff Flensburg e.V." />

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
