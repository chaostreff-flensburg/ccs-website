# CCS Website

![build](https://github.com/chaostreff-flensburg/ccs-website/actions/workflows/build-and-deploy.yml/badge.svg)

Repo der Webseite des #CCS Chaotischer Catalysator Stipendien. [Live Version](https://chaos-stipendien.de/). Gebaut mit [Lume](https://lume.land/) auf Basis von [Deno](https://deno.com).

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

Made with ♡ at [Chaostreff Flensburg](https://twitter.com/chaos_fl) |
[License](./LICENSE)
