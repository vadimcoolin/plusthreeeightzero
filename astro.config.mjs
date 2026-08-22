// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/plusthreeeightzero/',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'ua'],
    defaultLocale: 'en',
    prefixDefaultLocale: true,
  },
});
