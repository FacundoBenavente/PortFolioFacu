# Guía del portfolio — Facundo

Esta es la guía para modificar el portfolio, pensada para una persona o para una IA. Explica qué es el sitio, de dónde sale el diseño, cómo está organizado, qué reglas seguir y cómo hacer los cambios más comunes.

> **Si sos una IA:** leé esta guía completa antes de editar. Respetá las reglas de la sección 4 y verificá cada cambio con la checklist de la sección 10. Si un pedido contradice esta guía, avisá antes de hacerlo. Si cambiás algo que esta guía describe, actualizá también esta guía.

---

## 1. Resumen rápido

- Sitio **estático de 6 páginas** hecho con **Astro 5 + Tailwind CSS 4**, con estética de consola o terminal en modo oscuro.
- Replica 6 frames de Figma (sección 2). Están todos implementados.
- Los datos personales están en `src/data/site.ts` y los proyectos en `src/data/proyectos.ts`. El resto del contenido está escrito dentro de cada componente o página.
- La única parte con JavaScript en el navegador es la entrada: con "y" o Enter se pasa al portfolio.

```bash
npm install        # instalar dependencias (una vez)
npm run dev        # servidor local (4321, o 4322 si el 4321 está ocupado)
npm run build      # genera el sitio en dist/ — usalo para verificar
npm run preview    # sirve dist/ localmente
```

| Ruta | Página | Archivo |
|---|---|---|
| `/` | Entrada — consola de bienvenida | `src/pages/index.astro` |
| `/portfolio` | Portfolio principal | `src/pages/portfolio.astro` |
| `/proyectos/proyecto-01` | **Futbots** — web full-stack para partidos de autos robot (2024) | `src/pages/proyectos/proyecto-01.astro` |
| `/proyectos/proyecto-02` | **Sea of the Lost** — videojuego pirata en Unity, con música propia (2025) | `src/pages/proyectos/proyecto-02.astro` |
| `/proyectos/proyecto-03` | **TCGCheck** — back-end e IA, proyecto escolar (2026). Todavía sin capturas ni documentación | `src/pages/proyectos/proyecto-03.astro` |
| `/proyectos/proyecto-04` | **GuIA** — asistente de organización por roles y tareas, hackathon escolar (2026) | `src/pages/proyectos/proyecto-04.astro` |

---

## 2. Diseño de origen (Figma)

| Dato | Valor |
|---|---|
| Archivo | `Landing Page - TCGCheck` (file key `wUNcTIjnvfx73XhnEAujgI`) |
| Página | `TP 5 - MoodBoard` (node `70:2`) |
| Link base | https://www.figma.com/design/wUNcTIjnvfx73XhnEAujgI/Landing-Page---TCGCheck |
| Exportaciones locales | `Diseños/` (SVG + PDF de los 6 frames, exportados el 2026-11-26) |

| Frame | Node | Tamaño | Fuente usada |
|---|---|---|---|
| Entrada — Consola de bienvenida | `124:6385` | 1440 × 1000 | MCP de Figma |
| Portfolio principal — Facundo | `124:6436` | 1440 × 3822 | MCP + exportación |
| Proyecto personal 01 — Detalle | `124:6702` | 1440 × 2937 | MCP + exportación (sección "Lectura") |
| Proyecto personal 02 — Detalle | `124:6876` | 1440 × 3113 | exportación |
| Proyecto personal 03 — Detalle (TCGCheck) | `212:44` | 1440 × 2210 | exportación |
| Proyecto personal 04 — Detalle (GuIA) | `124:7005` | 1440 × 3113 | exportación |

### Secciones del portfolio principal

| # | Sección (Figma) | Node | Componente | Ancla | Fondo |
|---|---|---|---|---|---|
| — | Presentación (nav + apertura + intereses) | `124:6437` | `home/Presentacion.astro` | `#top` | `night` |
| 01 | Acerca de mí | `124:6490` | `home/AcercaDeMi.astro` | `#acerca` | `night` |
| 02 | Proyectos destacados | `124:6515` | `home/Proyectos.astro` | `#proyectos` | `surface` |
| 03 | Capacidades | `124:6640` | `home/Capacidades.astro` | — | `night` |
| 04 | Formación | `124:6661` | `home/Formacion.astro` | `#formacion` | `surface` |
| 05 | Contacto | `124:6685` | `home/Contacto.astro` | `#contacto` | `night` |
| — | Pie de página | `124:6698` | `Footer.astro` | — | `night` |

### Secciones de las páginas de proyecto

Las cuatro páginas comparten la navegación (`DetalleNav`), la ruta (`Ruta`), la barra "LEER PROYECTO" (`IndiceLectura`), "Seguí explorando" (`OtrosProyectos`) y el pie (`Footer`). El resto cambia en cada caso:

| Proyecto | Secciones propias (en orden) |
|---|---|
| 01 Futbots | Cabecera con nota "// antes de empezar" y datos en fila · captura grande de la web · **Lectura**: punto de partida (3 columnas), proceso (3 tarjetas), solución + aprendizajes (2 columnas) |
| 02 Sea of the Lost | Cabecera con nota "VIDEOJUEGO / 02" · galería: menú del juego + datos en tarjeta + logo · contexto + objetivo · tarjeta mint de solución (02) + aprendizajes (03). Sin sección de proceso: se sacó a pedido y el índice usa `omitir={['proceso']}` |
| 03 TCGCheck | Igual que 02, pero sin capturas: la galería usa `visuals/FichaConceptual` y el lugar del logo lo ocupa una nota con `{ }`. Contexto, objetivo, solución y aprendizajes son textos provisorios del diseño ("Espacio para…") y quedan marcados "por completar" |
| 04 GuIA | Cabecera junto a la captura de la app · datos en fila · planteamiento (3 columnas, con la pregunta del hackathon) · registro del proceso en tabla: PREGUNTA + ACCIONES (fondo `surface`) · solución con bloque de código · aprendizajes con `/* */` |

En Figma los proyectos se llaman "Proyecto personal 01/02/03/04" y llevaban ilustraciones conceptuales. En el sitio usan nombre e imágenes reales (TCGCheck, sin capturas todavía, usa el recurso conceptual): el título de la página muestra el nombre con un punto mint (como el logo "Facundo.").

Anclas comunes en las páginas de proyecto: `#contexto`, `#proceso`, `#solucion`, `#aprendizajes`.

**Figma es la referencia visual.** Si el diseño cambia, el sitio se actualiza para coincidir con Figma.

---

## 3. Cómo leer los diseños (MCP o exportación)

El MCP de Figma del plan Starter tiene un límite de llamadas, y se alcanzó durante la implementación. Los tres frames de detalle se terminaron a partir de exportaciones en `Diseños/`:

- **SVG** (las exportaciones del 2026-11-19 y del 2026-11-26 salieron con el texto como trazos): trae formas, colores, radios, bordes e imágenes embebidas con coordenadas exactas, pero los textos quedan como trazos.
- **PDF**: conserva los textos con su posición y tamaño. Las fuentes vienen como "Type3", así que no tienen nombre ni color: el texto monoespaciado se reconoce porque cada carácter mide 0.6 veces el tamaño de la fuente, y el color se toma del render.
- Escala 1:1: 1pt del PDF equivale a 1px de Figma.

Si se vuelve a exportar desde Figma, conviene **destildar "Outline text"** en el SVG: así los textos se leen directo del SVG.

---

## 4. Reglas

1. **Usá los tokens, no hex sueltos** (sección 6): `bg-surface`, `text-mist`, `border-edge`, etc. La única excepción son los colores internos de las ilustraciones (`src/components/visuals/` y el diagrama de círculos del Proyecto 02).
2. **Cada tipo de texto tiene su fuente:** `font-display` (Space Grotesk) para titulares y cifras, `font-sans` (Inter) para el cuerpo y `font-mono` (IBM Plex Mono) para anotaciones, navegación, botones, etiquetas y todo lo que imite código.
3. **El tono es de código y consola:** anotaciones como `// comentario`, `01 / acerca_de_mí` y `proyecto_01`, etiquetas `<proyecto_01>`, símbolos `</>` y `/* */`. Mantené ese lenguaje en el contenido nuevo.
4. **El acento principal es `mint`.** `code-blue` y `code-violet` se usan solo como color de "sintaxis" (PREGUNTA, EVIDENCIA, `{ }`, el bloque de código).
5. **Cada sección numerada empieza con una anotación** `<p class="note text-mint">0X / nombre_en_snake_case</p>`. Si agregás o sacás una sección, renumerá.
6. **El contenedor de sección es `container-page`**: máximo 1440px, márgenes de 20, 40 y 72px. Las líneas de borde de la nav y del pie ocupan todo el ancho.
7. **El layout es mobile-first:** en pantallas chicas todo se apila y desde `lg:` (≥1024px) se usan las columnas de Figma. En las grillas de dos columnas con anchos de Figma se usa la proporción en `fr` (por ejemplo, `lg:grid-cols-[840fr_416fr]`), así escalan. **Ojo:** `[1fr_660fr]` deja la primera columna en 1/661 del ancho; poné siempre los dos números.
8. **Titulares con `clamp()`:** el último valor es el tamaño de Figma a 1440px. El tracking negativo de Figma se expresa en `em` (por ejemplo, −1.5px sobre 50px = `tracking-[-0.03em]`).
9. **El interlineado por defecto es `normal`**, como en Figma (incluidos `text-xs` a `text-xl`). El cuerpo usa `body-copy` (1.65) y las anotaciones usan `note` (1.5).
10. **Los datos personales van en `src/data/site.ts`**; nunca escribas el nombre a mano en un componente.
11. **Accesibilidad:** las ilustraciones llevan `role="img"` y `aria-label`, o `aria-hidden` si son decorativas. Hay un solo `<h1>` por página. Las animaciones van con `motion-safe:`.
12. **No agregues dependencias ni JavaScript de cliente sin necesidad.**
13. **Astro está fijado en la versión 5** (sección 11).

---

## 5. Estructura

```
PortFolioFacu/
├── PORTFOLIO.md / AGENTS.md
├── Diseños/                    # exportaciones SVG + PDF de Figma y capturas originales de los proyectos
├── public/images/              # imágenes que usa el sitio (sección 7)
└── src/
    ├── data/
    │   ├── site.ts             # nombre, slug, email, roles
    │   └── proyectos.ts        # los 4 proyectos: título, textos, imagen (opcional), datos, href
    ├── layouts/Layout.astro    # <head>, título, descripción
    ├── styles/global.css       # Tailwind + tokens + utilidades
    ├── pages/
    │   ├── index.astro         # entrada (consola)
    │   ├── portfolio.astro     # portfolio principal
    │   └── proyectos/proyecto-01|02|03|04.astro
    └── components/
        ├── Logo, Nav, Footer, Pill
        ├── ProyectoImagen.astro  # imagen de proyecto con borde redondeado (props: imagen, aspect?, eager?)
        ├── home/               # secciones del portfolio principal
        ├── proyecto/           # piezas de las páginas de detalle (tabla de abajo)
        └── visuals/            # Emblema y GlitchName (portada); NucleoCodigo y FichaConceptual (proyectos sin captura)
```

Componentes de `proyecto/`:

| Componente | Props | Qué es |
|---|---|---|
| `DetalleNav` | — | nav con "← Portfolio · Proyectos · Acerca de mí · Hablemos" |
| `Ruta` | `numero` | "← Portfolio / Proyectos / 0X" + "ARCHIVO PERSONAL / 0X" |
| `Titulo` | `numero, titulo, subtitulo, estado, size? ('xl' 88px / 'lg' 74px), anotacion?` | `<proyecto_0X>` + pill (rol · año) + nombre del proyecto + bajada |
| `Datos` | `datos, variant? ('fila' / 'tarjeta')` | rol, herramientas y contexto |
| `Leyenda` | `texto` | pie de imagen "↳ …" |
| `IndiceLectura` | `numero`, `omitir?` (ids de sección) | barra "LEER PROYECTO_0X ↓ · 01. Contexto …"; renumera sola si se omiten secciones |
| `Columna` | `etiqueta, titulo, texto, estado?, id?` | anotación + título de 34px + texto + "[ Contenido por completar ]" |
| `OtrosProyectos` | `actual` | "Seguí explorando el portfolio" con los otros tres proyectos |

---

## 6. Tokens de diseño

Están en `@theme`, dentro de `src/styles/global.css`.

| Token | Hex | Uso |
|---|---|---|
| `night` | `#0c1018` | fondo principal |
| `surface` | `#121924` | secciones alternadas, consola, tarjetas |
| `raised` | `#192332` | pills, barra de la consola, cajas |
| `panel` | `#162332` | caja del bloque de código (solución, P04) |
| `edge` | `#2a3544` | bordes y separadores |
| `snow` | `#f1f3ef` | texto principal |
| `mist` | `#a7b2c2` | texto secundario |
| `slate` | `#7e8da3` | texto terciario y anotaciones grises |
| `mint` | `#8cf0cb` | acento |
| `mint-ink` | `#091211` | texto sobre fondo mint |
| `mint-muted` | `#21483d` | texto secundario sobre fondo mint |
| `mint-deep` | `#152f2c` | fondo de la pill mint y del identificador de proyecto |
| `code-blue` | `#81d7f7` | sintaxis: `{ }`, "PREGUNTA", "pregunta" |
| `code-violet` | `#baa3f6` | sintaxis: líneas de código, "ACCIONES" |
| `glitch` | `#f48d9d` | copia rosa del efecto glitch del nombre |

| Nombre | Qué es |
|---|---|
| `font-display` / `font-sans` / `font-mono` | Space Grotesk / Inter / IBM Plex Mono |
| `shadow-float` | sombra de la consola y de los paneles de las ilustraciones |
| `animate-blink` | cursores parpadeantes |
| `container-page` | contenedor de sección |
| `note` | anotación mono de 12px, interlineado 1.5 |
| `body-copy` | texto Inter `mist`, interlineado 1.65 |
| `canvas` / `canvas-inner` | sistema de escalado de las ilustraciones (sección 9) |

---

## 7. Imágenes y recursos

Están en `public/images/`. Los originales de las capturas están en `Diseños/`.

| Archivo | Uso |
|---|---|
| `consola-indicadores.svg` | 3 puntos de la ventana de la consola (entrada, exportado de Figma) |
| `emblema-*.svg` | campos, órbita y punto del emblema de la portada (exportados de Figma) |
| `futbots.png` (1366 × 641) | pantalla de inicio de Futbots: tarjeta y página 01 |
| `sotl-menu.png` (1300 × 731) | menú principal de Sea of the Lost: tarjeta y página 02 |
| `sotl-logo.png` (856 × 858) | logo de Sea of the Lost: página 02, junto a los datos |
| `guia.png` (1366 × 644) | pantalla de inicio de GuIA: tarjeta y página 04 |

La imagen principal de cada proyecto se define en `src/data/proyectos.ts` (`imagen: { src, alt, ancho, alto }`), y la usan la tarjeta y la página. En las tarjetas se recorta a 306 × 235 (`object-cover`, centrado); en las páginas se muestra entera. Si un proyecto no tiene `imagen`, la tarjeta muestra `visuals/NucleoCodigo` (el recurso conceptual del diseño).

Las ilustraciones conceptuales del diseño original (interfaz con retícula, render 3D, núcleo de código) se reemplazaron por estas capturas y se borraron del proyecto. Siguen disponibles en Figma y en `Diseños/`.

---

## 8. Recetas

### 8.1 Cambiar nombre, email o roles
Editá `src/data/site.ts`. El nombre se actualiza en el logo, la consola, el titular con glitch, el pie y el título de la pestaña. Con el email real, poné `emailEsEjemplo: false` para ocultar "Contacto de ejemplo" y "Reemplazar por tu correo…".

### 8.2 Completar datos de un proyecto
- En `src/data/proyectos.ts`: `titulo`, `resumen` (tarjeta), `subtitulo` (página), `herramientas` (pill de la tarjeta), `estado` (rol · año), `imagen` y `datos` (rol, herramientas y contexto, que se ven en la cabecera de la página).
- Textos de lectura (contexto, objetivo, proceso, solución, aprendizajes): en `proyecto-0X.astro`, props de cada `<Columna>` y arrays `pasos` / `registros`. Cuando un texto ya es real, poné `estado=""` para quitar "[ Contenido por completar ]".
- **No inventes contenido:** lo que el autor no contó queda como "por completar". Los textos ya completados salen de lo que Facundo describió de cada proyecto (sección 12).

### 8.3 Cambiar textos de la página principal
Cada sección está en `src/components/home/`. Las listas (intereses, cifras, capacidades, hitos de formación) son arrays al principio de cada archivo.

### 8.4 Agregar redes al contacto
En `home/Contacto.astro`, debajo del email, agregá links `font-mono text-[13px] text-mist hover:text-mint`.

### 8.5 Cambiar o sumar imágenes de un proyecto
1. Copiá la imagen a `public/images/` (nombre en minúsculas, sin espacios).
2. Imagen principal: cambiá `imagen` del proyecto en `src/data/proyectos.ts` (con `alt` descriptivo y su `ancho` y `alto` reales). Se actualizan la tarjeta y la página.
3. Imágenes extra en una página (como el logo de Sea of the Lost): usá `<ProyectoImagen imagen={…} />` y, si hace falta, `<Leyenda texto="…" />`.

### 8.6 Agregar otro proyecto
1. Agregalo a `src/data/proyectos.ts` (ampliá el tipo `numero`). La tarjeta y "Seguí explorando" salen solas de ahí; la cantidad de la entrada usa `proyectos.length`.
2. Creá `src/pages/proyectos/proyecto-0X.astro` reutilizando los componentes de `proyecto/`.
3. Revisá los textos fijos: "Cuatro proyectos…" y "[ 01 — 04 ]" (`home/Proyectos.astro`), la cifra "4" de `home/AcercaDeMi.astro`, y las columnas de las grillas (`xl:grid-cols-4` en la principal, `md:grid-cols-3` en `OtrosProyectos`).

### 8.7 Cambiar colores o fuentes
- Colores: cambialos en `@theme` y actualizá la tabla de la sección 6.
- Fuentes: instalá `@fontsource(-variable)/<fuente>`, importala en `global.css` y cambiá la variable `--font-*`.

---

## 9. Cómo funcionan las ilustraciones

Las ilustraciones (`visuals/` y el diagrama de círculos del Proyecto 02) están **dibujadas con HTML y CSS**, con las medidas de Figma, y escalan con el ancho del contenedor:

- El contenedor lleva la clase `canvas` y `style="--canvas: <ancho en Figma>"`.
- Adentro, `canvas-inner` define `1em = 1px del diseño` (`font-size: calc(100cqw / var(--canvas))`).
- Todas las medidas van en `em` con el valor de Figma: `left-[66.56em]`, `w-[282.88em]`, etc.
- **Trampa:** en un elemento que cambia su propio tamaño de fuente (`text-[8em]`), sus `top`, `left` o `padding` en `em` se miden sobre **esa** fuente. Por eso un texto posicionado se escribe así: `<p class="absolute top-[281.6em] left-[16.64em]"><span class="text-[8em]">…</span></p>`.

| Componente | Lienzo | Dónde |
|---|---|---|
| `Emblema` | 468 × 484 | portada del portfolio |
| `GlitchName` | en `em` del tamaño del texto (112px) | nombre de la portada; con `dosLineas` pone el apellido abajo |
| `NucleoCodigo` | SVG 306 × 235 (`viewBox`) | tarjeta de un proyecto sin `imagen` (TCGCheck) |
| `FichaConceptual` | HTML; 840 × 472 desde `md:` | galería de la página de TCGCheck |

---

## 10. Checklist de verificación

1. `npm run build` termina sin errores.
2. Revisá cada página a **1440px** (compará con Figma o con el PDF de `Diseños/`), a **~768px** y a **~375px**.
3. No hay scroll horizontal en celular.
4. Funcionan los links de la navegación, los botones, la barra "LEER PROYECTO", los accesos a proyectos y "Volver al índice", y en la entrada, "y"/Enter y el clic en "❯ y".
5. Ningún link lleva a una página inexistente.
6. No quedaron hex sueltos fuera de las ilustraciones.
7. Si cambiaste estructura, tokens o recetas, actualizaste esta guía.

Verificación realizada (2026-11-19):
- A 1440px, todas las secciones de las 5 páginas quedan a 7px o menos de Figma: P01 2563 contra 2561, P02 con diferencias de 4px o menos, P03 con diferencias de 7px o menos.
- No hay desbordes a 375px.
- El build no da errores.

---

## 11. Notas técnicas

- **Node y Astro:** Astro 7 exige Node ≥ 22.23.4 y la máquina original tiene 22.17, por eso Astro está en 5.18. Para actualizar, subí Node y después corré `npm install astro@latest`.
- **Astro 5 no tiene `astro dev --background`.** Si el 4321 está ocupado (por ejemplo, con el portfolio de Gonzalo), `npm run dev` usa el 4322.
- **Slots de componentes:** en `Titulo`, el contenido pasado por `<slot />` se perdía en el build, así que la línea extra se pasa como prop (`anotacion`). Para textos opcionales, preferí props.
- **Navegador headless:** Chrome y Edge headless no bajan de ~500px de ancho. Para probar celular, usá un iframe de 375px o las DevTools.
- **Nombre en el diseño:** Figma usa "Tu nombre" como texto de ejemplo, y en el sitio se reemplazó por `site.nombre` ("Facundo"). El email sigue siendo el de ejemplo.

---

## 12. Información de los proyectos y pendientes

Lo que Facundo contó de cada proyecto, que es la base de los textos ya completados:

- **Futbots (2024):** autos robot que juegan al fútbol. La web permite que los usuarios se logueen para cargar datos de los partidos, mostrar los goles y armar torneos. Rol: full-stack. HTML, CSS, JS y Node.js; los datos se guardan en JSON. Proceso (exploración, decisiones, desarrollo) y aprendizaje cargados desde Figma (2026-11-26).
- **Sea of the Lost (2025):** juego de un barco pirata hecho en Unity. Rol: desarrollo en Unity y composición de la música (Bandlab). Equipo de 4: 2 en Unity y 2 en arte 3D; alcance académico. Contexto, objetivo, solución y aprendizajes cargados desde Figma.
- **TCGCheck (2026):** proyecto escolar. Rol: back-end e IA (desarrollo del back-end y entrenamiento de las IAs). Node.js, Supabase DB, Python, TCGdex API; PyTorch y TensorFlow.
- **GuIA (2026):** proyecto para un hackathon escolar de 2 días (3 desarrolladores y 3 diseñadoras). Los alumnos eligen un rol (TIMI, que es UX/UI, Front-End, Back-End o Hardware) y se organizan con tareas. Ganó el premio a la ejecución. Rol: back-end, con Node.js y Supabase (sentencias en SP y hosteo). Planteamiento, registro del proceso y aprendizaje cargados desde Figma.

Pendientes:

- [ ] Email real y perfiles (`site.ts`, receta 8.1).
- [ ] TCGCheck: capturas (imagen principal → `imagen` en `proyectos.ts`), resumen, bajada, contexto, objetivo, solución y aprendizajes.
- [ ] Confirmar el nombre del proyecto 01: Figma dice "Futbot" y el sitio "Futbots".
- [ ] Formación: nombres de cursos, instituciones y período.
