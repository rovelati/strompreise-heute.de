import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { canonicalUrl, lastmodForPath } from './src/lib/freshness.mjs';

// Canonical host is the apex. www redirects to it; the sitemap lists only this origin.
export default defineConfig({
  site: 'https://strompreise-heute.de',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/404'),
      serialize(item) {
        const url = canonicalUrl(item.url);
        return {
          url,
          lastmod: lastmodForPath(new URL(url).pathname),
        };
      },
    })
  ]
});
