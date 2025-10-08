import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://fd-construction.com',
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
