// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Dominio público, para la URL canónica. En Vercel sale solo de VERCEL_PROJECT_PRODUCTION_URL
// (el dominio de producción del proyecto); SITE_URL lo pisa si hace falta (p. ej. un dominio propio).
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercel ? `https://${vercel}` : undefined);

// https://astro.build/config
export default defineConfig({
  site,
  // Subcarpeta donde vive el sitio. En Vercel es "/"; solo cambia si se publica en una
  // subcarpeta (p. ej. GitHub Pages de un repo: BASE_PATH=/PortFolioFacu).
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
