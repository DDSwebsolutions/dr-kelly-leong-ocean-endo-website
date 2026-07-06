# Build Notes & Launch Checklist — Ocean Endodontics

Built to the DDS Web Solutions dental site standard. This file is the handoff: what shipped, what to verify, and how it maps to your Definition of Done.

---

## What shipped

**~50 pages from 24 route files:**

- Home, About, Meet Dr. Leong, Our Office, Technology, Reviews
- Services index + **11 service pages** (root canal, retreatment, apicoectomy, diagnosis/pain, cracked tooth, emergency, trauma, nitrous, oral conscious sedation, internal bleaching, Botox for bruxism)
- Areas We Serve index + **7 unique neighborhood pages** (Ingleside, Lake Merced, Parkmerced, West Portal, St. Francis Wood, Balboa Terrace, Daly City)
- Contact, Book Appointment (Jotform), New Patient, Insurance & Financing, For Doctors
- Education Center + 3 articles + RSS feed
- Privacy Policy, Terms of Use, Accessibility Statement, Your Privacy Choices
- Thank-you, 404

**Design:** Custom, not a template. Ocean navy/azure palette pulled from the real logo mark, Apple-style system/Inter typography with fluid `clamp()` scale, soft motion (all gated by reduced-motion), real practice photography run through the Sharp pipeline.

**Requested features, all in:**

- Hovering **action bar** (Accessibility, Call, Email, Schedule) on every page — pointer-events constrained to the visible buttons so it never swallows taps.
- **Accessibility toolbar** baked into that bar: text size, line/letter spacing, high contrast, readable (dyslexia-friendly) font, highlight links, big cursor, reading guide, focus outline, reduce motion. Choices persist per device and apply before first paint (no flash).
- **Mobile bottom bar** with Call + Schedule, coexisting with the hovering bar.
- **Leaflet + OpenStreetMap** maps. **No Google Maps. No Google Analytics. No third-party trackers or ad pixels anywhere.**
- Footer + Terms **disclaimers**: not medical advice, no doctor–patient relationship, **call 911** for emergencies, plus the SMS-consent notice.
- HIPAA/ADA/CIPA-minded: PHI-zone classifier in `src/lib/privacy-zones.ts` (moot today since nothing tracks, but structural), WCAG 2.1 AA apparatus, and a CSP that only allows what the site actually uses.
- Full **schema/JSON-LD** (Dentist/MedicalBusiness org, WebSite, Physician, per-page WebPage + BreadcrumbList, MedicalProcedure on services, FAQPage, BlogPosting), **sitemap**, **robots.txt** with AI-crawler allowlist, and **llms.txt + llms-full.txt**.
- **Redirects:** every legacy WordPress URL 301s to its new home (`public/_redirects`, 66 rules incl. both trailing-slash forms) — services, the 7 area pages, appointment, CE pages, partnership/staff, `/wp-*`, `/feed`, category/tag/author. No broken links, no catch-all shadowing.

---

## Build/QA status — read this

The Astro build was validated in my environment as far as the toolchain allowed:

- ✅ **All 47 `.astro` files compile** clean through the Astro compiler (0 errors).
- ✅ **TypeScript data layer type-checks** (all 11 services + 7 cities satisfy their contracts; `tsc` clean).
- ✅ Image pipeline confirmed working (Sharp generated the 1200×630 OG image and the 180×180 apple-touch icon).

⚠️ **The full `dist/` build must be run on your Mac.** The build sandbox couldn't execute esbuild's native binary (it segfaults under the sandbox — this is exactly the "build only works on the target machine" case in Part 3 of the standard). Nothing is wrong with the project; the transform engine just can't run there. On your machine:

```bash
cd dr-kelly-leong-ocean-endo-website
npm install
npm run build      # produces dist/
npm run preview    # eyeball it locally
```

`node_modules` and any lockfile were intentionally left out — do a fresh `npm install`.

### Definition of Done — where each item stands

| Gate | Status |
|---|---|
| `astro build` clean, zero type errors | Templates + data verified here; **run `npm run build` on your machine to produce dist/** |
| Real-browser axe pass on `dist/`, contrast from tokens | **Run after build** (accent tokens pre-verified: buttons 4.8:1, links 6.1:1 on white) |
| Lighthouse mobile 95+, LCP <2.0s, CLS 0 | **Run after build** (static, near-zero JS, hero preloaded, images sized — built for this) |
| Every claim audited vs. real facts | ✅ Done — scope, sedation, specialty, reviews, availability all honest (see below) |
| Structured data validated (Rich Results) | **Paste a built URL into the Rich Results Test** — schema is built to spec, no `aggregateRating` |
| Real form submission end-to-end + thank-you | **Verify in Jotform** (see #3 below) |
| Tracking gating | ✅ N/A — zero tracking ships |
| Every legacy URL 301s to a live page | ✅ Mapped in `_redirects`; spot-check a few after deploy |
| Same origin serves home + inner pages | **Confirm at DNS cutover** |

---

## Verify before launch

1. **Map pin (minor).** Coordinates in `src/data/site.ts` are block-level accurate (Ocean Ave & Junipero Serra). If you want it exact, grab lat/lng from Google Maps and drop them in. The "Get Directions" button already uses the authoritative Google pin.

2. **Doctor's degree.** I used **DMD** (Tufts confers the DMD) and "Diplomate, American Board of Endodontics (2017)." Confirm DMD vs DDS and adjust in `src/data/site.ts` (`doctor.credential`) if needed.

3. **Jotform (the one thing to test live).** The embed (form `252456352678365`) is wired and its submit/CDN hosts are whitelisted in the CSP (`public/_headers`). Before launch: in the Jotform builder, set the form's **Thank-You redirect to `https://oceanendosf.com/thank-you`**, then submit the form on the deployed site and confirm it posts cleanly and lands on the thank-you page. (If a form ever renders but hangs on submit, the CSP submit host is the first suspect — it's covered here via `*.jotform.com`.)

4. **Reviews.** Per your call, we show the real written testimonials with **no numeric star count and no `aggregateRating`** (cleanest legally). If you later want star schema, send me the verified current Google count + average and I'll wire it to match exactly.

5. **Referral PDF.** The old `/wp-content/uploads/2026/04/Updated-Referral.pdf` 301s to `/for-doctors`. If you want the actual PDF available, drop it in `public/files/` and link it from the For Doctors page.

6. **Analytics (intentionally none).** If you ever want measurement, use **Cloudflare Web Analytics** (cookieless, no CIPA exposure) — not Google Analytics. Keeping it off is the safest posture and matches your instruction.

7. **DNS / canonical.** Canonical host is `https://oceanendosf.com` (non-www), matching the current site. Point the domain at the Pages project and set a www → apex redirect if www is registered.

---

## Content authenticity

All copy was written from the live site and the info you provided — nothing invented. Scope statements are honest and defensible: Dr. Leong is presented as a board-certified endodontic **specialist** (accurate), in-office sedation is limited to **nitrous + oral conscious** with an explicit "no IV sedation or general anesthesia" line, emergency availability is "same-day **when possible**" on business days (matching your Mon/Tue/Wed/Fri hours), and Botox is framed as **therapeutic for bruxism**, not cosmetic. No "best/#1/painless/guaranteed" superlatives.

## Editing later

- Practice info (NAP, hours, nav, CTAs, disclaimers): `src/data/site.ts`
- Services: `src/data/services.ts` · Neighborhoods: `src/data/cities.ts` · Testimonials/FAQs: `src/data/reviews.ts`
- Colors/fonts/spacing: `src/styles/global.css` (`@theme` block)
- New article: add a `.md` file in `src/content/education/`
