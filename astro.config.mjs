import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mariorey.github.io',
  base: '/hanyu-ly',
  integrations: [tailwind()],
});
