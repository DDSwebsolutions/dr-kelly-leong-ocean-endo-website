// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

const SITE = 'https://oceanendosf.com';

// Section-weighted sitemap priorities. Utility/legal routes are filtered or
// weighted low so crawlers spend budget on money pages.
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: { assets: '_astro', inlineStylesheets: 'auto' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) =>
        !/(\/thank-you\/?$|\/404\/?$|\/do-not-sell-my-personal-information\/?$|\/staff-resources\/?$)/.test(page),
      serialize(item) {
        const url = item.url;
        let priority = 0.6;
        let changefreq = /** @type {any} */ ('monthly');
        if (url === `${SITE}/` || url === `${SITE}`) {
          priority = 1.0;
          changefreq = 'weekly';
        } else if (/\/services\/[^/]+\/?$/.test(url)) {
          priority = 0.9;
        } else if (url === `${SITE}/services/` || /\/emergency|\/book-appointment|\/contact/.test(url)) {
          priority = 0.85;
        } else if (/\/areas-we-serve\/[^/]+\/?$/.test(url)) {
          priority = 0.75;
        } else if (/\/education\//.test(url)) {
          priority = 0.65;
        } else if (/(privacy-policy|terms-of-use|accessibility-statement)/.test(url)) {
          priority = 0.2;
        }
        return { ...item, priority, changefreq, lastmod: new Date().toISOString() };
      },
    }),
  ],
  vite: {
    plugins: [tailwind()],
    build: { cssMinify: 'lightningcss' },
  },
});
