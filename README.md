# Guiding Lives — website

Restyled site for Guiding Lives (Youth Mentoring Support), built by Bournemouth Digital
from the design handoff in [`docs/handoff/`](docs/handoff/) (brief, mockups, wireframes).

Static [Astro](https://astro.build) site, no backend.

```sh
npm install
npm run dev      # http://localhost:4350
npm run build    # → dist/
```

Also listed in Devhub (`~/Projects/devhub/sites.json`, id `guiding-lives`).

## Where things are

| Path | What |
| --- | --- |
| `src/data/model.ts` | All client copy from the "Our Model" infographic (verbatim — don't reword) |
| `src/data/site.ts` | Contact details (placeholders) and LinkedIn link |
| `src/components/ModelTree.astro` | The tree diagram — static on Home, expandable (`<details>`) on Our Model |
| `src/components/Icon.astro` | Line icon set from the mockups |
| `src/styles/global.css` | Brand tokens (palette, fonts) and base styles |
| `astro.config.mjs` | Self-hosted fonts (stand-ins: Playfair Display, Jost, Allura) |

## Pages

- `/` Home — hero, intro, tree, More than mentoring, Rooted in, closing quote
- `/our-model/` — expandable tree, foundations, How it works steps
- `/about/` — About Shelley, values, contact/referral form (`#contact`)
- `/thank-you/` — form confirmation (noindex)

## Still to come from the client

Every placeholder renders with a soft gold highlight and carries `data-todo` —
`grep -rn data-todo src` lists them all.

- Logo as vector / transparent PNG, and a horizontal lockup (header currently uses a crop of the PNG + live text)
- Real font names (swap in `astro.config.mjs`)
- Photography: coastal (home hero) and meadow (closing quote) — currently gradients
- Shelley's bio, portrait, qualifications; values copy
- Contact email, phone, area covered; safeguarding / DBS statement; privacy note
- How it works steps and foundation descriptions — confirm with Shelley
- Existing site URL / platform

## Deploying

Builds to static `dist/`. `netlify.toml` is included; the contact form uses
Netlify Forms (enable form detection in the Netlify UI). On another host, point
the form's `action` at that host's handler. Set `SITE_URL` to the live domain so
canonical links and the sitemap are correct.
