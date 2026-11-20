# Instrucciones para agentes de IA

Antes de modificar este proyecto, leé **[PORTFOLIO.md](./PORTFOLIO.md)**. Ahí están el diseño de origen en Figma (con los node ids), lo que falta construir, las reglas, los tokens, las recetas y la checklist de verificación.

Resumen mínimo:

- Astro 5 + Tailwind CSS 4, 3 páginas: `/` (consola de entrada), `/portfolio`, `/proyectos/proyecto-01`.
- **Pendiente:** la sección "Lectura del proyecto" del Proyecto 01 y las páginas de los Proyectos 02 y 03. Leelas de Figma, no las inventes.
- Datos personales en `src/data/site.ts`; proyectos en `src/data/proyectos.ts` (sin `href` = sin página todavía).
- Usá los tokens de `src/styles/global.css` (`bg-surface`, `text-mist`, `text-mint`…), sin hex sueltos fuera de `src/components/visuals/`.
- Verificá con `npm run build` y revisando a 1440px y a 375px.
- No actualices Astro a v7 sin actualizar Node (requiere ≥ 22.23.4). Astro 5 no tiene `astro dev --background`.
- Si cambiás estructura, tokens o recetas, actualizá `PORTFOLIO.md`.

Documentación de Astro: https://docs.astro.build
