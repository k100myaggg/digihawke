import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://digihawke.com',

  vite: {
    plugins: [tailwind()],
  },

  integrations: [sitemap()],
});