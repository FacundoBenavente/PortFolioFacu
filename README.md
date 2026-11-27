# Portfolio — Facundo Benavente

Portfolio personal: informática y desarrollo Back-end. Sitio estático hecho con **Astro 5** y **Tailwind CSS 4**, con estética de consola.

Páginas: entrada tipo terminal (`/`), portfolio principal (`/portfolio`) y el detalle de cuatro proyectos: Futbot, Sea of the Lost, TCGCheck y GuIA (`/proyectos/proyecto-01` … `04`).

## Comandos

Requiere Node 18.20.8 o superior (recomendado: 22).

| Comando           | Qué hace                                      |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala las dependencias                      |
| `npm run dev`     | Servidor local en `localhost:4321`            |
| `npm run build`   | Genera el sitio estático en `dist/`           |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar |

## Publicar

Se publica en **Vercel**: en [vercel.com/new](https://vercel.com/new), importá este repositorio de GitHub. Vercel detecta Astro solo (comando `npm run build`, carpeta `dist`), así que no hace falta configurar nada. Después, cada push a `main` publica una versión nueva, y cada push a otra rama genera una vista previa con su propio link.

Variables opcionales del build:

- `SITE_URL`: dominio público para la URL canónica. En Vercel no hace falta: se toma del dominio de producción del proyecto. Sirve si conectás un dominio propio y querés forzarlo.
- `BASE_PATH`: solo si el sitio se publica en una subcarpeta (p. ej. GitHub Pages de un repo: `/PortFolioFacu`). En Vercel queda vacía.

## Para editar

La guía completa (diseño en Figma, reglas, tokens, componentes y recetas) está en [PORTFOLIO.md](./PORTFOLIO.md). Los datos personales están en `src/data/site.ts` y los proyectos en `src/data/proyectos.ts`.
