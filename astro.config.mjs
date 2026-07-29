import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// Static site — Cloudflare Pages just serves the built `dist` folder.
// No adapter needed unless you later add server-rendered routes/forms.
export default defineConfig({
  output: 'static',

  // TODO: replace with your real domain once you have one
  site: 'https://example.com',

  integrations: [tailwind()]
});