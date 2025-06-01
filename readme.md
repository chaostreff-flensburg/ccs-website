# CCS Website

Repo der Webseite des #CCS Chaotischer Catalysator Stipendien. [Live Version](https://chaos-stipendien.de/). Gebaut mit [Lume](https://lume.land/) auf Basis von [Deno](https://deno.com).

## Update Content
To update content easily, regularly changing content is located in
```file
content/_data/variables.ts
```

## Framework Setup

Development
```bash
deno task serve
```

Production
```bash
deno task build
```

## start local with docker

```yaml
docker-compose -p ccs up -d
```

---

Made with ♡ at [Chaostreff Flensburg](https://c3fl.de/) |
[License](./LICENSE)
