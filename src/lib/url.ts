/**
 * Arma una ruta interna respetando la base del sitio (`base` en astro.config.mjs).
 * En Vercel o Netlify la base es "/" y `url('/portfolio')` da "/portfolio";
 * en GitHub Pages es "/PortFolioFacu" y da "/PortFolioFacu/portfolio".
 * Usalo en todo link o imagen interna: `href={url('/portfolio')}`, `src={url('/images/x.png')}`.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (ruta: string) => `${base}${ruta.startsWith('/') ? ruta : `/${ruta}`}`;
