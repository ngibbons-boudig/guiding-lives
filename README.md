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
| `src/data/content.ts` | Copy from Shelley's old site (bio, approach, testimonials, contact page) |
| `src/pages/policies.md` | Mentoring policies, from the old site |
| `docs/old-site/` | Full text of every page on the old WordPress site, for reference |
| `src/data/photos.ts` | Photos, all from the old site |
| `src/data/site.ts` | Contact details (from the old site) and LinkedIn link |
| `src/components/ModelTree.astro` | The tree diagram — static on Home, expandable (`<details>`) on Our Model |
| `src/components/Icon.astro` | Line icon set from the mockups |
| `src/styles/global.css` | Brand tokens (palette, fonts) and base styles |
| `astro.config.mjs` | Self-hosted fonts (stand-ins: Playfair Display, Jost, Allura) |

## Pages

- `/` Home: hero, welcome from Shelley, Our Model tree, More than mentoring, Rooted in, testimonials, closing quote
- `/our-model/`: expandable tree, Shelley's approach and session types, why mentoring matters, foundations, How it works
- `/about/`: Shelley's bio, approach, line-manager testimonial, contact/referral form (`#contact`)
- `/policies/`: the eight mentoring policies (safeguarding, privacy, confidentiality, etc.)
- `/thank-you/`: form confirmation (noindex)

`public/_redirects` sends the old WordPress addresses (`/about-me/`, `/my-approach/`,
`/contact-us/`, `/mentoring-policies/`) to the new pages.

## Content sources

Copy and photos come from Shelley's previous WordPress site (guidinglivesmentoringsupport.co.uk,
built by Luminal Company), recovered from the backup she sent in October 2026. Its images
lived in Luminal's S3 media storage, not in the zip. Shelley asked to keep the existing
content and pictures, apart from wording tweaks she'll send.

## Still to come from the client

Remaining placeholders carry `data-todo` and a soft gold highlight; `grep -rn data-todo src` lists them.

- "How it works" steps 2–4 on Our Model: confirm with Shelley
- Logo as vector / transparent PNG, and approval of the horizontal header lockup
- Real font names (swap in `astro.config.mjs`)
- Shelley's wording tweaks
- Confirm contact details, and the domain registrar / login

## Deploying

Builds to static `dist/`. `netlify.toml` is included; the contact form uses
Netlify Forms (enable form detection in the Netlify UI). On another host, point
the form's `action` at that host's handler. Set `SITE_URL` to the live domain so
canonical links and the sitemap are correct.

## Checking text near curved corners

The brand uses big organic curves, which can push text too close to the edge.
`scripts/curve-check.js` measures every line of text inside any element with a
large border radius, on every page at 1440/1280/1024/768/390px, and reports
anything closer than 28px to a curve. Paste it into the browser console on the
dev site and run `await curveCheck()`; an empty array means all clear.
