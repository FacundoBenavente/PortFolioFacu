# Continuar el portfolio de Facundo (archivo autocontenido)

Este archivo trae **todo lo necesario para seguir trabajando el portfolio desde cualquier lugar**: instrucciones para la IA, contexto, guía de diseño y el **código fuente completo** de cada archivo. No hace falta acceso a la computadora original ni al repositorio.

Generado el 2026-11-19, con el estado más reciente del proyecto (incluye cambios que todavía no estaban en GitHub).

---

## 0. Cómo usar este archivo

### Con Claude Desktop (o claude.ai)

1. Abrí una conversación nueva y **adjuntá este archivo**.
2. Pegá este mensaje y después escribí lo que quieras cambiar:

> Adjunto `CONTINUAR.md`, que tiene el contexto completo y el código fuente de mi portfolio (Astro 5 + Tailwind 4). Leelo entero antes de responder. Seguí las reglas de la sección 1 de ese archivo. Lo que quiero cambiar es: …

3. La IA te va a responder con **los archivos modificados completos**, cada uno con su ruta. Copialos al proyecto (el reemplazo es archivo por archivo).
4. Al final, pedile que te dé también la **versión actualizada de las secciones de este archivo** que hayan cambiado, o directamente el `CONTINUAR.md` completo nuevo. Así la próxima vez seguís desde el estado correcto.

### Si tenés el proyecto en la otra computadora

Si clonaste el repositorio o tenés la carpeta, este archivo funciona igual como guía, y además podés usar Claude Code directamente sobre la carpeta.

---

## 1. Instrucciones para la IA

Sos el asistente que continúa este proyecto. Reglas:

1. **El código de la sección 6 es la fuente de verdad.** Antes de modificar un archivo, leé su versión en este documento. No asumas contenido que no esté acá.
2. **Respondé con archivos completos**, no con fragmentos sueltos. Indicá la ruta exacta de cada archivo (por ejemplo, `src/data/proyectos.ts`). Si un archivo se borra, decilo explícitamente.
3. **Respetá las reglas de diseño de la guía** (sección 5, apartado "Reglas"): tokens de color en lugar de hex sueltos, las tres tipografías, el tono de código y consola, mobile-first, `clamp()` en los titulares y el interlineado `normal`.
4. **No inventes contenido de los proyectos.** Lo que Facundo no contó queda como "[ Contenido por completar ]". La información real está en la sección 12 de la guía.
5. **Los datos centrales** (nombre, email, proyectos, imágenes) se editan en `src/data/site.ts` y `src/data/proyectos.ts`, no repetidos en los componentes.
6. **Astro 5, no 7:** la máquina original tiene Node 22.17 y Astro 7 requiere Node ≥ 22.23.4. No cambies versiones salvo que te lo pidan.
7. **No podés probar el sitio.** Revisá con cuidado la sintaxis Astro y Tailwind y avisá qué conviene verificar (por ejemplo, "corré `npm run build` y revisá la página a 375px").
8. Al terminar, ofrecé la **actualización de este `CONTINUAR.md`** con los archivos que cambiaron y, si corresponde, con la guía.
9. Escribí en español rioplatense, como el resto del sitio.

---

## 2. Qué es el proyecto (resumen)

- Portfolio personal de **Facundo**: sitio estático de 5 páginas, estética de consola o terminal en modo oscuro.
- Stack: **Astro 5.18 + Tailwind CSS 4** (con `@tailwindcss/vite`), fuentes autoalojadas (Space Grotesk, Inter, IBM Plex Mono). Sin frameworks de UI; el único JavaScript de cliente es la entrada tipo consola.
- Repositorio: `https://github.com/FacundoBenavente/PortFolioFacu` (puede estar atrasado respecto de este archivo).
- Diseño de origen: Figma `Landing Page - TCGCheck`, página `TP 5 - MoodBoard` (ver la guía).

| Ruta | Página |
|---|---|
| `/` | Entrada tipo consola ("Hola, mundo_"; "y" o Enter llevan al portfolio) |
| `/portfolio` | Portfolio principal |
| `/proyectos/proyecto-01` | **Futbots** (2024, full-stack) |
| `/proyectos/proyecto-02` | **Sea of the Lost** (2025, Unity + música) |
| `/proyectos/proyecto-03` | **GuIA** (2026, back-end, hackathon) |

---

## 3. Reconstruir el proyecto desde cero (si no tenés el repo)

```bash
# 1. Crear la carpeta y copiar cada archivo de la sección 6 en su ruta
#    (package.json, astro.config.mjs, tsconfig.json, src/**, public/**)

# 2. Instalar dependencias (usa las versiones de package.json)
npm install

# 3. Probar
npm run dev      # http://localhost:4321
npm run build    # verificar que compile
```

Requisitos: Node 22 (≥ 22.12) y npm.

### Imágenes que no están en este archivo (binarias)

Hay que copiarlas a `public/images/`. Están en el repo (si se subieron) o en la carpeta `Diseños/` del proyecto original, con otro nombre:

| Archivo en `public/images/` | Original en `Diseños/` | Tamaño |
|---|---|---|
| `futbots.png` | `Futbots.png` | 1366 × 641 |
| `sotl-menu.png` | `MenuSOTL.png` | 1300 × 731 |
| `sotl-logo.png` | `LogoSOTL.png` | 856 × 858 |
| `guia.png` | `GuIA.png` | 1366 × 644 |

También faltan `public/favicon.ico` y `public/favicon.svg`, que son los de la plantilla de Astro (`npm create astro@latest -- --template minimal` los genera). Si no los tenés, el sitio funciona igual.

Los SVG de `public/images/` (consola y emblema) sí están en la sección 6, porque son texto.

---

## 4. Estado actual y pendientes

Hecho:
- Las 5 páginas, implementadas y verificadas contra Figma a 1440px (diferencias de 7px o menos) y sin desbordes a 375px.
- Proyectos con nombre, imagen, rol, herramientas y año reales, y los textos que se pueden afirmar con lo que contó Facundo.

Pendiente (contenido que Facundo todavía no contó; **no inventar**):
- Email real y perfiles (`src/data/site.ts`; hoy es `hola@tunombre.example`, de ejemplo).
- Futbots: origen del proyecto, proceso (3 tarjetas) y aprendizajes.
- Sea of the Lost: contexto, objetivo, proceso (3 pasos) y aprendizajes.
- GuIA: herramientas usadas, registro del proceso (3 registros) y aprendizajes.
- Formación: nombres de cursos, instituciones y período.

---

## 5. Guía completa del proyecto

A continuación va el contenido íntegro de `PORTFOLIO.md`, la guía que vive en el repo: estructura, tokens, componentes, recetas, verificación y notas técnicas.

### Guía del portfolio — Facundo

Esta es la guía para modificar el portfolio, pensada para una persona o para una IA. Explica qué es el sitio, de dónde sale el diseño, cómo está organizado, qué reglas seguir y cómo hacer los cambios más comunes.

> **Si sos una IA:** leé esta guía completa antes de editar. Respetá las reglas de la sección 4 y verificá cada cambio con la checklist de la sección 10. Si un pedido contradice esta guía, avisá antes de hacerlo. Si cambiás algo que esta guía describe, actualizá también esta guía.

---

#### 1. Resumen rápido

- Sitio **estático de 5 páginas** hecho con **Astro 5 + Tailwind CSS 4**, con estética de consola o terminal en modo oscuro.
- Replica 5 frames de Figma (sección 2). Están todos implementados.
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
| `/proyectos/proyecto-03` | **GuIA** — asistente de organización por roles y tareas, hackathon escolar (2026) | `src/pages/proyectos/proyecto-03.astro` |

---

#### 2. Diseño de origen (Figma)

| Dato | Valor |
|---|---|
| Archivo | `Landing Page - TCGCheck` (file key `wUNcTIjnvfx73XhnEAujgI`) |
| Página | `TP 5 - MoodBoard` (node `70:2`) |
| Link base | https://www.figma.com/design/wUNcTIjnvfx73XhnEAujgI/Landing-Page---TCGCheck |
| Exportaciones locales | `Diseños/` (SVG + PDF de los tres frames de detalle) |

| Frame | Node | Tamaño | Fuente usada |
|---|---|---|---|
| Entrada — Consola de bienvenida | `124:6385` | 1440 × 1000 | MCP de Figma |
| Portfolio principal — Facundo | `124:6436` | 1440 × 3715 | MCP de Figma |
| Proyecto personal 01 — Detalle | `124:6702` | 1440 × 2937 | MCP + exportación (sección "Lectura") |
| Proyecto personal 02 — Detalle | `124:6876` | 1440 × 3113 | exportación |
| Proyecto personal 03 — Detalle | `124:7005` | 1440 × 3179 | exportación |

##### Secciones del portfolio principal

| # | Sección (Figma) | Node | Componente | Ancla | Fondo |
|---|---|---|---|---|---|
| — | Presentación (nav + apertura + intereses) | `124:6437` | `home/Presentacion.astro` | `#top` | `night` |
| 01 | Acerca de mí | `124:6490` | `home/AcercaDeMi.astro` | `#acerca` | `night` |
| 02 | Proyectos destacados | `124:6515` | `home/Proyectos.astro` | `#proyectos` | `surface` |
| 03 | Capacidades | `124:6640` | `home/Capacidades.astro` | — | `night` |
| 04 | Formación | `124:6661` | `home/Formacion.astro` | `#formacion` | `surface` |
| 05 | Contacto | `124:6685` | `home/Contacto.astro` | `#contacto` | `night` |
| — | Pie de página | `124:6698` | `Footer.astro` | — | `night` |

##### Secciones de las páginas de proyecto

Las tres páginas comparten la navegación (`DetalleNav`), la ruta (`Ruta`), la barra "LEER PROYECTO" (`IndiceLectura`), "Seguí explorando" (`OtrosProyectos`) y el pie (`Footer`). El resto cambia en cada caso:

| Proyecto | Secciones propias (en orden) |
|---|---|
| 01 Futbots | Cabecera con nota "// antes de empezar" y datos en fila · captura grande de la web · **Lectura**: punto de partida (3 columnas), proceso (3 tarjetas), solución + aprendizajes (2 columnas) |
| 02 Sea of the Lost | Cabecera con nota "VIDEOJUEGO / 02" · galería: menú del juego + datos en tarjeta + logo · contexto + objetivo · proceso con diagrama de círculos y 3 pasos (fondo `surface`) · tarjeta mint de solución + aprendizajes |
| 03 GuIA | Cabecera junto a la captura de la app · datos en fila · planteamiento (3 columnas) · registro del proceso en tabla (fondo `surface`) · solución con bloque de código · aprendizajes con `/* */` |

En Figma los proyectos se llaman "Proyecto personal 01/02/03" y llevaban ilustraciones conceptuales. En el sitio ya tienen nombre e imágenes reales: el título de la página muestra el nombre con un punto mint (como el logo "Facundo.").

Anclas comunes en las páginas de proyecto: `#contexto`, `#proceso`, `#solucion`, `#aprendizajes`.

**Figma es la referencia visual.** Si el diseño cambia, el sitio se actualiza para coincidir con Figma.

---

#### 3. Cómo leer los diseños (MCP o exportación)

El MCP de Figma del plan Starter tiene un límite de llamadas, y se alcanzó durante la implementación. Los tres frames de detalle se terminaron a partir de exportaciones en `Diseños/`:

- **SVG** (exportado con "Outline text"): trae formas, colores, radios, bordes e imágenes embebidas con coordenadas exactas, pero los textos quedan como trazos.
- **PDF**: conserva los textos con su posición y tamaño. Las fuentes vienen como "Type3", así que no tienen nombre ni color: el texto monoespaciado se reconoce porque cada carácter mide 0.6 veces el tamaño de la fuente, y el color se toma del render.
- Escala 1:1: 1pt del PDF equivale a 1px de Figma.

Si se vuelve a exportar desde Figma, conviene **destildar "Outline text"** en el SVG: así los textos se leen directo del SVG.

---

#### 4. Reglas

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

#### 5. Estructura

```
PortFolioFacu/
├── PORTFOLIO.md / AGENTS.md
├── Diseños/                    # exportaciones SVG + PDF de Figma y capturas originales de los proyectos
├── public/images/              # imágenes que usa el sitio (sección 7)
└── src/
    ├── data/
    │   ├── site.ts             # nombre, slug, email, roles
    │   └── proyectos.ts        # los 3 proyectos: título, textos, imagen, datos, href
    ├── layouts/Layout.astro    # <head>, título, descripción
    ├── styles/global.css       # Tailwind + tokens + utilidades
    ├── pages/
    │   ├── index.astro         # entrada (consola)
    │   ├── portfolio.astro     # portfolio principal
    │   └── proyectos/proyecto-01|02|03.astro
    └── components/
        ├── Logo, Nav, Footer, Pill
        ├── ProyectoImagen.astro  # imagen de proyecto con borde redondeado (props: imagen, aspect?, eager?)
        ├── home/               # secciones del portfolio principal
        ├── proyecto/           # piezas de las páginas de detalle (tabla de abajo)
        └── visuals/            # Emblema y GlitchName (portada), dibujados en código
```

Componentes de `proyecto/`:

| Componente | Props | Qué es |
|---|---|---|
| `DetalleNav` | — | nav con "← Portfolio · Proyectos · Acerca de mí · Hablemos" |
| `Ruta` | `numero` | "← Portfolio / Proyectos / 0X" + "ARCHIVO PERSONAL / 0X" |
| `Titulo` | `numero, titulo, subtitulo, estado, size? ('xl' 88px / 'lg' 74px), anotacion?` | `<proyecto_0X>` + pill (rol · año) + nombre del proyecto + bajada |
| `Datos` | `datos, variant? ('fila' / 'tarjeta')` | rol, herramientas y contexto |
| `Leyenda` | `texto` | pie de imagen "↳ …" |
| `IndiceLectura` | `numero` | barra "LEER PROYECTO_0X ↓ · 01. Contexto …" |
| `Columna` | `etiqueta, titulo, texto, estado?, id?` | anotación + título de 34px + texto + "[ Contenido por completar ]" |
| `OtrosProyectos` | `actual` | "Seguí explorando el archivo" con los otros dos proyectos |

---

#### 6. Tokens de diseño

Están en `@theme`, dentro de `src/styles/global.css`.

| Token | Hex | Uso |
|---|---|---|
| `night` | `#0c1018` | fondo principal |
| `surface` | `#121924` | secciones alternadas, consola, tarjetas |
| `raised` | `#192332` | pills, barra de la consola, cajas |
| `panel` | `#162332` | caja del bloque de código (solución, P03) |
| `edge` | `#2a3544` | bordes y separadores |
| `snow` | `#f1f3ef` | texto principal |
| `mist` | `#a7b2c2` | texto secundario |
| `slate` | `#7e8da3` | texto terciario y anotaciones grises |
| `mint` | `#8cf0cb` | acento |
| `mint-ink` | `#091211` | texto sobre fondo mint |
| `mint-muted` | `#21483d` | texto secundario sobre fondo mint |
| `mint-deep` | `#152f2c` | fondo de la pill mint y del identificador de proyecto |
| `code-blue` | `#81d7f7` | sintaxis: `{ }`, "PREGUNTA", "pregunta" |
| `code-violet` | `#baa3f6` | sintaxis: líneas de código, "EVIDENCIA POR AGREGAR" |
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

#### 7. Imágenes y recursos

Están en `public/images/`. Los originales de las capturas están en `Diseños/`.

| Archivo | Uso |
|---|---|
| `consola-indicadores.svg` | 3 puntos de la ventana de la consola (entrada, exportado de Figma) |
| `emblema-*.svg` | campos, órbita y punto del emblema de la portada (exportados de Figma) |
| `futbots.png` (1366 × 641) | pantalla de inicio de Futbots: tarjeta y página 01 |
| `sotl-menu.png` (1300 × 731) | menú principal de Sea of the Lost: tarjeta y página 02 |
| `sotl-logo.png` (856 × 858) | logo de Sea of the Lost: página 02, junto a los datos |
| `guia.png` (1366 × 644) | pantalla de inicio de GuIA: tarjeta y página 03 |

La imagen principal de cada proyecto se define en `src/data/proyectos.ts` (`imagen: { src, alt, ancho, alto }`), y la usan la tarjeta y la página. En las tarjetas se recorta a 416 × 320 (`object-cover`, centrado); en las páginas se muestra entera.

Las ilustraciones conceptuales del diseño original (interfaz con retícula, render 3D, núcleo de código) se reemplazaron por estas capturas y se borraron del proyecto. Siguen disponibles en Figma y en `Diseños/`.

---

#### 8. Recetas

##### 8.1 Cambiar nombre, email o roles
Editá `src/data/site.ts`. El nombre se actualiza en el logo, la consola, el titular con glitch, el pie y el título de la pestaña. Con el email real, poné `emailEsEjemplo: false` para ocultar "Contacto de ejemplo" y "Reemplazar por tu correo…".

##### 8.2 Completar datos de un proyecto
- En `src/data/proyectos.ts`: `titulo`, `resumen` (tarjeta), `subtitulo` (página), `herramientas` (pill de la tarjeta), `estado` (rol · año), `imagen` y `datos` (rol, herramientas y contexto, que se ven en la cabecera de la página).
- Textos de lectura (contexto, objetivo, proceso, solución, aprendizajes): en `proyecto-0X.astro`, props de cada `<Columna>` y arrays `pasos` / `registros`. Cuando un texto ya es real, poné `estado=""` para quitar "[ Contenido por completar ]".
- **No inventes contenido:** lo que el autor no contó queda como "por completar". Los textos ya completados salen de lo que Facundo describió de cada proyecto (sección 12).

##### 8.3 Cambiar textos de la página principal
Cada sección está en `src/components/home/`. Las listas (intereses, cifras, capacidades, hitos de formación) son arrays al principio de cada archivo.

##### 8.4 Agregar redes al contacto
En `home/Contacto.astro`, debajo del email, agregá links `font-mono text-[13px] text-mist hover:text-mint`.

##### 8.5 Cambiar o sumar imágenes de un proyecto
1. Copiá la imagen a `public/images/` (nombre en minúsculas, sin espacios).
2. Imagen principal: cambiá `imagen` del proyecto en `src/data/proyectos.ts` (con `alt` descriptivo y su `ancho` y `alto` reales). Se actualizan la tarjeta y la página.
3. Imágenes extra en una página (como el logo de Sea of the Lost): usá `<ProyectoImagen imagen={…} />` y, si hace falta, `<Leyenda texto="…" />`.

##### 8.6 Agregar un cuarto proyecto
1. Agregalo a `src/data/proyectos.ts` (ampliá el tipo `numero`).
2. Creá `src/pages/proyectos/proyecto-04.astro` reutilizando los componentes de `proyecto/`.
3. Agregá su tarjeta en `home/Proyectos.astro` y revisá textos que dicen "Tres proyectos", "[ 01 — 03 ]" y "3 proyectos personales" (entrada).

##### 8.7 Cambiar colores o fuentes
- Colores: cambialos en `@theme` y actualizá la tabla de la sección 6.
- Fuentes: instalá `@fontsource(-variable)/<fuente>`, importala en `global.css` y cambiá la variable `--font-*`.

---

#### 9. Cómo funcionan las ilustraciones

Las ilustraciones (`visuals/` y el diagrama de círculos del Proyecto 02) están **dibujadas con HTML y CSS**, con las medidas de Figma, y escalan con el ancho del contenedor:

- El contenedor lleva la clase `canvas` y `style="--canvas: <ancho en Figma>"`.
- Adentro, `canvas-inner` define `1em = 1px del diseño` (`font-size: calc(100cqw / var(--canvas))`).
- Todas las medidas van en `em` con el valor de Figma: `left-[66.56em]`, `w-[282.88em]`, etc.
- **Trampa:** en un elemento que cambia su propio tamaño de fuente (`text-[8em]`), sus `top`, `left` o `padding` en `em` se miden sobre **esa** fuente. Por eso un texto posicionado se escribe así: `<p class="absolute top-[281.6em] left-[16.64em]"><span class="text-[8em]">…</span></p>`.

| Componente | Lienzo | Dónde |
|---|---|---|
| `Emblema` | 468 × 484 | portada del portfolio |
| `GlitchName` | en `em` del tamaño del texto (112px) | nombre de la portada |
| Diagrama de círculos | 360 × 232 | proceso del Proyecto 02 (inline en la página) |

---

#### 10. Checklist de verificación

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

#### 11. Notas técnicas

- **Node y Astro:** Astro 7 exige Node ≥ 22.23.4 y la máquina original tiene 22.17, por eso Astro está en 5.18. Para actualizar, subí Node y después corré `npm install astro@latest`.
- **Astro 5 no tiene `astro dev --background`.** Si el 4321 está ocupado (por ejemplo, con el portfolio de Gonzalo), `npm run dev` usa el 4322.
- **Slots de componentes:** en `Titulo`, el contenido pasado por `<slot />` se perdía en el build, así que la línea extra se pasa como prop (`anotacion`). Para textos opcionales, preferí props.
- **Navegador headless:** Chrome y Edge headless no bajan de ~500px de ancho. Para probar celular, usá un iframe de 375px o las DevTools.
- **Nombre en el diseño:** Figma usa "Tu nombre" como texto de ejemplo, y en el sitio se reemplazó por `site.nombre` ("Facundo"). El email sigue siendo el de ejemplo.

---

#### 12. Información de los proyectos y pendientes

Lo que Facundo contó de cada proyecto, que es la base de los textos ya completados:

- **Futbots (2024):** autos robot que juegan al fútbol. La web permite que los usuarios se logueen para cargar datos de los partidos, mostrar los goles y armar torneos. Rol: full-stack. HTML, CSS, JS y Node.js; los datos se guardan en JSON.
- **Sea of the Lost (2025):** juego de un barco pirata hecho en Unity. Rol: desarrollo en Unity y composición de la música.
- **GuIA (2026):** proyecto para un hackathon escolar. Los alumnos eligen un rol (TIMI, que es UX/UI, Front-End, Back-End o Hardware) y se organizan con tareas. Ganó el premio a la ejecución. Rol: back-end.

Pendientes:

- [ ] Email real y perfiles (`site.ts`, receta 8.1).
- [ ] Futbots: origen del proyecto, proceso (3 tarjetas) y aprendizajes.
- [ ] Sea of the Lost: contexto, objetivo, proceso (3 pasos) y aprendizajes.
- [ ] GuIA: herramientas usadas, registro del proceso (3 registros) y aprendizajes.
- [ ] Formación: nombres de cursos, instituciones y período.

---

## 6. Código fuente completo

Cada bloque es un archivo completo, con su ruta como título.

### `package.json`

```json
{
    "name": "portfolio-facundo",
    "type": "module",
    "version": "0.0.1",
    "scripts": {
        "dev": "astro dev",
        "build": "astro build",
        "preview": "astro preview",
        "astro": "astro"
    },
    "dependencies": {
        "@fontsource-variable/inter": "^5.3.0",
        "@fontsource-variable/space-grotesk": "^5.3.0",
        "@fontsource/ibm-plex-mono": "^5.3.0",
        "@tailwindcss/vite": "^4.3.5",
        "astro": "^5.18.2",
        "tailwindcss": "^4.3.5"
    }
}
```

### `astro.config.mjs`

```js
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

### `AGENTS.md`

```markdown
# Instrucciones para agentes de IA

Antes de modificar este proyecto, leé **[PORTFOLIO.md](./PORTFOLIO.md)**. Ahí están el diseño de origen en Figma (con los node ids y las exportaciones de `Diseños/`), las reglas, los tokens, los componentes, las recetas y la checklist de verificación.

Resumen mínimo:

- Astro 5 + Tailwind CSS 4, 5 páginas: `/` (consola de entrada), `/portfolio`, `/proyectos/proyecto-01|02|03`.
- Datos personales en `src/data/site.ts`; proyectos (Futbots, Sea of the Lost, GuIA: textos, imagen, datos) en `src/data/proyectos.ts`.
- No inventes contenido de los proyectos: lo no documentado queda como "por completar" (ver PORTFOLIO.md, sección 12).
- Las páginas de proyecto usan los componentes de `src/components/proyecto/` (Ruta, Titulo, Datos, IndiceLectura, Columna, OtrosProyectos…).
- Usá los tokens de `src/styles/global.css` (`bg-surface`, `text-mist`, `text-mint`…), sin hex sueltos fuera de las ilustraciones.
- Verificá con `npm run build` y revisando a 1440px y a 375px.
- No actualices Astro a v7 sin actualizar Node (requiere ≥ 22.23.4). Astro 5 no tiene `astro dev --background`.
- Si cambiás estructura, tokens o recetas, actualizá `PORTFOLIO.md`.

Documentación de Astro: https://docs.astro.build
```

### `src/components/Footer.astro`

```astro
---
import { site } from '../data/site';

interface Props {
  /** Texto de la derecha (mint) */
  label: string;
  /** Si se indica, el texto de la derecha es un enlace */
  href?: string;
}

const { label, href } = Astro.props;
---

<footer class="border-t border-edge">
  <div
    class="container-page note flex flex-col gap-2 py-[30px] sm:flex-row sm:items-center sm:justify-between"
  >
    <p class="text-slate">© {site.nombre} · Portfolio personal</p>
    {
      href ? (
        <a href={href} class="text-mint hover:underline">
          {label}
        </a>
      ) : (
        <p class="text-mint">{label}</p>
      )
    }
  </div>
</footer>
```

### `src/components/home/AcercaDeMi.astro`

```astro
---
const datos = [
  { cifra: '3', concepto: 'Proyectos producidos', detalle: 'Exploraciones personales' },
  { cifra: '+200 h', concepto: 'Estudiando ciencia de datos', detalle: 'Aprender como punto de partida' },
  { cifra: '+4000 h', concepto: 'Jugando videojuegos', detalle: 'Un interés que también me define' },
  { cifra: '3 finales', concepto: 'Olimpíadas de matemática', detalle: 'Participante · 2019, 2020 y 2024' },
];
---

<section id="acerca" class="scroll-mt-4">
  <div class="container-page flex flex-col gap-12 py-16 lg:flex-row lg:gap-[100px] lg:py-20">
    <div class="flex flex-col gap-7 lg:w-[460px] lg:shrink-0">
      <p class="note text-mint">01 / acerca_de_mí</p>
      <h2 class="font-display text-[clamp(36px,3.5vw,50px)] leading-[1.08] font-bold tracking-[-0.03em]">
        La curiosidad es mi punto de partida.
      </h2>
      <p class="body-copy text-[17px]">
        Me interesan los datos, la matemática, la programación y los videojuegos. Distintas maneras de
        mirar un problema y encontrar nuevas posibilidades.
      </p>
      <p class="note text-slate">// entender antes de construir</p>
    </div>

    <dl class="grid min-w-0 flex-1 gap-x-8 gap-y-4 sm:grid-cols-2">
      {
        datos.map((d) => (
          <div class="flex flex-col gap-2.5 border-t border-edge pt-5 pb-[18px]">
            <dt class="order-2 text-base">{d.concepto}</dt>
            <dd class="order-1 font-display text-[44px] tracking-[-0.045em] whitespace-nowrap text-mint">
              {d.cifra}
            </dd>
            <dd class="order-3 font-mono text-[11px] leading-[1.5] text-slate">{d.detalle}</dd>
          </div>
        ))
      }
    </dl>
  </div>
</section>
```

### `src/components/home/Capacidades.astro`

```astro
---
const areas = [
  {
    simbolo: '[ ]',
    nombre: 'Diseño UX/UI',
    texto: 'La experiencia y la interfaz como parte de un mismo sistema.',
  },
  { simbolo: '◇', nombre: 'Diseño 3D', texto: 'Forma, composición y espacio como lenguaje visual.' },
  { simbolo: '</>', nombre: 'Front-End', texto: 'El vínculo entre lo que se diseña y lo que se construye.' },
];
---

<section>
  <div class="container-page flex flex-col gap-12 py-16 lg:flex-row lg:gap-20 lg:py-20">
    <div class="flex flex-col gap-7 lg:w-[440px] lg:shrink-0">
      <p class="note text-mint">03 / capacidades</p>
      <h2 class="font-display text-[clamp(34px,3.4vw,48px)] leading-[1.08] font-bold tracking-[-0.031em]">
        Diseño que piensa.<br />Código que crea.
      </h2>
      <p class="body-copy text-[17px]">
        Mis roles se cruzan en un mismo interés: conectar lo visual con lo lógico.
      </p>
      <p class="note text-slate">const enfoque = [diseño, tecnología];</p>
    </div>

    <div class="flex min-w-0 flex-1 flex-col">
      <ul>
        {
          areas.map((a) => (
            <li class="flex flex-col gap-2 border-t border-edge py-[22px] sm:flex-row sm:items-center sm:gap-6">
              <span class="w-[62px] shrink-0 font-mono text-[26px] text-mint" aria-hidden="true">
                {a.simbolo}
              </span>
              <h3 class="shrink-0 font-display text-[25px] font-medium tracking-[-0.032em] sm:w-[220px]">
                {a.nombre}
              </h3>
              <p class="body-copy min-w-0 flex-1 text-sm">{a.texto}</p>
            </li>
          ))
        }
      </ul>
      <p class="font-mono text-[11px] leading-[1.5] text-slate">
        Las herramientas específicas se documentarán en cada proyecto.
      </p>
    </div>
  </div>
</section>
```

### `src/components/home/Contacto.astro`

```astro
---
import Pill from '../Pill.astro';
import { site } from '../../data/site';
---

<section id="contacto" class="scroll-mt-4">
  <div class="container-page flex flex-col gap-10 pt-16 pb-14 lg:pt-20 lg:pb-16">
    <p class="note text-mint">05 / siguiente_conversación</p>

    <div class="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-20">
      <div class="flex flex-col gap-6 lg:w-[700px] lg:shrink-0">
        <h2 class="font-display text-[clamp(44px,5vw,72px)] leading-[1.06] font-bold tracking-[-0.042em]">
          ¿Y si creamos<br />algo nuevo?
        </h2>
        <p class="body-copy text-[17px]">Una idea, una pregunta o una conversación sobre tecnología.</p>
      </div>

      <div class="flex min-w-0 flex-1 flex-col items-start gap-[18px]">
        {site.emailEsEjemplo && <Pill tone="mint">Contacto de ejemplo</Pill>}
        <a
          href={`mailto:${site.email}`}
          class="group flex w-full items-center justify-between gap-4 border-b border-mint pb-[18px] text-mint"
        >
          <span class="min-w-0 truncate font-display text-[clamp(20px,1.9vw,26px)] tracking-[-0.038em]">
            {site.email}
          </span>
          <span
            class="text-[30px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true">↗</span
          >
        </a>
        {site.emailEsEjemplo && <p class="note text-slate">Reemplazar por tu correo y perfiles reales.</p>}
      </div>
    </div>
  </div>
</section>
```

### `src/components/home/Formacion.astro`

```astro
---
const hitos = [
  {
    indice: ['APRENDIZAJE'],
    titulo: '3 cursos terminados',
    texto:
      'Tecnologías aplicables a la ciencia de datos. Nombres de cursos, instituciones y tecnologías: por completar.',
  },
  {
    indice: ['SECUNDARIO'],
    titulo: '9,07 de promedio',
    texto: 'Promedio de la etapa secundaria. Institución y período: por completar.',
  },
  {
    indice: ['2019 / 2020', '2024'],
    titulo: '3 finales de olimpíadas de matemática',
    texto: 'Participación en las finales de 2019, 2020 y 2024.',
  },
];
---

<section id="formacion" class="scroll-mt-4 bg-surface">
  <div class="container-page flex flex-col gap-12 py-16 lg:flex-row lg:gap-[100px] lg:py-20">
    <div class="flex flex-col items-start gap-7 lg:w-[460px] lg:shrink-0">
      <p class="note text-mint">04 / formación</p>
      <h2 class="font-display text-[clamp(36px,3.5vw,50px)] leading-[1.08] font-bold tracking-[-0.03em]">
        Aprender es parte del proceso.
      </h2>
      <p class="body-copy text-[17px]">
        Un recorrido atravesado por la matemática y el estudio de tecnologías aplicables a la ciencia de
        datos.
      </p>
      <div class="flex items-center gap-5 rounded-md bg-raised px-[18px] py-3.5 whitespace-nowrap">
        <span class="font-display text-[30px] text-mint">+200 h</span>
        <span class="font-mono text-[11px] text-mist">ciencia de datos</span>
      </div>
    </div>

    <ul class="flex min-w-0 flex-1 flex-col">
      {
        hitos.map((h) => (
          <li class="flex flex-col gap-3 border-t border-edge py-[26px] sm:flex-row sm:gap-[26px]">
            <p class="note shrink-0 text-mint sm:w-[120px]">
              {h.indice.map((l, i) => (i ? [<br />, l] : l))}
            </p>
            <div class="flex min-w-0 flex-1 flex-col gap-2.5">
              <h3 class="font-display text-[26px] font-medium">{h.titulo}</h3>
              <p class="body-copy text-sm">{h.texto}</p>
            </div>
          </li>
        ))
      }
    </ul>
  </div>
</section>
```

### `src/components/home/Presentacion.astro`

```astro
---
import Nav from '../Nav.astro';
import GlitchName from '../visuals/GlitchName.astro';
import Emblema from '../visuals/Emblema.astro';
import { site } from '../../data/site';

const navLinks = [
  { label: '02. Proyectos', href: '#proyectos' },
  { label: '01. Acerca de mí', href: '#acerca' },
  { label: '04. Formación', href: '#formacion' },
];

const intereses = ['Datos', 'Matemática', 'Programación', 'Tecnología', 'Videojuegos'];
---

<header>
  <Nav links={navLinks} contactHref="#contacto" />

  <!-- Apertura editorial -->
  <div
    class="container-page flex flex-col gap-12 pt-16 pb-16 lg:flex-row lg:items-center lg:gap-[30px] lg:pt-[88px] lg:pb-20"
  >
    <div class="flex min-w-0 flex-col gap-[26px] lg:w-[798px] lg:shrink-0">
      <p class="note text-mint">// hola, soy · {site.slug}.portfolio</p>
      <div class="flex flex-col gap-1.5">
        <div class="lg:h-[127.68px]">
          <GlitchName name={site.nombre} class="text-[clamp(56px,7.8vw,112px)]" />
        </div>
        <p class="font-display text-[clamp(36px,4vw,58px)] leading-[1.08] font-medium tracking-[-0.043em]">
          Entre lógica<br />e imaginación.
        </p>
      </div>
      <p class="body-copy text-lg md:text-xl">
        Diseño UX/UI, diseño 3D y Front-End. Un punto de encuentro entre datos, tecnología y ganas de
        crear.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <a
          href="#proyectos"
          class="flex h-[50px] items-center gap-7 rounded-md border border-mint bg-mint px-[22px] text-mint-ink transition-colors hover:bg-transparent hover:text-mint"
        >
          <span class="font-mono text-[13px] font-medium">Explorar proyectos</span>
          <span class="text-lg" aria-hidden="true">↗</span>
        </a>
        <a
          href="#acerca"
          class="flex h-[50px] items-center gap-7 rounded-md border border-edge px-[22px] transition-colors hover:border-mint"
        >
          <span class="font-mono text-[13px] font-medium">Acerca de mí</span>
          <span class="text-lg text-mint" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <Emblema class="mx-auto w-full max-w-[468px] lg:shrink-0" />
  </div>

  <!-- Universo personal -->
  <div class="border-y border-edge">
    <div
      class="container-page flex flex-wrap items-center gap-x-8 gap-y-3 py-[26px] font-mono whitespace-nowrap lg:justify-between"
    >
      <p class="note w-full text-slate lg:w-auto">INTERESES EN COMÚN</p>
      {intereses.map((i) => <p class="text-[13px] text-mist">{i}</p>)}
      <a href="#acerca" class="hidden text-base text-mint lg:block" aria-label="Ir a Acerca de mí">↓</a>
    </div>
  </div>
</header>
```

### `src/components/home/Proyectos.astro`

```astro
---
import Pill from '../Pill.astro';
import ProyectoImagen from '../ProyectoImagen.astro';
import { proyectos } from '../../data/proyectos';
---

<section id="proyectos" class="scroll-mt-4 bg-surface">
  <div class="container-page flex flex-col gap-9 pt-16 pb-14 lg:pt-[72px] lg:pb-16">
    <p class="note text-mint">02 / proyectos_seleccionados</p>

    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <h2
        class="min-w-0 flex-1 font-display text-[clamp(36px,3.9vw,56px)] leading-[1.08] font-bold tracking-[-0.027em]"
      >
        Tres proyectos.<br />Distintas posibilidades.
      </h2>
      <div class="flex flex-col gap-3 lg:w-80 lg:shrink-0">
        <p class="font-mono text-[13px] text-mint">[ 01 — 03 ]</p>
        <p class="body-copy text-sm">
          Archivo personal. Cada proyecto tiene su propio espacio para contar el proceso.
        </p>
      </div>
    </div>

    <ul class="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {
        proyectos.map((p) => {
          const Tag = p.href ? 'a' : 'div';
          return (
            <li>
              <Tag
                href={p.href}
                class:list={['group flex flex-col gap-[22px]', p.href && 'cursor-pointer']}
              >
                <ProyectoImagen
                  imagen={p.imagen}
                  aspect="416 / 320"
                  class="transition-colors group-hover:border-mint"
                />
                <div class="flex flex-col items-start gap-4">
                  <div class="flex w-full items-center justify-between text-mint">
                    <span class="font-mono text-xs">proyecto_{p.numero}</span>
                    <span
                      class="text-[22px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                  <h3
                    class:list={[
                      'font-display text-[29px] font-medium tracking-[-0.034em]',
                      p.href && 'group-hover:text-mint',
                    ]}
                  >
                    {p.titulo}
                  </h3>
                  <p class="body-copy text-sm">{p.resumen}</p>
                  <Pill>{p.herramientas}</Pill>
                  <p class="font-mono text-[11px] text-slate">{p.estado}</p>
                </div>
              </Tag>
            </li>
          );
        })
      }
    </ul>
  </div>
</section>
```

### `src/components/Logo.astro`

```astro
---
import { site } from '../data/site';

interface Props {
  href?: string;
}

const { href = '/portfolio' } = Astro.props;
---

<a href={href} class="flex items-center gap-2.5 whitespace-nowrap">
  <span class="font-mono text-[26px] font-semibold text-mint" aria-hidden="true">&lt;/</span>
  <span class="font-display text-[22px] font-bold">{site.nombre}<span class="text-mint">.</span></span>
</a>
```

### `src/components/Nav.astro`

```astro
---
import Logo from './Logo.astro';

interface Props {
  links: { label: string; href: string }[];
  contactHref: string;
}

const { links, contactHref } = Astro.props;
---

<nav class="border-b border-edge" aria-label="Navegación principal">
  <div class="container-page flex h-20 items-center justify-between gap-6 lg:h-24">
    <Logo />
    <div class="flex items-center gap-8">
      <ul class="hidden items-center gap-8 md:flex">
        {
          links.map((link) => (
            <li>
              <a
                href={link.href}
                class="font-mono text-[13px] whitespace-nowrap text-mist transition-colors hover:text-mint"
              >
                {link.label}
              </a>
            </li>
          ))
        }
      </ul>
      <a
        href={contactHref}
        class="flex items-center gap-6 rounded-md border border-mint px-[18px] py-3 text-mint transition-colors hover:bg-mint hover:text-mint-ink"
      >
        <span class="font-mono text-[13px]">Hablemos</span>
        <span class="text-base" aria-hidden="true">↗</span>
      </a>
    </div>
  </div>
</nav>
```

### `src/components/Pill.astro`

```astro
---
interface Props {
  /** "neutral": fondo raised y texto mist · "mint": fondo mint-deep y texto mint */
  tone?: 'neutral' | 'mint';
}

const { tone = 'neutral' } = Astro.props;
---

<span
  class:list={[
    'inline-block rounded-full px-3 py-[7px] font-mono text-[11px] whitespace-nowrap',
    tone === 'mint' ? 'bg-mint-deep text-mint' : 'bg-raised text-mist',
  ]}
>
  <slot />
</span>
```

### `src/components/proyecto/Columna.astro`

```astro
---
/**
 * Bloque de lectura: anotación mint, título de 34px, texto y estado.
 * Se usa en contexto, objetivo, solución y aprendizajes de los tres casos.
 */
interface Props {
  etiqueta: string;
  titulo: string;
  texto: string;
  estado?: string;
  id?: string;
  class?: string;
}

const { etiqueta, titulo, texto, estado = '[ Contenido por completar ]', id, class: className } = Astro.props;
---

<div id={id} class:list={['flex min-w-0 scroll-mt-4 flex-col gap-4', className]}>
  <p class="note text-mint">{etiqueta}</p>
  <h3 class="font-display text-[clamp(28px,2.4vw,34px)] font-bold tracking-[-0.03em]">{titulo}</h3>
  <p class="body-copy text-[17px]">{texto}</p>
  {estado && <p class="font-mono text-[11px] text-slate">{estado}</p>}
</div>
```

### `src/components/proyecto/Datos.astro`

```astro
---
/**
 * Rol / herramientas / contexto del caso.
 * "fila": 3 columnas entre bordes (P01, P03) · "tarjeta": apilados en una caja (P02).
 */
import type { Dato } from '../../data/proyectos';

interface Props {
  datos: Dato[];
  variant?: 'fila' | 'tarjeta';
}

const { datos, variant = 'fila' } = Astro.props;
---

<dl
  class:list={[
    variant === 'fila'
      ? 'grid gap-8 border-y border-edge py-[30px] md:grid-cols-3 md:gap-12'
      : 'flex flex-col gap-8 rounded-xl border border-edge bg-surface p-8',
  ]}
>
  {
    datos.map((d) => (
      <div class="flex flex-col gap-2.5">
        <dt class="font-mono text-[11px] text-slate">{d.etiqueta}</dt>
        <dd class="font-display text-[22px]">{d.valor}</dd>
        <dd class="text-[13px] leading-[1.5] text-mist">{d.detalle}</dd>
      </div>
    ))
  }
</dl>
```

### `src/components/proyecto/DetalleNav.astro`

```astro
---
/** Navegación de las páginas de proyecto (Figma node 124:6703). */
import Nav from '../Nav.astro';

const links = [
  { label: '← Portfolio', href: '/portfolio' },
  { label: 'Proyectos', href: '/portfolio#proyectos' },
  { label: 'Acerca de mí', href: '/portfolio#acerca' },
];
---

<Nav links={links} contactHref="/portfolio#contacto" />
```

### `src/components/proyecto/IndiceLectura.astro`

```astro
---
/** Barra "LEER PROYECTO_0X ↓ · 01. Contexto · 02. Proceso · 03. Solución · 04. Aprendizajes". */
interface Props {
  numero: string;
  class?: string;
}

const { numero, class: className } = Astro.props;

const partes = [
  { label: '01. Contexto', href: '#contexto' },
  { label: '02. Proceso', href: '#proceso' },
  { label: '03. Solución', href: '#solucion' },
  { label: '04. Aprendizajes', href: '#aprendizajes' },
];
---

<nav
  aria-label="Partes del caso"
  class:list={[
    'flex min-h-[62px] flex-wrap items-center gap-x-8 gap-y-3 border-y border-edge py-4 lg:justify-between lg:py-0',
    className,
  ]}
>
  <a href="#contexto" class="w-full font-mono text-xs text-mint hover:underline lg:w-auto">
    LEER PROYECTO_{numero} ↓
  </a>
  {
    partes.map((p) => (
      <a href={p.href} class="font-mono text-[11px] whitespace-nowrap text-mist hover:text-mint">
        {p.label}
      </a>
    ))
  }
</nav>
```

### `src/components/proyecto/Leyenda.astro`

```astro
---
/** Pie de imagen "↳ …" debajo de los recursos visuales del caso. */
interface Props {
  texto: string;
}

const { texto } = Astro.props;
---

<p class="font-mono text-[11px] leading-[1.5] text-slate">↳ {texto}</p>
```

### `src/components/proyecto/OtrosProyectos.astro`

```astro
---
/** Navegación entre proyectos al final de cada caso (Figma node 124:6853). */
import { proyectos } from '../../data/proyectos';

interface Props {
  actual: string;
}

const { actual } = Astro.props;
const otros = proyectos.filter((p) => p.numero !== actual);
---

<section class="bg-surface">
  <div class="container-page flex flex-col gap-7 py-16">
    <div class="note flex flex-wrap justify-between gap-x-6 gap-y-1">
      <p class="text-mint">&lt;/proyecto_{actual}&gt;</p>
      <p class="text-mist">Seguí explorando el archivo</p>
    </div>
    <ul class="grid gap-6 md:grid-cols-2">
      {
        otros.map((p) => {
          const Tag = p.href ? 'a' : 'div';
          return (
            <li>
              <Tag
                href={p.href}
                class:list={[
                  'group flex items-center gap-6 rounded-xl border border-edge p-6',
                  p.href && 'transition-colors hover:border-mint',
                ]}
              >
                <span class="flex size-[76px] shrink-0 items-center justify-center rounded-md bg-mint-deep font-mono text-[28px] text-mint">
                  {p.numero}
                </span>
                <span class="flex min-w-0 flex-1 flex-col gap-2.5">
                  <span class="font-mono text-[10px] text-slate">EXPLORAR PROYECTO</span>
                  <span class="font-display text-[clamp(20px,1.8vw,26px)] tracking-[-0.031em]">{p.titulo}</span>
                </span>
                <span
                  class="text-[30px] text-mint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Tag>
            </li>
          );
        })
      }
    </ul>
  </div>
</section>
```

### `src/components/proyecto/Ruta.astro`

```astro
---
/** Ruta "← Portfolio / Proyectos / 0X" + "ARCHIVO PERSONAL / 0X" (arriba de cada caso). */
interface Props {
  numero: string;
}

const { numero } = Astro.props;
---

<div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs">
  <nav aria-label="Ruta" class="whitespace-pre text-mist">
    <a href="/portfolio" class="hover:text-mint">← Portfolio</a>{'  /  '}<a
      href="/portfolio#proyectos"
      class="hover:text-mint">Proyectos</a
    >{'  /  '}<span aria-current="page">{numero}</span>
  </nav>
  <p class="leading-[1.5] text-slate">ARCHIVO PERSONAL / {numero}</p>
</div>
```

### `src/components/proyecto/Titulo.astro`

```astro
---
/**
 * Bloque de título del caso: "<proyecto_0X> [rol · año]", el nombre del
 * proyecto (con punto mint, como el logo) y la bajada.
 * P01 y P02 usan 88px; P03 usa 74px.
 */
import Pill from '../Pill.astro';

interface Props {
  numero: string;
  titulo: string;
  subtitulo: string;
  estado: string;
  size?: 'xl' | 'lg';
  /** Línea gris opcional debajo de la bajada (P03) */
  anotacion?: string;
  class?: string;
}

const { numero, titulo, subtitulo, estado, size = 'xl', anotacion, class: className } = Astro.props;
---

<div class:list={['flex min-w-0 flex-col', size === 'xl' ? 'gap-6' : 'gap-3', className]}>
  <div class="flex flex-wrap items-center gap-3">
    <p class="note text-mint">&lt;proyecto_{numero}&gt;</p>
    <Pill>{estado}</Pill>
  </div>
  <h1
    class:list={[
      'font-display leading-[1.02] font-bold tracking-[-0.045em] text-balance',
      size === 'xl' ? 'text-[clamp(52px,6.1vw,88px)]' : 'text-[clamp(48px,5.1vw,74px)]',
    ]}
  >
    {titulo}<span class="text-mint">.</span>
  </h1>
  <p class:list={['body-copy text-lg md:text-xl', size === 'lg' && 'mt-4']}>{subtitulo}</p>
  {anotacion && <p class="note mt-[18px] text-slate">{anotacion}</p>}
</div>
```

### `src/components/ProyectoImagen.astro`

```astro
---
/**
 * Imagen real de un proyecto con bordes redondeados.
 * Con `aspect` se recorta a esa proporción (object-cover); sin `aspect`
 * se muestra entera con su proporción original.
 */
import type { Imagen } from '../data/proyectos';

interface Props {
  imagen: Imagen;
  aspect?: string;
  eager?: boolean;
  class?: string;
}

const { imagen, aspect, eager = false, class: className } = Astro.props;
---

<div
  class:list={['relative overflow-hidden rounded-xl border border-edge bg-surface', className]}
  style={{ aspectRatio: aspect ?? `${imagen.ancho} / ${imagen.alto}` }}
>
  <img
    src={imagen.src}
    alt={imagen.alt}
    width={imagen.ancho}
    height={imagen.alto}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    class="absolute inset-0 size-full object-cover"
  />
  <slot />
</div>
```

### `src/components/visuals/Emblema.astro`

```astro
---
/**
 * "Emblema de curiosidad" de la portada (468 × 484, node 124:6469):
 * campos orbitales, ejes, el símbolo </> rotado y una nota.
 * Medidas en px del diseño aplicadas en "em".
 */
interface Props {
  class?: string;
}

const { class: className } = Astro.props;
---

<div
  class:list={['canvas relative', className]}
  style={{ '--canvas': 468, aspectRatio: '468 / 484' }}
  aria-hidden="true"
>
  <div class="canvas-inner absolute inset-0 overflow-hidden">
    <p class="absolute top-[460em] left-[152em] font-mono whitespace-nowrap text-slate">
      <span class="text-[10em]">x: curiosidad / y: posibilidades</span>
    </p>

    <div
      class="absolute top-[370em] left-0 flex gap-[14em] rounded-[6em] border border-edge bg-raised px-[14em] py-[10em] whitespace-nowrap"
    >
      <span class="font-mono text-[12em] text-mint">*</span>
      <span class="font-mono text-[12em] text-mist">pensar → crear → iterar</span>
    </div>

    <img src="/images/emblema-punto-orbital.svg" alt="" class="absolute top-[82em] left-[360em] size-[12em]" />

    <!-- Símbolo de autor: caja 310 × 220 rotada -8° -->
    <div class="absolute top-[101.36em] left-[98.8em] h-[220em] w-[310em] -rotate-8 overflow-hidden">
      <p class="font-display text-[164em] font-bold tracking-[-0.0915em] whitespace-nowrap text-mint">
        &lt;/&gt;
      </p>
    </div>

    <img
      src="/images/emblema-orbita-conexion.svg"
      alt=""
      class="absolute top-[64em] left-[15em] h-[344em] w-[436em] max-w-none"
    />
    <span class="absolute top-0 left-[235em] h-[468em] w-px bg-edge"></span>
    <span class="absolute top-[235em] left-0 h-px w-[468em] bg-edge"></span>
    <img src="/images/emblema-campo-interior.svg" alt="" class="absolute top-[72em] left-[72em] size-[326em] max-w-none" />
    <img src="/images/emblema-campo-orbital.svg" alt="" class="absolute top-[25em] left-[25em] size-[420em] max-w-none" />
  </div>
</div>
```

### `src/components/visuals/GlitchName.astro`

```astro
---
/**
 * Nombre con efecto glitch de la portada (node 124:6453).
 * Todas las medidas están en "em" relativas al tamaño de fuente (112px en Figma),
 * así el efecto escala junto con el texto.
 */
interface Props {
  name: string;
  class?: string;
}

const { name, class: className } = Astro.props;
---

<h1
  class:list={[
    'relative inline-block font-display leading-none font-bold tracking-[-0.0446em] whitespace-nowrap text-snow',
    className,
  ]}
>
  {name}
  <!-- Fragmento de señal: franja de 4px que muestra una copia rosa desplazada -->
  <span class="absolute top-[0.45em] left-[0.027em] h-[4px] w-full overflow-hidden" aria-hidden="true">
    <span class="absolute top-[-0.45em] left-0 text-glitch">{name}</span>
  </span>
  <span class="absolute top-[0.53em] left-[0.08em] h-[2px] w-[0.464em] bg-mint" aria-hidden="true"></span>
  <span class="absolute top-[0.75em] left-[2.84em] h-[3px] w-[0.41em] bg-night" aria-hidden="true"></span>
  <!-- Cursor: 100px después del final del nombre -->
  <span
    class="absolute top-[0.79em] left-[calc(100%+0.89em)] h-[0.08em] w-[0.32em] bg-mint motion-safe:animate-blink"
    aria-hidden="true"
  ></span>
</h1>
```

### `src/data/proyectos.ts`

```ts
export type Dato = { etiqueta: string; valor: string; detalle: string };

export type Imagen = { src: string; alt: string; ancho: number; alto: number };

export type Proyecto = {
  numero: '01' | '02' | '03';
  titulo: string;
  /** Texto corto de la tarjeta en la página principal */
  resumen: string;
  /** Bajada del título en la página de detalle */
  subtitulo: string;
  /** Etiqueta de herramientas (tarjeta) */
  herramientas: string;
  /** Rol y año: línea gris de la tarjeta y pill de la página */
  estado: string;
  /** Imagen principal: tarjeta y cabecera de la página */
  imagen: Imagen;
  /** Rol, herramientas y contexto (cabecera de la página de detalle) */
  datos: Dato[];
  /** Ruta de la página de detalle. Sin href, la tarjeta se muestra sin enlace. */
  href?: string;
};

export const proyectos: Proyecto[] = [
  {
    numero: '01',
    titulo: 'Futbots',
    resumen: 'Autos robot que juegan al fútbol y una web para registrar partidos, goles y torneos.',
    subtitulo: 'Autos robot que juegan al fútbol, y una web para seguir cada partido.',
    herramientas: 'HTML · CSS · JS · Node.js',
    estado: 'Full-stack · 2024',
    imagen: {
      src: '/images/futbots.png',
      alt: 'Pantalla de inicio de Futbots: la pregunta "¿Qué quieres jugar?" con las opciones Partido y Torneo',
      ancho: 1366,
      alto: 641,
    },
    datos: [
      { etiqueta: 'ROL EN EL PROYECTO', valor: 'Full-stack', detalle: 'Desarrollo completo de la página: interfaz, servidor y datos.' },
      { etiqueta: 'HERRAMIENTAS', valor: 'HTML, CSS, JS y Node.js', detalle: 'Datos de partidos y torneos guardados en JSON.' },
      { etiqueta: 'CONTEXTO Y FECHA', valor: '2024', detalle: 'Proyecto de autos robot que juegan al fútbol.' },
    ],
    href: '/proyectos/proyecto-01',
  },
  {
    numero: '02',
    titulo: 'Sea of the Lost',
    resumen: 'Videojuego de un barco pirata hecho en Unity, con música original.',
    subtitulo: 'Un juego de piratas en alta mar, hecho en Unity y con música propia.',
    herramientas: 'Unity · Composición musical',
    estado: 'Desarrollo y música · 2025',
    imagen: {
      src: '/images/sotl-menu.png',
      alt: 'Menú principal de Sea of the Lost: carteles de madera colgados de cadenas con las opciones Sail, Credits y Exit sobre un mar',
      ancho: 1300,
      alto: 731,
    },
    datos: [
      { etiqueta: 'ROL EN EL PROYECTO', valor: 'Desarrollo y música', detalle: 'Desarrollo del juego en Unity y composición de su música.' },
      { etiqueta: 'HERRAMIENTAS', valor: 'Unity', detalle: 'Motor del juego. Música original compuesta para el proyecto.' },
      { etiqueta: 'CONTEXTO Y FECHA', valor: '2025', detalle: 'Videojuego de un barco pirata.' },
    ],
    href: '/proyectos/proyecto-02',
  },
  {
    numero: '03',
    titulo: 'GuIA',
    resumen: 'Asistente para que equipos de alumnos se organicen por roles y tareas. Premio a la ejecución.',
    subtitulo: 'Un asistente para que cada equipo se organice por roles y tareas.',
    herramientas: 'Herramientas: por completar',
    estado: 'Back-end · Hackathon 2026',
    imagen: {
      src: '/images/guia.png',
      alt: 'Pantalla de inicio de GuIA con el logo y el lema "Desenredá tu proyecto con tu asistente, guIA."',
      ancho: 1366,
      alto: 644,
    },
    datos: [
      { etiqueta: 'ROL EN EL PROYECTO', valor: 'Back-end', detalle: 'Desarrollo del back-end de la aplicación.' },
      { etiqueta: 'HERRAMIENTAS', valor: 'Por completar', detalle: 'Agregar las herramientas utilizadas.' },
      { etiqueta: 'CONTEXTO Y FECHA', valor: 'Hackathon escolar · 2026', detalle: 'Ganó el premio a la ejecución.' },
    ],
    href: '/proyectos/proyecto-03',
  },
];

export const getProyecto = (numero: Proyecto['numero']) => proyectos.find((p) => p.numero === numero)!;
```

### `src/data/site.ts`

```ts
/** Datos personales usados en todo el sitio. Cambiá acá y se actualiza en todas las páginas. */
export const site = {
  /** Nombre que reemplaza a "Tu nombre" del diseño */
  nombre: 'Facundo',
  /** Versión en minúsculas para rutas tipo consola ("facundo@portfolio") */
  slug: 'facundo',
  /** Email de ejemplo del diseño: reemplazar por el real */
  email: 'hola@tunombre.example',
  emailEsEjemplo: true,
  roles: ['Diseño UX/UI', 'Diseño 3D', 'Front-End'],
};
```

### `src/layouts/Layout.astro`

```astro
---
import '../styles/global.css';
import { site } from '../data/site';

interface Props {
  title?: string;
  description?: string;
}

const {
  title = `${site.nombre} — Portfolio personal`,
  description = `Portfolio personal de ${site.nombre}: ${site.roles.join(', ')}.`,
} = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="generator" content={Astro.generator} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </head>
  <body id="top">
    <slot />
  </body>
</html>
```

### `src/pages/index.astro`

```astro
---
/**
 * Entrada — Consola de bienvenida (Figma node 124:6385).
 * Pantalla de bienvenida tipo terminal; "y" o Enter llevan al portfolio.
 */
import Layout from '../layouts/Layout.astro';
import Logo from '../components/Logo.astro';
import { site } from '../data/site';

const arranque = [
  { etiqueta: 'Cargando identidad', valor: site.nombre },
  { etiqueta: 'Montando archivo', valor: '3 proyectos personales' },
  { etiqueta: 'Inicializando curiosidad', valor: 'datos / matemática / videojuegos' },
];
---

<Layout title={`${site.nombre} — Bienvenida`}>
  <div class="container-page flex min-h-svh flex-col">
    <!-- Cabecera de acceso -->
    <header class="flex h-[100px] shrink-0 items-center justify-between gap-6">
      <Logo href="/" />
      <p class="note hidden text-slate sm:block">PORTFOLIO PERSONAL / INICIO</p>
    </header>

    <!-- Área de bienvenida -->
    <main class="flex flex-1 flex-col items-center justify-center gap-7 py-10">
      <div class="note flex w-full max-w-[1104px] flex-wrap justify-between gap-x-6 gap-y-1">
        <p class="text-mist">// cada idea empieza con una línea</p>
        <p class="text-slate">sesión: visitante</p>
      </div>

      <!-- Consola -->
      <div class="w-full max-w-[1104px] overflow-hidden rounded-xl border border-edge bg-surface shadow-float">
        <div class="flex h-[52px] items-center justify-between gap-4 bg-raised px-6">
          <img src="/images/consola-indicadores.svg" alt="" width="43" height="9" />
          <p class="truncate font-mono text-xs text-mist">{site.slug}@portfolio: ~ / bienvenida</p>
          <p class="hidden font-mono text-[11px] text-slate sm:block">UTF-8</p>
        </div>

        <div class="flex flex-col gap-[30px] p-6 md:p-12">
          <p class="font-mono text-sm text-mist"><span class="text-mint">~ $ </span>iniciar portfolio</p>

          <div class="flex flex-col gap-3">
            <h1 class="font-display text-[clamp(44px,5vw,72px)] font-bold tracking-[-0.042em]">
              Hola, mundo<span class="text-mint motion-safe:animate-blink">_</span>
            </h1>
            <p class="font-mono text-[15px] leading-[1.7] text-mist">
              Soy {site.nombre}. Este es mi portfolio personal.<br />
              {site.roles.join(' · ')}
            </p>
          </div>

          <ul class="flex flex-col gap-3 font-mono text-[13px]">
            {
              arranque.map((r) => (
                <li class="flex flex-wrap gap-x-[18px] gap-y-1">
                  <span class="text-mint">[ok]</span>
                  <span class="text-mist sm:w-[280px]">{r.etiqueta}</span>
                  <span class="w-full text-snow sm:w-auto">{r.valor}</span>
                </li>
              ))
            }
          </ul>

          <div class="h-px w-full bg-edge"></div>

          <div class="flex flex-col gap-[18px]">
            <p class="font-mono text-lg md:text-xl">
              ¿Continuar al portfolio? <span class="text-slate">[y/n]</span>
            </p>
            <a
              href="/portfolio"
              id="entrar"
              class="group flex w-fit items-center gap-3.5 rounded-md text-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              <span class="font-mono text-[26px]" aria-hidden="true">❯</span>
              <span class="font-mono text-[26px]">y</span>
              <span class="h-[27px] w-3 bg-mint motion-safe:animate-blink" aria-hidden="true"></span>
              <span class="font-mono text-xs text-slate group-hover:text-mint">↵ entrar</span>
            </a>
          </div>
        </div>
      </div>

      <div class="note flex w-full max-w-[1104px] flex-wrap justify-between gap-x-6 gap-y-1">
        <p class="text-slate">Un espacio para pensar, diseñar y construir.</p>
        <p class="text-mint">sistema listo ●</p>
      </div>
    </main>

    <!-- Pie de acceso -->
    <footer class="note flex h-[74px] shrink-0 items-center justify-between gap-4 border-t border-edge text-slate">
      <p>&lt;portfolio estado="por explorar" /&gt;</p>
      <p>00 / 04</p>
    </footer>
  </div>
</Layout>

<script>
  // Responder a la consola: "y" o Enter entran al portfolio.
  const entrar = document.getElementById('entrar') as HTMLAnchorElement | null;
  document.addEventListener('keydown', (e) => {
    if (!entrar || e.metaKey || e.ctrlKey || e.altKey) return;
    const target = e.target as HTMLElement;
    if (target.closest('input, textarea, [contenteditable]')) return;
    if (e.key === 'y' || e.key === 'Y' || (e.key === 'Enter' && target === document.body)) {
      window.location.href = entrar.href;
    }
  });
</script>
```

### `src/pages/portfolio.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import Presentacion from '../components/home/Presentacion.astro';
import AcercaDeMi from '../components/home/AcercaDeMi.astro';
import Proyectos from '../components/home/Proyectos.astro';
import Capacidades from '../components/home/Capacidades.astro';
import Formacion from '../components/home/Formacion.astro';
import Contacto from '../components/home/Contacto.astro';
import Footer from '../components/Footer.astro';
---

<Layout>
  <Presentacion />
  <main>
    <AcercaDeMi />
    <Proyectos />
    <Capacidades />
    <Formacion />
    <Contacto />
  </main>
  <Footer label="</> Curiosidad en construcción" />
</Layout>
```

### `src/pages/proyectos/proyecto-01.astro`

```astro
---
/** Futbots — Detalle (diseño: Figma frame 124:6702, "Proyecto personal 01"). */
import Layout from '../../layouts/Layout.astro';
import DetalleNav from '../../components/proyecto/DetalleNav.astro';
import Ruta from '../../components/proyecto/Ruta.astro';
import Titulo from '../../components/proyecto/Titulo.astro';
import Datos from '../../components/proyecto/Datos.astro';
import Leyenda from '../../components/proyecto/Leyenda.astro';
import IndiceLectura from '../../components/proyecto/IndiceLectura.astro';
import Columna from '../../components/proyecto/Columna.astro';
import OtrosProyectos from '../../components/proyecto/OtrosProyectos.astro';
import ProyectoImagen from '../../components/ProyectoImagen.astro';
import Footer from '../../components/Footer.astro';
import { site } from '../../data/site';
import { getProyecto } from '../../data/proyectos';

const p = getProyecto('01');

// Proceso: todavía sin documentar
const pasos = [
  {
    n: '01_',
    titulo: 'Exploración',
    texto: 'Documentar el punto de partida y el material que ayudó a entender el desafío.',
  },
  {
    n: '02_',
    titulo: 'Decisiones',
    texto: 'Mostrar alternativas y explicar qué criterios guiaron las decisiones del proyecto.',
  },
  {
    n: '03_',
    titulo: 'Desarrollo',
    texto: 'Agregar iteraciones, pruebas y ajustes realizados, cuando corresponda.',
  },
];
---

<Layout title={`${p.titulo} — ${site.nombre}`} description={p.resumen}>
  <DetalleNav />
  <main>
    <!-- Cabecera del proyecto -->
    <section class="container-page flex flex-col gap-10 pt-[34px] pb-10">
      <Ruta numero="01" />
      <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[100px]">
        <Titulo numero="01" titulo={p.titulo} subtitulo={p.subtitulo} estado={p.estado} class="flex-1" />
        <div class="flex flex-col gap-3.5 pb-2.5 lg:w-[290px] lg:shrink-0">
          <p class="note text-mint">// antes de empezar</p>
          <p class="body-copy text-sm">
            Algunas partes del proceso todavía están por documentar y aparecen marcadas como pendientes.
          </p>
        </div>
      </div>
      <Datos datos={p.datos} />
    </section>

    <!-- Presentación visual -->
    <section class="container-page flex flex-col gap-4 pb-12">
      <ProyectoImagen imagen={p.imagen} eager />
      <Leyenda texto="Pantalla de inicio de la web de Futbots." />
    </section>

    <!-- Lectura del proyecto -->
    <section class="container-page pb-[72px]">
      <IndiceLectura numero="01" />

      <div id="contexto" class="mt-16 grid scroll-mt-4 gap-12 lg:grid-cols-[320px_1fr_1fr] lg:gap-x-24">
        <div class="flex flex-col gap-4">
          <p class="note text-mint">01 / punto_de_partida</p>
          <h2 class="font-display text-[clamp(34px,3.1vw,44px)] leading-[1.08] font-bold tracking-[-0.034em]">
            La idea detrás<br />del proyecto.
          </h2>
        </div>
        <Columna
          etiqueta="// contexto"
          titulo="¿De dónde nace?"
          texto="Futbots es un proyecto de autos robot que juegan al fútbol. La página acompaña esos partidos y permite seguir lo que pasa en cada uno."
          estado=""
        />
        <Columna
          etiqueta="// objetivo"
          titulo="¿Qué buscaba resolver?"
          texto="Que los usuarios puedan loguearse para cargar los datos de cada partido, ver los goles y organizar torneos."
          estado=""
        />
      </div>

      <div id="proceso" class="mt-20 scroll-mt-4">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div class="flex flex-col gap-4">
            <p class="note text-mint">02 / proceso</p>
            <h2 class="font-display text-[clamp(34px,3.1vw,44px)] leading-[1.08] font-bold tracking-[-0.034em]">
              De la pregunta a la decisión.
            </h2>
          </div>
          <p class="note text-slate">Guion de proceso por completar</p>
        </div>
        <ol class="mt-8 grid gap-6 md:grid-cols-3">
          {
            pasos.map((paso) => (
              <li class="flex flex-col gap-6 rounded-xl border border-edge bg-surface p-7">
                <span class="font-mono text-[30px] text-mint">{paso.n}</span>
                <h3 class="font-display text-[26px] tracking-[-0.02em]">{paso.titulo}</h3>
                <p class="body-copy text-[15px]">{paso.texto}</p>
                <span class="h-0.5 w-10 bg-edge" aria-hidden="true" />
                <span class="font-mono text-[10px] text-slate">POR DOCUMENTAR</span>
              </li>
            ))
          }
        </ol>
      </div>

      <div class="mt-16 grid gap-12 border-t border-edge pt-12 md:grid-cols-2 md:gap-20">
        <Columna
          id="solucion"
          etiqueta="// 03 / solución"
          titulo="Lo que se construyó."
          texto="Una web full-stack: la interfaz en HTML, CSS y JavaScript, y un servidor en Node.js que guarda los datos de partidos y torneos en archivos JSON."
          estado=""
        />
        <Columna
          id="aprendizajes"
          etiqueta="// 04 / aprendizajes"
          titulo="Lo que me llevo."
          texto="Compartir un aprendizaje concreto, una dificultad y qué haría distinto en una próxima versión."
        />
      </div>
    </section>

    <OtrosProyectos actual="01" />
  </main>
  <Footer label="← Volver al índice de proyectos" href="/portfolio#proyectos" />
</Layout>
```

### `src/pages/proyectos/proyecto-02.astro`

```astro
---
/** Sea of the Lost — Detalle (diseño: Figma frame 124:6876, "Proyecto personal 02"). */
import Layout from '../../layouts/Layout.astro';
import DetalleNav from '../../components/proyecto/DetalleNav.astro';
import Ruta from '../../components/proyecto/Ruta.astro';
import Titulo from '../../components/proyecto/Titulo.astro';
import Datos from '../../components/proyecto/Datos.astro';
import Leyenda from '../../components/proyecto/Leyenda.astro';
import IndiceLectura from '../../components/proyecto/IndiceLectura.astro';
import Columna from '../../components/proyecto/Columna.astro';
import OtrosProyectos from '../../components/proyecto/OtrosProyectos.astro';
import ProyectoImagen from '../../components/ProyectoImagen.astro';
import Footer from '../../components/Footer.astro';
import { site } from '../../data/site';
import { getProyecto } from '../../data/proyectos';

const p = getProyecto('02');

const logo = {
  src: '/images/sotl-logo.png',
  alt: 'Logo de Sea of the Lost: un pirata en un bote con una isla y un tiburón de fondo',
  ancho: 856,
  alto: 858,
};

// Proceso: todavía sin documentar
const pasos = [
  {
    titulo: 'Entender el contexto',
    texto:
      'Agregar referencias, preguntas y observaciones que orientaron el inicio. Diferenciar hechos de suposiciones.',
  },
  {
    titulo: 'Explorar alternativas',
    texto: 'Mostrar propuestas e iteraciones reales. Explicar por qué algunas ideas se mantuvieron y otras no.',
  },
  {
    titulo: 'Tomar decisiones',
    texto: 'Relacionar los ajustes finales con el objetivo. Incorporar pruebas o devoluciones únicamente si existieron.',
  },
];
---

<Layout title={`${p.titulo} — ${site.nombre}`} description={p.resumen}>
  <DetalleNav />
  <main>
    <!-- Apertura de galería -->
    <section class="container-page flex flex-col gap-10 pt-[34px]">
      <Ruta numero="02" />
      <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[100px]">
        <Titulo numero="02" titulo={p.titulo} subtitulo={p.subtitulo} estado={p.estado} class="flex-1" />
        <div class="flex flex-col gap-3.5 pb-2.5 lg:w-80 lg:shrink-0">
          <p class="note text-mint">VIDEOJUEGO / 02</p>
          <p class="body-copy text-sm">Desarrollé el juego en Unity y compuse su música.</p>
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-[840fr_416fr]">
        <div class="flex flex-col gap-4">
          <ProyectoImagen imagen={p.imagen} eager />
          <Leyenda texto="Menú principal del juego." />
        </div>
        <div class="flex flex-col gap-10">
          <Datos datos={p.datos} variant="tarjeta" />
          <figure class="flex items-center gap-5 px-6">
            <ProyectoImagen imagen={logo} class="w-28 shrink-0" />
            <figcaption class="note text-slate">// logo del juego</figcaption>
          </figure>
        </div>
      </div>

      <IndiceLectura numero="02" />
    </section>

    <!-- Contexto y objetivo -->
    <section id="contexto" class="container-page grid scroll-mt-4 gap-12 pt-[72px] pb-[72px] md:grid-cols-2 md:gap-x-[100px]">
      <Columna
        etiqueta="// 01 / contexto"
        titulo="El punto de partida."
        texto="Describir el origen de la propuesta, la situación inicial y las personas o necesidades involucradas."
      />
      <Columna
        etiqueta="// objetivo"
        titulo="Una intención clara."
        texto="Agregar qué se buscaba lograr, las limitaciones y el alcance real del proyecto."
      />
    </section>

    <!-- Proceso del proyecto -->
    <section id="proceso" class="scroll-mt-4 bg-surface">
      <div class="container-page grid gap-12 py-[72px] lg:grid-cols-[460px_1fr] lg:gap-[100px]">
        <div class="flex flex-col">
          <p class="note text-mint">02 / proceso</p>
          <h2 class="mt-6 font-display text-[clamp(40px,3.8vw,54px)] leading-[1.08] font-bold tracking-[-0.034em]">
            Mirar, probar,<br />ajustar.
          </h2>
          <p class="body-copy mt-7 text-[17px]">
            Este espacio reúne los pasos reales del proyecto. El recorrido y sus evidencias están por
            documentar.
          </p>
          <!-- Diagrama: dos círculos que se cruzan (lienzo 360 × 232) -->
          <div class="canvas relative mt-[35px] w-full max-w-[360px]" style="--canvas: 360; aspect-ratio: 360 / 232" aria-hidden="true">
            <div class="canvas-inner absolute inset-0">
              <span class="absolute top-[1.5em] left-[20.5em] size-[214em] rounded-full border border-[#47665f]"></span>
              <span class="absolute top-[1.5em] left-[140.5em] size-[214em] rounded-full border border-[#47665f]"></span>
              <span class="absolute top-[98.7em] left-[172em] size-[18em] rotate-45 bg-mint"></span>
              <p class="absolute top-[219em] left-[64em] font-mono whitespace-nowrap text-slate">
                <span class="text-[10em]">exploración ↔ revisión</span>
              </p>
            </div>
          </div>
        </div>

        <ol>
          {
            pasos.map((paso, i) => (
              <li class="grid grid-cols-[48px_1fr] gap-x-4 border-t border-edge py-[30px] sm:grid-cols-[60px_1fr] sm:gap-x-6">
                <span class="font-mono text-[22px] text-mint">{String(i + 1).padStart(2, '0')}</span>
                <div class="flex flex-col gap-3.5">
                  <h3 class="font-display text-[clamp(22px,2vw,28px)] tracking-[-0.01em]">{paso.titulo}</h3>
                  <p class="body-copy text-[15px]">{paso.texto}</p>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    </section>

    <!-- Cierre del proyecto -->
    <section class="container-page grid gap-12 py-[72px] lg:grid-cols-[740fr_508fr] lg:gap-12">
      <div id="solucion" class="flex scroll-mt-4 flex-col rounded-xl bg-mint p-8 text-mint-ink md:p-10">
        <p class="note">03 / solución</p>
        <h2 class="mt-5 font-display text-[clamp(36px,3.4vw,48px)] leading-[1.1] font-bold tracking-[-0.03em]">
          La solución,<br />con sus decisiones.
        </h2>
        <p class="mt-6 text-base leading-[1.65] text-mint-muted">
          Un videojuego en Unity protagonizado por un barco pirata, con música compuesta especialmente para
          el juego.
        </p>
      </div>
      <Columna
        id="aprendizajes"
        class="lg:mt-9"
        etiqueta="// 04 / aprendizajes"
        titulo="Lo que cambia después."
        texto="Agregar qué aprendí, cuál fue el mayor desafío y qué exploraría en una siguiente iteración."
      />
    </section>

    <OtrosProyectos actual="02" />
  </main>
  <Footer label="← Volver al índice de proyectos" href="/portfolio#proyectos" />
</Layout>
```

### `src/pages/proyectos/proyecto-03.astro`

```astro
---
/** GuIA — Detalle (diseño: Figma frame 124:7005, "Proyecto personal 03"). */
import Layout from '../../layouts/Layout.astro';
import DetalleNav from '../../components/proyecto/DetalleNav.astro';
import Ruta from '../../components/proyecto/Ruta.astro';
import Titulo from '../../components/proyecto/Titulo.astro';
import Datos from '../../components/proyecto/Datos.astro';
import Leyenda from '../../components/proyecto/Leyenda.astro';
import IndiceLectura from '../../components/proyecto/IndiceLectura.astro';
import Columna from '../../components/proyecto/Columna.astro';
import OtrosProyectos from '../../components/proyecto/OtrosProyectos.astro';
import ProyectoImagen from '../../components/ProyectoImagen.astro';
import Footer from '../../components/Footer.astro';
import { site } from '../../data/site';
import { getProyecto } from '../../data/proyectos';

const p = getProyecto('03');

// Registro del proceso: todavía sin documentar
const registros = [
  {
    n: '01',
    titulo: 'Plantear',
    pregunta: '¿Qué información ayudó a formular el problema?',
    evidencia: 'Referencias, notas o material de exploración real.',
  },
  {
    n: '02',
    titulo: 'Construir',
    pregunta: '¿Qué alternativas se probaron y con qué criterios se eligió?',
    evidencia: 'Versiones, esquemas o fragmentos del trabajo propio.',
  },
  {
    n: '03',
    titulo: 'Revisar',
    pregunta: '¿Qué se ajustó y qué quedó pendiente?',
    evidencia: 'Cambios y pruebas, solo si se realizaron.',
  },
];
---

<Layout title={`${p.titulo} — ${site.nombre}`} description={p.resumen}>
  <DetalleNav />
  <main>
    <!-- Apertura del proyecto -->
    <section class="container-page flex flex-col gap-10 pt-[34px]">
      <Ruta numero="03" />
      <div class="grid gap-10 lg:grid-cols-[580fr_660fr] lg:items-center lg:gap-14">
        <Titulo
          numero="03"
          titulo={p.titulo}
          subtitulo={p.subtitulo}
          estado={p.estado}
          size="lg"
          anotacion="// pensar en conexiones, no en piezas aisladas"
        />
        <div class="flex flex-col gap-4">
          <ProyectoImagen imagen={p.imagen} eager />
          <Leyenda texto="Pantalla de inicio de GuIA." />
        </div>
      </div>
      <Datos datos={p.datos} />
      <IndiceLectura numero="03" />
    </section>

    <!-- Planteamiento -->
    <section
      id="contexto"
      class="container-page grid scroll-mt-4 gap-12 pt-16 pb-[72px] lg:grid-cols-[320px_1fr_1fr] lg:gap-x-24"
    >
      <div class="flex flex-col gap-4">
        <p class="note text-mint">01 / planteamiento</p>
        <h2 class="font-display text-[clamp(34px,3.1vw,44px)] leading-[1.08] font-bold tracking-[-0.034em]">
          Primero,<br />la pregunta.
        </h2>
        <p class="body-copy mt-4 text-sm">
          Proyecto desarrollado para un hackathon escolar. Ganó el premio a la ejecución.
        </p>
      </div>
      <Columna
        etiqueta="// contexto"
        titulo="Entender el escenario."
        texto="En un hackathon escolar, cada equipo de alumnos tiene que organizarse para sacar adelante su proyecto."
        estado=""
      />
      <Columna
        etiqueta="// objetivo"
        titulo="Definir el desafío."
        texto="Que cada alumno elija su rol (TIMI, que es UX/UI, Front-End, Back-End o Hardware) y que el equipo se organice a través de tareas."
        estado=""
      />
    </section>

    <!-- Registro del proceso -->
    <section id="proceso" class="scroll-mt-4 bg-surface">
      <div class="container-page py-16">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="flex flex-col gap-3">
            <p class="note text-mint">02 / proceso</p>
            <h2 class="font-display text-[clamp(36px,3.4vw,48px)] leading-[1.08] font-bold tracking-[-0.03em]">
              Detrás de cada resultado,<br />una decisión.
            </h2>
          </div>
          <p class="body-copy text-sm lg:w-[496px]">
            Guion para documentar decisiones reales. Completar con el proceso que efectivamente se realizó.
          </p>
        </div>

        <ol class="mt-8">
          {
            registros.map((r) => (
              <li class="grid gap-x-6 gap-y-5 border-t border-edge pt-7 pb-8 md:grid-cols-[278px_1fr] lg:grid-cols-[278px_1fr_340px]">
                <div class="flex flex-col gap-2">
                  <p class="font-mono text-xs text-mint">REGISTRO_{r.n}</p>
                  <h3 class="font-display text-[28px]">{r.titulo}</h3>
                </div>
                <div class="flex flex-col gap-3">
                  <p class="font-mono text-[10px] text-code-blue">PREGUNTA</p>
                  <p class="body-copy text-[15px]">{r.pregunta}</p>
                </div>
                <div class="flex flex-col gap-3 md:col-start-2 lg:col-start-auto">
                  <p class="font-mono text-[10px] text-code-violet">EVIDENCIA POR AGREGAR</p>
                  <p class="body-copy text-sm">{r.evidencia}</p>
                </div>
              </li>
            ))
          }
        </ol>
        <p class="note mt-8 text-slate">// cada registro se completará con información del proyecto</p>
      </div>
    </section>

    <!-- Solución del proyecto -->
    <section id="solucion" class="container-page scroll-mt-4 pt-[72px] pb-[72px]">
      <p class="note text-mint">03 / solución</p>
      <div class="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[640fr_616fr]">
        <div class="flex flex-col gap-7">
          <h2 class="font-display text-[clamp(40px,3.8vw,54px)] leading-[1.08] font-bold tracking-[-0.034em]">
            Hacer visible<br />lo que se resolvió.
          </h2>
          <p class="body-copy text-[17px]">
            GuIA permite que cada alumno elija su rol y organiza el trabajo del equipo en tareas. Me encargué
            del back-end.
          </p>
        </div>
        <div class="min-w-0 rounded-xl border border-edge bg-panel p-6 md:p-8 lg:mt-3">
          <div class="flex items-center justify-between border-b border-edge pb-[22px] font-mono text-[15px]">
            <span class="text-code-blue">pregunta</span>
            <span class="font-sans text-2xl text-slate" aria-hidden="true">→</span>
            <span class="text-mint">solución</span>
          </div>
          <pre
            class="overflow-x-auto pt-5 font-mono text-[clamp(14px,1.2vw,17px)] leading-[32px] text-mist">{`{
  objetivo: "organizar equipos por roles y tareas",
  roles: ["TIMI", "Front-End", "Back-End", "Hardware"],
  resultado: "premio a la ejecución"
}`}</pre>
        </div>
      </div>
    </section>

    <!-- Aprendizajes -->
    <section id="aprendizajes" class="container-page grid scroll-mt-4 gap-10 pb-[72px] lg:grid-cols-[360px_1fr]">
      <div class="flex flex-col gap-4">
        <p class="note text-mint">04 / aprendizajes</p>
        <span class="font-mono text-[60px] leading-none text-mint" aria-hidden="true">/* */</span>
      </div>
      <Columna
        etiqueta="// reflexión_personal"
        titulo="Una versión más de mí."
        texto="Agregar qué aprendí al producir este proyecto, qué decisiones volvería a tomar y qué problema me gustaría explorar después."
      />
    </section>

    <OtrosProyectos actual="03" />
  </main>
  <Footer label="← Volver al índice de proyectos" href="/portfolio#proyectos" />
</Layout>
```

### `src/styles/global.css`

```css
@import "tailwindcss";
@import "@fontsource-variable/space-grotesk";
@import "@fontsource-variable/inter";
@import "@fontsource/ibm-plex-mono/400.css";
@import "@fontsource/ibm-plex-mono/500.css";
@import "@fontsource/ibm-plex-mono/600.css";

/* Tokens tomados de los frames de Facundo en Figma */
@theme {
  --color-night: #0c1018;
  --color-surface: #121924;
  --color-raised: #192332;
  --color-edge: #2a3544;
  --color-snow: #f1f3ef;
  --color-mist: #a7b2c2;
  --color-slate: #7e8da3;
  --color-mint: #8cf0cb;
  --color-mint-ink: #091211;
  --color-mint-deep: #152f2c;
  --color-glitch: #f48d9d;
  --color-mint-muted: #21483d;
  --color-panel: #162332;
  --color-code-blue: #81d7f7;
  --color-code-violet: #baa3f6;

  --font-display: "Space Grotesk Variable", "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Los tamaños estándar usan el interlineado "normal" de Figma;
     cuando el diseño indica otro, se agrega leading-[…] */
  --text-xs--line-height: normal;
  --text-sm--line-height: normal;
  --text-base--line-height: normal;
  --text-lg--line-height: normal;
  --text-xl--line-height: normal;

  --shadow-float: 0 24px 60px 0 rgb(0 0 0 / 0.25);

  --animate-blink: blink 1.1s steps(1, end) infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
}

@layer base {
  html {
    scroll-behavior: smooth;
    /* Figma usa interlineado "normal" salvo donde se indica otro valor */
    line-height: normal;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    @apply bg-night font-sans text-snow antialiased;
  }

  ::selection {
    @apply bg-mint text-mint-ink;
  }
}

/* Contenedor de sección: 1440px máx., márgenes 20 / 40 / 72px */
@utility container-page {
  @apply mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[72px];
}

/* Anotación monoespaciada de 12px (p. ej. "01 / acerca_de_mí") */
@utility note {
  @apply font-mono text-xs leading-[1.5];
}

/* Texto de cuerpo Inter con interlineado 1.65 */
@utility body-copy {
  @apply font-sans leading-[1.65] text-mist;
}

/*
 * Ilustraciones escalables: el contenedor define 1em = 1px del diseño
 * (ancho del lienzo en --canvas), así cada medida en "em" escala con la tarjeta.
 */
@utility canvas {
  container-type: inline-size;
}
@utility canvas-inner {
  font-size: calc(100cqw / var(--canvas));
}
```

### `public/images/consola-indicadores.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="43" height="9" viewBox="0 0 43 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Indicadores de ventana" clip-path="url(#clip0_0_4)">
<circle id="Indicador" cx="4.5" cy="4.5" r="4.5" fill="#F48D9D"/>
<circle id="Indicador_2" cx="21.5" cy="4.5" r="4.5" fill="#E7C984"/>
<circle id="Indicador_3" cx="38.5" cy="4.5" r="4.5" fill="#8CF0CB"/>
</g>
<defs>
<clipPath id="clip0_0_4">
<rect width="43" height="9" fill="white"/>
</clipPath>
</defs>
</svg>
```

### `public/images/emblema-campo-interior.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Campo interior" cx="163" cy="163" r="162.5" stroke="#2A3544"/>
</svg>
```

### `public/images/emblema-campo-orbital.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Campo orbital" cx="210" cy="210" r="209.5" stroke="#2A3544"/>
</svg>
```

### `public/images/emblema-orbita-conexion.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="436" height="344" viewBox="0 0 436 344" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="stroke0_0_6" fill="white">
<path d="M5.32718 312.033C-48.9023 147.522 326.533 -64.6747 422.477 18.7733C514.25 147.522 112.743 440.782 5.32718 312.033Z"/>
</mask>
<path id="&#195;&#147;rbita de conexi&#195;&#179;n" d="M5.32718 312.033C-48.9023 147.522 326.533 -64.6747 422.477 18.7733C514.25 147.522 112.743 440.782 5.32718 312.033Z" stroke-width="2" stroke="#598477" mask="url(#stroke0_0_6)"/>
</svg>
```

### `public/images/emblema-punto-orbital.svg`

```svg
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Punto orbital" cx="6" cy="6" r="6" fill="#8CF0CB"/>
</svg>
```

---

Fin del archivo. Si hiciste cambios, pedile a la IA la versión actualizada de este `CONTINUAR.md`.
