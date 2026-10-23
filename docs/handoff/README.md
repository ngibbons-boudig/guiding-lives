# Guiding Lives – website handoff

Handoff bundle for building the restyled Guiding Lives (Youth Mentoring Support) website.
Produced by Bournemouth Digital, 23 Oct 2026, from the logo and "Our Model" infographic supplied by the client.

## Contents

| Path | What it is |
| --- | --- |
| `DESIGN-BRIEF.md` | The design brief: scope, brand identity, colour palette (hex), typography, visual language, all site copy transcribed verbatim from the infographic, suggested site structure, open questions. **Read this first.** |
| `brand/logo.png` | Supplied logo, 960×960 flattened PNG on cream. Crop to a circle for the header until a transparent/horizontal version arrives. |
| `brand/our-model-infographic.png` | Supplied "Our Model" infographic, 853×1280. Source of truth for copy, icon set and the tree layout. |
| `mockups/home-desktop.html` | Example home page with the brand applied (1280px layout, fluid). Open in a browser. |
| `mockups/home-mobile.html` | Same page at 390px. |
| `wireframes/home.html` | Greyscale wireframe – Home. |
| `wireframes/our-model.html` | Greyscale wireframe – Our Model page (tree diagram + suggested "How it works" steps). |
| `wireframes/about-contact.html` | Greyscale wireframe – About Shelley + Contact/referral form. |
| `design-canvas-source/` | Original Claude Design canvas files (`.dc.html`). Not needed for the build; kept for reference. |

## Build notes

- **Fonts in the mockups are stand-ins** (Playfair Display, Jost, Allura from Google Fonts). Confirm the real fonts with the client before locking them in.
- **Photos are placeholders** – the gradient blocks labelled "Coastal photo" and "Meadow photo" are where the existing site's photography goes.
- **Copy** – everything in `DESIGN-BRIEF.md` under "Content from the Our Model infographic" is verbatim client copy. Anything in `[SQUARE BRACKETS]` in the mockups/wireframes is a placeholder the client still needs to supply.
- **Icons** – the mockups use inline stroke SVGs matching the infographic's line-icon style; reuse or replace with a consistent icon set.
- **The tree diagram** (young person at the centre, six support areas, seven foundations) is the core brand component. Desktop: 3-column grid around a central circle. Mobile: vertical stack, young person first.
- **Palette and contrast rules** are in the brief; deep green #304337 on cream #F6F3EB is the body-text pairing.

## Suggested first prompt for Claude Code

> Read `DESIGN-BRIEF.md`, then open `mockups/home-desktop.html` and `wireframes/*.html`. Scaffold a static site (or WordPress theme – confirm) that reproduces the home page mockup faithfully, builds Our Model and About/Contact from the wireframes using the brief's palette, typography and copy, and leaves clearly marked placeholders for the items listed under "Open questions".
