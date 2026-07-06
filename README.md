# Ocean Endodontics — oceanendosf.com

Modern, accessible, fast marketing site for **Ocean Endodontics** (Dr. Kelly Kimiko Leong, San Francisco). Astro 5 static build, Tailwind CSS v4, deployed to Cloudflare Pages. Migrated off WordPress.

## Stack

- **Astro 5** (`output: 'static'`) — zero client framework, near-zero JS
- **Tailwind CSS v4** via `@tailwindcss/vite` (no config file; tokens in `src/styles/global.css`)
- **Sharp** build-time AVIF/WebP image pipeline
- **Leaflet + OpenStreetMap** for maps (no Google Maps, no tracking)
- **@astrojs/sitemap** + **@astrojs/rss**
- Self-hosted **Inter** font (no third-party font requests)

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run check      # astro type/diagnostics check (optional gate)
npm run preview    # preview the built dist/ locally
npm run deploy     # build + wrangler pages deploy
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Or manual: `npx wrangler pages deploy dist --project-name=dr-kelly-leong-ocean-endo`

`public/_headers` (CSP + security + caching) and `public/_redirects` (301 map for every legacy WordPress URL) are picked up automatically by Pages.

## Structure

```
src/
  data/        site.ts, services.ts (11), cities.ts (7), reviews.ts, imageMap.ts   <- edit content here
  content/     education/*.md (blog collection)
  lib/         schemas.ts (JSON-LD), privacy-zones.ts, utils.ts (RichText)
  layouts/     BaseLayout.astro
  components/  layout/ · sections/ · ui/ · seo/
  pages/       routes (static + dynamic services/areas/education)
  styles/      global.css (@theme design tokens + a11y toolbar)
public/        _headers, _redirects, robots.txt, llms.txt, llms-full.txt, favicon, images
```

Content lives in typed data files, not templates — a non-developer can update services, cities, hours, and NAP in `src/data/`.

See **BUILD-NOTES.md** for QA status, the pre-launch verification checklist, and important notes.
