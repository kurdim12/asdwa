# Marwan Ahmad Alkurdi & Partners — Website

Bilingual (EN / AR, RTL-aware) marketing site for the Jordanian
engineering & construction firm, built with **Next.js 16** (App Router),
**Tailwind CSS**, and **Framer Motion**.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

The site is configured as a **fully static export** (`next.config.ts` →
`output: "export"`). `npm run build` emits a static site into `out/` with
no server runtime required.

```bash
npm run build      # -> out/
```

## Deploying to Cloudflare

The static `out/` folder can be hosted on Cloudflare with either product.

### Option A — Cloudflare Pages (Git integration, recommended)

Connect the repo in the Cloudflare dashboard and set:

| Setting             | Value           |
| ------------------- | --------------- |
| Build command       | `npm run build` |
| Build output dir    | `out`           |

Cloudflare rebuilds on every push to the production branch.

### Option B — Cloudflare Workers Static Assets (CLI)

`wrangler.jsonc` is preconfigured (assets → `./out`). Deploy with:

```bash
npm run cf:deploy     # next build && wrangler deploy
npm run cf:preview    # build + serve locally via `wrangler dev`
```

(Requires a one-time `npx wrangler login`.)

### Caching / routing

- `public/_headers` sets long-cache headers for hashed build assets and media.
- `trailingSlash: true` emits `about/index.html`-style paths; the Worker uses
  `html_handling: "auto-trailing-slash"` and serves `404.html` for unknown routes.

## Other hosts

The same static build deploys to Netlify (`netlify.toml` → publish `out`) or
any static host.

> **Note on the contact form:** the form uses Netlify Forms
> (`data-netlify="true"`), which only works when hosted on Netlify. On
> Cloudflare, wire the form to a Cloudflare Pages Function / Worker (or a
> service like Formspree) to receive submissions.
