# Eolarity Innovations LLP — Marketing Site

A 5-page TanStack Start marketing site with a futuristic deep-indigo aesthetic and ember-orange accents pulled from the brand logo.

## Pages (separate routes, SSR + SEO)

- `/` **Home** — hero with animated gradient orb (mirrors the logo's orange dot), tagline ("Custom GenAI solutions, built at the speed of the meta"), 4 capability tiles linking to Services/Products, mini "registered under Startup India + LLP" trust strip, footer CTA to Contact.
- `/services` **Services** — consulting & solutioning, AI solution design, content production, research, and meta-aware/current-stack solutions. Each as a card with icon, short copy, outcomes bullet list.
- `/products` **Products** — in-house product line cards: education platform, coding plugins, productivity apps, plus a "More shipping soon" tile. Each card has status badge (Live / In development).
- `/about` **About** — story, mission, what "Eolarity" stands for (pace + clarity), Startup India + LLP registration callouts, founding principles.
- `/contact` **Contact** — single primary CTA. Validated form (name, email, message via zod). Submission opens a `mailto:` with the composed message (no backend needed). Plus email + location info card.

## Design system (`src/styles.css`)

- Palette in `oklch`:
  - `--background` deep near-black indigo `#0a0a1a`
  - `--foreground` near-white `#f0f0f5`
  - `--primary` ember orange `#e85d3a` (logo dot)
  - `--secondary` deep indigo `#1e1e5a`
  - `--accent` violet glow `#a78bfa`
  - `--muted` slate indigo
- Custom tokens: `--gradient-hero` (indigo → violet → orange radial), `--gradient-orb`, `--shadow-glow` (orange glow), `--shadow-elevated`.
- Typography: **Space Grotesk** (display/headings) + **Inter** (body) via Google Fonts in `__root.tsx` head links.
- Dark-only theme (apply `.dark` class on `<html>` in root shell).

## Components

- `src/components/SiteHeader.tsx` — sticky translucent nav with logo + 5 links, mobile sheet menu.
- `src/components/SiteFooter.tsx` — brand block, link columns, Startup India + LLP badges, copyright.
- `src/components/GradientOrb.tsx` — animated radial gradient orb for hero (CSS keyframes, no extra deps).
- `src/components/SectionHeading.tsx` — eyebrow + title + lede pattern.
- Reuse existing shadcn `button`, `card`, `input`, `textarea`, `label`, `badge`, `sheet` components.

## Assets

- Copy `eolarity_logo_primary.png` → `src/assets/eolarity-logo.png`
- Copy `eolarity_logo_horizontal.png` → `src/assets/eolarity-logo-horizontal.png` (used in nav)
- Favicon: convert logo to `public/favicon.png` and link from root.

## Layout/root work

- Update `src/routes/__root.tsx`:
  - Add Google Fonts links + favicon link.
  - Add `className="dark"` to `<html>` so dark tokens apply.
  - Wrap `<Outlet />` with `<SiteHeader />` + `<SiteFooter />` inside `QueryClientProvider`.
- Replace `src/routes/index.tsx` placeholder with the real Home page.
- Each route file sets its own `head()` with route-specific title, description, og:title, og:description.

## Tech notes

- No backend. Contact form is `mailto:` based with client-side zod validation and inline error states.
- All animations are CSS-only (gradient drift, orb pulse, subtle fade-ins on scroll via `IntersectionObserver` in a small hook).
- No new npm dependencies required — zod is already in the stack via shadcn form deps; if missing, add it.
- Mobile-first responsive layout, semantic HTML, single `<h1>` per route, alt text on logo.
