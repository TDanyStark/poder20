// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/poder20',
  outDir: 'apps/abbott/poder20',
  integrations: [tailwind(), react()]
});