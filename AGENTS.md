# Instrucciones para agentes de IA

Antes de modificar este proyecto, leé **[PORTFOLIO.md](./PORTFOLIO.md)**. Ahí están el diseño de origen en Figma (con los node ids y las exportaciones de `Diseños/`), las reglas, los tokens, los componentes, las recetas y la checklist de verificación.

Resumen mínimo:

- Astro 5 + Tailwind CSS 4, 5 páginas: `/` (consola de entrada), `/portfolio`, `/proyectos/proyecto-01|02|03`.
- Datos personales en `src/data/site.ts`; proyectos en `src/data/proyectos.ts`.
- Las páginas de proyecto usan los componentes de `src/components/proyecto/` (Ruta, Titulo, Datos, IndiceLectura, Columna, OtrosProyectos…).
- Usá los tokens de `src/styles/global.css` (`bg-surface`, `text-mist`, `text-mint`…), sin hex sueltos fuera de las ilustraciones.
- Verificá con `npm run build` y revisando a 1440px y a 375px.
- No actualices Astro a v7 sin actualizar Node (requiere ≥ 22.23.4). Astro 5 no tiene `astro dev --background`.
- Si cambiás estructura, tokens o recetas, actualizá `PORTFOLIO.md`.

Documentación de Astro: https://docs.astro.build
