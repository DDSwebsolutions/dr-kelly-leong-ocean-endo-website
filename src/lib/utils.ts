/**
 * utils.ts — small, dependency-free helpers.
 * The key one is the RichText pipeline: data-driven prose may contain
 * [label](/path) tokens for internal linking. We render those to <a> for
 * display, but STRIP them to plain text before any string feeds JSON-LD or a
 * meta description, so markup never leaks into structured data.
 */

import { site } from '@data/site';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Escape text for safe HTML insertion. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Remove [label](href) tokens, leaving just the label. Schema/meta-safe. */
export function stripLinks(input: string): string {
  return input.replace(LINK_RE, '$1');
}

/** Split prose into paragraphs on blank lines. */
export function toParagraphs(input: string): string[] {
  return input
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/**
 * Render a single block of inline prose to safe HTML: escapes everything,
 * then upgrades [label](href) tokens to anchors. External links get
 * rel + target; internal links stay in-tab.
 */
export function renderInline(input: string): string {
  // Escape first so user text can't inject markup, then re-insert our links.
  const escaped = escapeHtml(input);
  // Note: escapeHtml turned ] ( ) into themselves (safe), so LINK_RE still matches.
  return escaped.replace(LINK_RE, (_m, label: string, href: string) => {
    const isExternal = /^https?:\/\//i.test(href);
    const rel = isExternal ? ' rel="noopener noreferrer" target="_blank"' : '';
    return `<a href="${href}"${rel}>${label}</a>`;
  });
}

/** Render multi-paragraph prose to an array of paragraph HTML strings. */
export function renderParagraphs(input: string): string[] {
  return toParagraphs(input).map(renderInline);
}

/** Absolute URL from a site-root path. */
export function absoluteUrl(path = '/'): string {
  const base = site.url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

/** Human day/hours label, e.g. "8:30 AM – 5:00 PM". */
export function formatHour(t: string): string {
  const [hStr, mStr] = t.split(':');
  const h = Number(hStr);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mStr} ${suffix}`;
}

/** Estimated reading time from a word count. */
export function readingTime(words: number): string {
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}
