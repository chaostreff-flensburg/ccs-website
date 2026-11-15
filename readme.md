# CCS Website

Repo der Webseite des #CCS Chaotischer Catalysator Stipendien. [Live Version](https://chaos-stipendien.de/). Gebaut mit [Lume](https://lume.land/) auf Basis von [Node.js](https://nodejs.org).

## Update Content
To update content easily, regularly changing content is located in
```file
content/_data/variables.ts
```

## Framework Setup

Install dependencies
```bash
npm install
```

Development
```bash
npm run serve
```

Production
```bash
npm run build
```

## start local with docker

```bash
docker build -t ccs .
docker run --rm -p 8080:80 ccs
```

The site is then available at http://localhost:8080.

---

Made with ♡ at [Chaostreff Flensburg](https://c3fl.de/) |
[License](./LICENSE)
