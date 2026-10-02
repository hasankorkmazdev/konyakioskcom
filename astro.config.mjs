import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { nedirPages } from './src/data/nedir';
import { posts } from './src/data/posts';

// Sitemap'e yalnızca gerçek tarihi bilinen sayfalar için lastmod yazılır (yapay "bugün" tarihi verilmez).
const lastmods = new Map([
  ...nedirPages.map((n) => [`/${n.slug}/`, n.modified]),
  ...posts.map((p) => [`/blog/${p.slug}/`, p.date]),
]);

export default defineConfig({
  site: 'https://konyakiosk.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = lastmods.get(new URL(item.url).pathname);
        if (lastmod) item.lastmod = new Date(lastmod).toISOString();
        return item;
      },
    }),
  ],
});
