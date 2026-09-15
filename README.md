# JMK Custom Renovations & Homes — Website

A modern, animated marketing site for JMK Custom Renovations & Homes
(Edmonton, AB), built with React, TypeScript, Tailwind CSS and Framer
Motion.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** for styling (tokens defined in `src/index.css`)
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

## Before this goes live — please verify

The source site (jmkcanada.com) could not be fetched directly from this
build environment (network policy), so content was gathered from public
listings (Facebook, BBB, search results) instead of the live site. A few
things should be double-checked against the real business before launch:

- **`src/data/content.ts`** — central place for all business facts
  (phone, tagline, services, service area). The **email address**
  (`info@jmkcanada.com`) is a placeholder — confirm the real inbox.
- **Business hours** were intentionally left off (unverified) — add them
  in `Contact.tsx` / `content.ts` if you want them displayed.
- **Photos**: every image on the site is a stock placeholder from
  Unsplash (`src/data/content.ts` → `services`/`gallery`, plus hero/about
  images inline in the section files). Swap these for real project
  photos — the gallery in particular should be actual JMK work.
- **Testimonials**: deliberately omitted rather than invented. The
  "Reviews" section on the homepage links out to the real Facebook page
  instead of fabricated quotes — replace with real reviews once you have
  a batch to feature.
- **Contact form** (`src/pages/Contact.tsx`) currently opens the visitor's
  email client via a `mailto:` link (no backend). Wire it up to a real
  form service (e.g. Formspree, Netlify Forms) or your own backend before
  launch.

## Project structure

```
src/
  data/content.ts     Single source of truth for business content
  components/         Shared UI (Navbar, Footer, Reveal, PageHero, ...)
  sections/            Reusable homepage sections
  pages/               Route-level pages
```
