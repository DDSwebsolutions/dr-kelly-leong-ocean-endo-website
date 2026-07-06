/**
 * privacy-zones.ts — classifies each path as a PHI zone or a marketing zone.
 *
 * WHY: even though a 2024 federal ruling narrowed the HIPAA "public page = PHI"
 * theory, California CIPA/CMIA pixel litigation over health sites is active and
 * expensive. Gating behavioral tags off any page that reveals a visitor's
 * specific health interest or booking intent is cheap, defensible risk control.
 *
 * NOTE: this Ocean Endodontics build ships with ZERO third-party analytics or
 * advertising tags by design (no Google Analytics, no ad pixels, no behavioral
 * tracking). This classifier is retained so that if any measurement is ever
 * added, it is structurally impossible to load it on a PHI-zone page.
 */

const PHI_PREFIXES = [
  '/services',
  '/symptoms',
  '/book-appointment',
  '/contact',
  '/new-patient',
  '/thank-you',
];

const PHI_EXACT = new Set(['/book-appointment', '/contact', '/new-patient', '/thank-you']);

/**
 * Returns true when the page reveals a visitor's specific health interest or
 * intent and therefore must never load behavioral tags.
 * Includes: every service page, symptom/cost pages, booking/contact/new-patient/
 * thank-you, and the city-by-service matrix (3+ segments under a service root).
 */
export function isPhiZone(pathname: string): boolean {
  const path = normalize(pathname);

  if (PHI_EXACT.has(path)) return true;
  if (PHI_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) return true;

  // City-by-service matrix pages (3+ path segments) reveal a condition + place.
  const segments = path.split('/').filter(Boolean);
  if (segments[0] === 'areas-we-serve' && segments.length >= 3) return true;

  return false;
}

/** Marketing zone = brand/informational pages (home, about, reviews, legal…). */
export function isMarketingZone(pathname: string): boolean {
  return !isPhiZone(pathname);
}

function normalize(pathname: string): string {
  let p = pathname || '/';
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p.toLowerCase();
}
