# JMK Constructions — Website

A modern, animated marketing site for JMK Constructions (Edmonton, AB),
built with React, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** for styling — forest/copper design tokens in `src/index.css`
- **Framer Motion** for scroll reveals, page transitions and the hero parallax
- **Lenis** for smooth inertial scrolling
- **React Router** for the 5-page site (Home, Services, Gallery, About, Contact)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

Deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push
to `main`. Because the site is served from `/JMK-Canada/` (not the domain
root), `vite.config.ts` sets `base: '/JMK-Canada/'` and `App.tsx` passes
`basename={import.meta.env.BASE_URL}` to `BrowserRouter` — keep both in
sync if the repo is ever renamed.

## Rebrand — content provenance

The palette (forest `#072424` / copper `#d98e3e`), logo, hero copy, service
list, gallery project data and shop address in this build came from a
design handoff (`design_handoff_jmk_rebrand/`) supplied directly by the
client. A few things still need a look before launch:

- **`src/data/content.ts`** is the single source of truth for business
  facts. The **email address** (`info@jmkcanada.com`) is still a
  placeholder — confirm the real inbox.
- **Photos**: the hero, service cards, gallery and before/after slider all
  use images from the GoDaddy CDN (`img1.wsimg.com`) that were already on
  jmkcanada.com. The design handoff flags these as **likely licensed stock,
  not JMK's own project photography** — confirm the license covers this
  site, or replace with real project photos, before launch.
- **Testimonials**: deliberately not shipped. The design reference included
  a review carousel with three explicitly-placeholder quotes; rather than
  invent client testimonials, the "In their words" section links out to
  the real Facebook page instead. Swap in real reviews (with attribution)
  when you have them.
- **Contact form** (`src/pages/Contact.tsx`) opens the visitor's email
  client via a `mailto:` link — there's no backend. Wire it up to a real
  form service (Formspree, Netlify Forms, etc.) before launch.
- **Business hours** are still not shown anywhere — add them to
  `content.ts` / the Contact page if wanted.

## Project structure

```
src/
  data/content.ts     Single source of truth for business content
  components/         Shared UI (Navbar, Footer, Logo, Reveal, PageHero, ...)
  sections/            Reusable homepage sections
  pages/               Route-level pages
```
