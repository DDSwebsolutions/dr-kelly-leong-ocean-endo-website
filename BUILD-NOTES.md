
---

## Refinement pass — July 14, 2026 (pre-launch)

Visual/content polish round on top of the original build. Full `astro build` (49 pages), `astro check` (0 errors), and a real-browser axe pass (WCAG 2.1 AA: 0 violations on home, service, contact, doctor, booking) were run after these changes.

**Requested changes**
- **Home hero now leads with the practice name.** H1 is "Ocean Endodontics" with the tagline "Comfort first. Precision always." beneath it; word-by-word entrance animation (fully gated by reduced-motion), plus a scroll cue and an ocean-wave divider into the stats band.
- **Logo enlarged** in the header (~36% bigger: 44px mobile / 60px desktop, condensing to 38/48px on scroll), mobile menu, and footer. Source PNG is 1120px wide, so it stays crisp at 3x.

**Fixes (found during review)**
- **Sticky header actually sticks now.** `sticky` sat on an inner div whose parent ended immediately, so the bar scrolled away on every page. The `<header>` itself is now sticky, parking the utility bar just above the viewport on desktop. Header z-index raised 40 → 50 so the mobile drawer covers the bottom action bar (it was rendering underneath).
- **Skip-link** could ghost-render on some mobile loads; it now also gates on opacity/pointer-events until focused.
- **StatStrip markup** made valid for `<dl>` semantics (axe "definition-list" violation fixed).
- **Reduced-motion kill switches** now also zero animation/transition *delays*, so delayed entrances can't leave content invisible for users with motion off.

**Design/animation upgrades (all motion respects prefers-reduced-motion + the a11y toolbar toggle)**
- Staggered scroll-reveals (grouped elements cascade in), count-up animation on the stats, Ken Burns drift on the SF photo band, hover zoom on gallery/feature photos, animated mobile-menu drawer (slide + fade, rounded edge), service-card hover treatment (gradient hairline, icon fill), richer testimonial cards, numbered treatment steps with connector line, brand-mark watermarks on inner-page heroes and the CTA band, header shrink-on-scroll.
- Mobile: floating rail now shows only Accessibility + back-to-top on phones (Call/Email/Schedule live in the bottom bar), stats render as a compact 3-across strip, larger tap targets in the drawer.

**Content accuracy (verified against the live oceanendosf.com)**
- Botox for Bruxism now matches the doctor's published specifics: masseter **and temporalis** muscles, onset ~10–14 days, peak ~3–4 weeks, duration ~3 months, "doesn't interfere with speaking/chewing/expression," night guard + Botox positioned as complementary.
- Doctor bio phrase restored to her wording: "cutting-edge technology with a compassionate touch."
- Page parity re-confirmed against the old site's nav + redirect map: all 11 services, 7 neighborhood pages, 5 CE courses, doctor/office/technology/reviews, for-doctors set (portal, PDF, partnership, staff resources), patient portal, contact, appointment. The 3 Education Center articles are NEW content authored for this site — have Dr. Leong read them before launch.

**Still to verify at launch (unchanged from the list above):** Jotform thank-you redirect test on the live domain, exact map pin, DMD confirmation, PACE-provider status wording on /ce-courses, and a Lighthouse run on the deployed site.

---

## Refinement pass 2 — July 14, 2026 (performance + polish)

**Measured performance (local, compression-enabled server, simulated throttling):**
- Home **mobile: 97–99** (was 77) · FCP 1.2s · LCP 2.1–2.5s · CLS 0 · TBT ≤ 90ms
- Service page **mobile: 100** · LCP 1.7s
- Home desktop: 87 locally; expect higher on Cloudflare (brotli + HTTP/3 + edge cache)

**What moved the numbers**
- **Leaflet now lazy-loads.** Its ~150 KB JS + CSS (and OpenStreetMap tile requests) previously loaded eagerly on every map page; they now load only when the map scrolls within 600px of the viewport. Visitors who never reach the map never contact OSM at all. CSS ships inside the lazy chunk via `?inline` (required with inlined stylesheets — the standalone CSS chunk otherwise 404s).
- **Hero video no longer competes with first paint.** `preload="none"` + playback kicked off at window load; poster converted to WebP (143 KB → 82 KB, JPG kept) and preloaded from `<head>` via a new `preloadImage` prop on BaseLayout.
- **Stylesheets inline into each page** (`inlineStylesheets: 'always'`) — removes the render-blocking CSS request; ~12 KB compressed per page, hover-prefetch keeps navigation instant.

**Polish added**
- Branded **404** (navy band, gradient 404, wave hand-off, popular-page chips) and **thank-you** (3-step "what happens next") pages.
- **Jotform loading skeleton** on Book Appointment that fades when the form loads (8s failsafe); removed Jotform's scroll-to-top-on-load page jump.
- **Reading progress bar** on Education articles; education + areas cards get the same hover treatment as service cards; primary buttons get a subtle top-lit gradient; mega-menu links cascade in; accessibility panel rises in; footer links nudge on hover.
- **Print stylesheet:** header, footer, floating bars, and CTA bands are stripped when patients print an article or service page (inline medical disclaimers remain in the content).

**Checks after this pass:** build clean (49 pages), `astro check` 0 errors, axe 0 violations on the new/changed pages (404, thank-you, booking, education article), Leaflet verified initializing on scroll with zero console errors. Note: the hero video can't play in the audit sandbox (its browser lacks an H.264 decoder) — real browsers are unaffected; playback logic verified as invoked.

**Also confirmed this round:** `functions/_middleware.js` password-gates /staff-resources and /files/staff/* on Cloudflare Pages (HTTP Basic Auth; password set in that file — rotate it before sharing the URL beyond the team).

---

## Final sweep — July 14, 2026 (pre-launch QA)

Full-file audit of everything not previously reviewed: all four legal pages, accessibility statement, reviews, partnership philosophy, CE pages, area pages, robots.txt, llms.txt, site.webmanifest, RSS, Seo.astro, schemas.ts, and public/_headers. Findings:

- **CSP verified compatible with inlined stylesheets** (`style-src 'unsafe-inline'` was already present) — the performance change in pass 2 is safe in production. All origins used by the site (Jotform, Cloudflare Stream, OSM tiles) remain covered; no CSP edits needed.
- **Caching gap closed:** `/videos/*` (the 2.4 MB hero loop + posters) and the referral PDF now get long cache lifetimes instead of revalidating on every visit. If the hero video is ever replaced, rename the file so caches roll over.
- **Schema polish:** organization telephone/fax now emit in E.164 (+14157413636) per schema.org best practice; display formatting on-page is unchanged. JSON-LD validated parsing on all 49 built pages; org node confirms correct hours (Mon/Tue/Wed/Fri only).
- Legal pages, PACE disclaimer wording, robots/llms/manifest/RSS all reviewed — accurate and consistent; no changes required.

Remaining items are live-domain-only and already on the checklist above: Jotform thank-you redirect test, Rich Results test on a deployed URL, real-device look at the hero video, exact map pin, DMD + PACE confirmation by Dr. Leong, and her review of the 3 new Education articles.

---

## Liquid glass pass — July 14, 2026

Apple-style liquid glass applied to the floating navigation/control layer only (content surfaces stay solid, per Apple's own use of the material): sticky header (glass thins from 90% to 85% fill once it floats over scrolled content), mega-menu card, mobile drawer, bottom action bar, floating rail buttons, and the accessibility panel. Recipe: translucent fill + 20px blur + 1.8x saturation boost + specular top edge (`.glass`, `.glass-strong`, `.glass-edge` in global.css). The hero badge and phone button gained the saturation boost.

Guardrails: solid-fill fallbacks for browsers without backdrop-filter, for `prefers-reduced-transparency: reduce`, and for the site's own High Contrast toggle. The mega-menu card runs at 96% fill because it is a DOM descendant of the filtered header bar, where nested backdrop blur is not reliable cross-engine — documented in Header.astro. Deliberately NOT implemented: SVG refraction/lensing shaders (inconsistent in Safari/Firefox, GPU-heavy, and they degrade text legibility on a medical site).

Verified: build clean, axe 0 violations on home, drawer/panel/header/menu screenshots reviewed over worst-case dark backgrounds.

---

## Service-page imagery pass — July 14, 2026

Per Pete's direction: instrument close-ups are gone from patient-facing decorative slots, and the oversized full-width photo banner on service pages was replaced with a smaller, captioned figure inside the article column (5:3, article width, hover zoom).

- New assignments (all calm, all distinct): root canal → bright operatory; retreatment → operatory with garden view; apicoectomy → operatory with neighborhood view; diagnosis → the cone beam imaging suite (relevant to the 3D-imaging story); cracked tooth → airy operatory; emergency → front desk on arrival; trauma → the welcome board; nitrous → operatory with views; oral sedation → waiting-area seating; internal bleaching → microscope-with-orchid (kept); Botox → reception lounge.
- The one instrument-tray shot in the Our Office tour gallery was swapped for the bright hallway.
- imageMap.ts now carries honest per-photo alt text (written from the actual images) plus a documented rule: instrument close-ups (detail-chair, detail-instruments, detail-tools, detail-wide) are not to be used on patient-facing service pages. They remain available for clinical/professional contexts.

Build clean; figures verified on root canal, diagnosis, and Botox pages.

---

## Internal linking pass — July 14, 2026

Measured the full in-content link graph of the built site (nav/footer/aside boilerplate excluded, since search engines weight body links more heavily). Service pages were already strong (root canal: 33 contextual inbound links). Fixed the starved pages — in-content inbound links before → after:

- /services hub 0 → 13 · /about 0 → 15 · /areas-we-serve 1 → 19 · each neighborhood page 1 → ~6 · /financial 1 → 12 · /new-patient 1 → 12 · /reviews 1 → 11 · /education 4 → 10 · signs article 1 → 17 · partnership-philosophy 1 → 2+

How: three general FAQ answers now carry contextual links (about, services hub, signs article) and those FAQs render on ~13 pages; every service page gained an insurance/new-patient sentence, a "Related reading" Education Center callout where a guide genuinely fits, and a neighborhoods line that ROTATES three of the seven area pages per service so links distribute instead of repeating; the Reviews teaser links to the full reviews page; area pages cross-link the areas index and About; the doctor bio links CE courses and About; CE index links partnership philosophy; articles link About and Contact. Cracked-tooth related-services now includes Botox for bruxism (grinding cracks teeth).

Also verified: education articles have auto-generated heading IDs (deep-linkable anchors), service pages have a full anchor TOC, and no standalone "click here/learn more" anchor text exists anywhere. FAQ links are stripped from FAQPage JSON-LD automatically, so schema stays clean. Legal pages are intentionally footer-only.

---

## Contact redesign + imagery-everywhere pass — July 14, 2026

**Contact page rebuilt.** The three cramped cards (which clipped the email address) are replaced by full-width "Get in touch" rows — icon chip, label, value, helper line, chevron — so no value can ever clip; email is sized to fit one line on phones. Address card gains a proper Get Directions button, the map+emergency column is sticky, and an office photo strip sits above the FAQ. Verified at 390px and 1440px; axe clean.

**Office photography spread site-wide** via a new OfficePeek component (three-photo strip + "Tour the office" link) and PageHero images on previously text-only heroes: Financial (front office), New Patients (welcome board + "The space you'll walk into" strip), For Doctors (Dr. Leong at the microscope — appropriate for the professional audience), Partnership (operatory), Reviews (reception lounge), plus strips on About and Contact.

**San Francisco scenery** now appears beyond the home page: Painted Ladies band on About ("Rooted here, through and through"), Golden Gate band on the Services index ("Specialist care, minutes from home"), Lombard Street band on Reviews ("San Franciscans trust us with their smiles"), cable car on the Education Center hero. All duotone-navy, consistent with the home fog band; all gain the slow Ken Burns drift (motion-gated). Deliberately NOT used on individual neighborhood pages — Coit Tower and cable cars aren't west-side landmarks and the doctor would rightly flag geographically misleading imagery.

imageMap gained gallery-46/47 with honest alt text.

---

## Caption removal — July 14, 2026

Visible captions removed from the service-page office photos (they were reading the alt text aloud, e.g. "The operating microscope beside an orchid in the window light — inside our Ocean Avenue office"). Descriptive text now lives only in the alt attribute where it belongs for screen readers. Decorative photos site-wide carry no visible captions; the only figcaption remaining is the testimonial attribution block in Reviews, which is intentional.

---

## Header overflow fix — July 14, 2026

Pete reported the desktop menu stacking on the deployed site. Reproduced: at 1280px the header had only 93px of slack (any browser zoom, OS font metrics, or scrollbar width tipped labels into wrapping), and with the accessibility text-size setting at Large/X-Large the nav stacked at every laptop width — that setting persists per device via localStorage, so it follows you between visits until Reset.

Fixes:
- **Phone number moved into the utility bar** (visible from 1024px up, white + icon, ahead of Patient Portal) and removed from the main bar entirely — the main bar now only carries logo, nav, and the Book button.
- **whitespace-nowrap** on all nav labels — they can never wrap internally again.
- Nav link padding tightens slightly at xl and relaxes at 2xl; slack at 1280px now 141px (was 93), 221px at 1440.
- **Big-text mode safeguard:** when the accessibility text-size is above Default, the header switches to the menu button at every width (`data-a11y-zoom` attribute + CSS override) — verified the drawer opens correctly at desktop sizes.

If the menu still looks stacked after redeploying: open the accessibility tools (blue button, bottom right) and hit "Reset all" — a saved Large/X-Large text setting from earlier testing persists on that device.
