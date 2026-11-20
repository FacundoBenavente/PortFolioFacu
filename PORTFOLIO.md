# Guía del portfolio — Facundo

Esta es la guía para modificar el portfolio, pensada para una persona o para una IA. Explica qué es el sitio, de dónde sale el diseño, cómo está organizado, qué reglas seguir, cómo hacer los cambios comunes y **qué falta construir**.

> **Si sos una IA:** leé esta guía completa antes de editar. Respetá las reglas de la sección 4 y verificá cada cambio con la checklist de la sección 10. Si un pedido contradice esta guía, avisá antes de hacerlo. Si cambiás algo que esta guía describe, actualizá también esta guía.

---

## 1. Resumen rápido

- Sitio **estático de 3 páginas** hecho con **Astro 5 + Tailwind CSS 4**, con estética de consola o terminal en modo oscuro.
- Replica 5 frames de Figma (sección 2). **Dos de las páginas de proyecto todavía no están construidas** (sección 3).
- Los datos personales están en `src/data/site.ts` y los proyectos en `src/data/proyectos.ts`. El resto del contenido está escrito dentro de cada componente.
- La única parte con JavaScript en el navegador es la entrada: con "y" o Enter se pasa al portfolio.

```bash
npm install        # instalar dependencias (una vez)
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera el sitio en dist/ — usalo para verificar
npm run preview    # sirve dist/ localmente
```

| Ruta | Página | Archivo |
|---|---|---|
| `/` | Entrada — consola de bienvenida | `src/pages/index.astro` |
| `/portfolio` | Portfolio principal | `src/pages/portfolio.astro` |
| `/proyectos/proyecto-01` | Detalle del Proyecto 01 | `src/pages/proyectos/proyecto-01.astro` |

---

## 2. Diseño de origen (Figma)

| Dato | Valor |
|---|---|
| Archivo | `Landing Page - TCGCheck` (file key `wUNcTIjnvfx73XhnEAujgI`) |
| Página | `TP 5 - MoodBoard` (node `70:2`) |
| Link base | https://www.figma.com/design/wUNcTIjnvfx73XhnEAujgI/Landing-Page---TCGCheck |

| Frame | Node | Tamaño | Estado |
|---|---|---|---|
| Entrada — Consola de bienvenida | `124:6385` | 1440 × 1000 | ✅ implementado |
| Portfolio principal — Facundo | `124:6436` | 1440 × 3715 | ✅ implementado |
| Proyecto personal 01 — Detalle | `124:6702` | 1440 × 2937 | ⚠️ falta 1 sección |
| Proyecto personal 02 — Detalle | `124:6876` | 1440 × 3113 | ❌ no implementado |
| Proyecto personal 03 — Detalle | `124:7005` | 1440 × 3179 | ❌ no implementado |

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

### Secciones del Proyecto 01

| Sección (Figma) | Node | Implementación |
|---|---|---|
| Navegación principal | `124:6703` | `proyecto/DetalleNav.astro` |
| Cabecera del proyecto | `124:6714` | `proyecto/Cabecera.astro` |
| Presentación visual | `124:6742` | `visuals/Visual01.astro` (variante `hero`) |
| **Lectura del proyecto** | **`124:6796`** | **❌ pendiente** (alto 1181px; va entre la presentación visual y la navegación entre proyectos) |
| Navegación entre proyectos | `124:6853` | `proyecto/OtrosProyectos.astro` |
| Pie de página | `124:6872` | `Footer.astro` |

**Figma es la referencia visual.** Si el diseño cambia, el sitio se actualiza para coincidir con Figma.

---

## 3. Pendientes de construcción

El plan Starter de Figma corta las llamadas del MCP después de cierta cantidad de usos, y el límite se alcanzó a mitad de la implementación. Lo que falta hay que leerlo de Figma cuando el límite se restablezca (o con un plan superior):

1. **Proyecto 01: sección "Lectura del proyecto"** (node `124:6796`). Hay que agregarla en `proyecto-01.astro`, entre la presentación visual y `<OtrosProyectos />`.
2. **Página del Proyecto 02** (frame `124:6876`). Secciones: Navegación (`124:6877`), Apertura de galería (`124:6888`), Contexto y objetivo (`124:6933`), Proceso del proyecto (`124:6944`), Cierre del proyecto (`124:6970`), Navegación entre proyectos (`124:6982`) y Pie (`124:7001`).
3. **Página del Proyecto 03** (frame `124:7005`). Secciones: Navegación (`124:7006`), Apertura del proyecto (`124:7017`), Planteamiento (`124:7085`), Registro del proceso (`124:7100`), Solución (`124:7138`), Aprendizajes (`124:7152`), Navegación entre proyectos (`124:7161`) y Pie (`124:7180`).

Para cada página nueva (receta 8.5):
- Reutilizá `DetalleNav`, `OtrosProyectos` y `Footer`, que tienen el mismo nombre en los tres frames de detalle. Verificalo igual en Figma.
- Creá `src/pages/proyectos/proyecto-0X.astro`.
- Agregá `href: '/proyectos/proyecto-0X'` al proyecto en `src/data/proyectos.ts`. **Hasta que exista la página, el proyecto no tiene `href`**: su tarjeta y su acceso en "Seguí explorando" se muestran sin enlace, para no llevar a un 404.

**No inventes el diseño de las secciones pendientes:** leelo de Figma.

---

## 4. Reglas

1. **Usá los tokens, no hex sueltos** (sección 6): `bg-surface`, `text-mist`, `border-edge`, etc. La única excepción son los colores internos de las ilustraciones (`src/components/visuals/`), que son propios de cada dibujo.
2. **Cada tipo de texto tiene su fuente:** `font-display` (Space Grotesk) para titulares y cifras, `font-sans` (Inter) para el cuerpo y `font-mono` (IBM Plex Mono) para anotaciones, navegación, botones, etiquetas y todo lo que imite código.
3. **El tono es de código y consola:** anotaciones como `// comentario`, `01 / acerca_de_mí` y `proyecto_01`, etiquetas `<proyecto_01>`, símbolos `</>`. Mantené ese lenguaje en el contenido nuevo.
4. **El acento es uno solo: `mint`.** Se usa en índices de sección, links, cifras, el cursor y los botones principales.
5. **Cada sección numerada empieza con una anotación** `<p class="note text-mint">0X / nombre_en_snake_case</p>`. Si agregás o sacás una sección, renumerá.
6. **El contenedor de sección es `container-page`**: máximo 1440px, márgenes de 20, 40 y 72px. Las líneas de borde de la nav y del pie ocupan todo el ancho (el borde va afuera del contenedor).
7. **El layout es mobile-first:** en pantallas chicas todo se apila y desde `lg:` (≥1024px) se usan las columnas de Figma. Los anchos fijos llevan `lg:`.
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
├── public/images/              # SVG y PNG exportados de Figma (sección 7)
└── src/
    ├── data/
    │   ├── site.ts             # nombre, slug, email, roles
    │   └── proyectos.ts        # los 3 proyectos (tarjetas, navegación y detalle)
    ├── layouts/Layout.astro    # <head>, título, descripción
    ├── styles/global.css       # Tailwind + tokens + utilidades
    ├── pages/
    │   ├── index.astro         # entrada (consola)
    │   ├── portfolio.astro     # portfolio principal
    │   └── proyectos/proyecto-01.astro
    └── components/
        ├── Logo.astro          # "</ Facundo."
        ├── Nav.astro           # barra superior (links + botón Hablemos)
        ├── Footer.astro        # pie (© + texto o link a la derecha)
        ├── Pill.astro          # etiqueta redondeada (tone neutral | mint)
        ├── home/               # secciones del portfolio principal
        ├── proyecto/           # piezas de las páginas de detalle
        └── visuals/            # ilustraciones dibujadas en código
```

---

## 6. Tokens de diseño

Están en `@theme`, dentro de `src/styles/global.css`.

| Token | Hex | Uso |
|---|---|---|
| `night` | `#0c1018` | fondo principal |
| `surface` | `#121924` | secciones alternadas, consola |
| `raised` | `#192332` | pills, barra de la consola, cajas |
| `edge` | `#2a3544` | bordes y separadores |
| `snow` | `#f1f3ef` | texto principal |
| `mist` | `#a7b2c2` | texto secundario |
| `slate` | `#7e8da3` | texto terciario y anotaciones grises |
| `mint` | `#8cf0cb` | acento |
| `mint-ink` | `#091211` | texto sobre botón mint |
| `mint-deep` | `#152f2c` | fondo de la pill mint y del identificador de proyecto |
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

Están en `public/images/`. Son SVG y PNG exportados de Figma y no se deben redibujar.

| Archivo | Uso |
|---|---|
| `consola-indicadores.svg` | 3 puntos de la ventana de la consola (entrada) |
| `emblema-*.svg` | campos, órbita y punto del emblema de la portada |
| `tarjeta-01-*.svg` | indicadores, figura y órbita de la ilustración del Proyecto 01 (tarjeta) |
| `detalle-01-*.svg` | lo mismo en la versión grande (página del Proyecto 01) |
| `proyecto-02.png` | render 3D de la tarjeta del Proyecto 02 |

Las ilustraciones son **recursos conceptuales, no capturas reales** (así lo aclaran las leyendas "↳ Recursos visuales conceptuales…"). Cuando haya imágenes reales, reemplazá la ilustración por un `<img>` y borrá la leyenda.

---

## 8. Recetas

### 8.1 Cambiar nombre, email o roles
Editá `src/data/site.ts`. El nombre se actualiza en el logo, la consola, el titular con glitch, el pie y el título de la pestaña. Con el email real, poné `emailEsEjemplo: false` para ocultar "Contacto de ejemplo" y "Reemplazar por tu correo…".

### 8.2 Completar datos de un proyecto
- Tarjeta y navegación: en `src/data/proyectos.ts` editá `titulo`, `resumen`, `herramientas` y `estado`.
- Página de detalle: en `proyecto-0X.astro`, editá las props de `<Cabecera>` (`subtitulo`, `estado`, `nota`, `datos`).

### 8.3 Cambiar textos de la página principal
Cada sección está en `src/components/home/`. Las listas (intereses, cifras, capacidades, hitos de formación) son arrays al principio de cada archivo.

### 8.4 Agregar redes al contacto
En `home/Contacto.astro`, debajo del email, agregá links `font-mono text-[13px] text-mist hover:text-mint`.

### 8.5 Construir una página de proyecto pendiente
1. Leé el frame de Figma por secciones (sección 3, con sus node ids).
2. Creá `src/pages/proyectos/proyecto-0X.astro` con `Layout`, `DetalleNav`, las secciones propias, `<OtrosProyectos actual="0X" />` y `<Footer label="← Volver al índice de proyectos" href="/portfolio#proyectos" />`.
3. Si una sección se repite entre proyectos, convertila en componente dentro de `components/proyecto/`.
4. Agregá `href` al proyecto en `src/data/proyectos.ts`.
5. Actualizá las secciones 2 y 3 de esta guía.

### 8.6 Cambiar colores o fuentes
- Colores: cambialos en `@theme` y actualizá la tabla de la sección 6.
- Fuentes: instalá `@fontsource(-variable)/<fuente>`, importala en `global.css` y cambiá la variable `--font-*`.

---

## 9. Cómo funcionan las ilustraciones

Las ilustraciones (`visuals/`) están **dibujadas con HTML y CSS**, con las medidas exactas de Figma, y escalan con el ancho del contenedor:

- El contenedor lleva la clase `canvas` y `style="--canvas: <ancho en Figma>"`.
- Adentro, `canvas-inner` define `1em = 1px del diseño` (`font-size: calc(100cqw / var(--canvas))`).
- Todas las medidas van en `em` con el valor de Figma: `left-[66.56em]`, `w-[282.88em]`, etc.
- **Trampa:** en un elemento que cambia su propio tamaño de fuente (`text-[8em]`), sus `top`, `left` o `padding` en `em` se miden sobre **esa** fuente. Por eso un texto posicionado se escribe así: `<p class="absolute top-[281.6em] left-[16.64em]"><span class="text-[8em]">…</span></p>`.

| Componente | Lienzo | Dónde |
|---|---|---|
| `Visual01` `variant="card"` | 416 × 320 | tarjeta del Proyecto 01 |
| `Visual01` `variant="hero"` | 1296 × 600 | página del Proyecto 01 |
| `Visual02` | 416 × 320 | tarjeta del Proyecto 02 (imagen) |
| `Visual03` | 416 × 320 | tarjeta del Proyecto 03 |
| `Emblema` | 468 × 484 | portada del portfolio |
| `GlitchName` | en `em` del tamaño del texto (112px) | nombre de la portada |

---

## 10. Checklist de verificación

1. `npm run build` termina sin errores.
2. Revisá cada página a **1440px** (compará con Figma), a **~768px** y a **~375px**.
3. No hay scroll horizontal en celular.
4. Funcionan los links de la navegación, los botones, los accesos a proyectos y "Volver al índice", y en la entrada, "y"/Enter y el clic en "❯ y".
5. Ningún link lleva a una página inexistente (proyectos sin `href` = sin link).
6. No quedaron hex sueltos fuera de `visuals/`.
7. Si cambiaste estructura, tokens o recetas, actualizaste esta guía.

Verificación inicial: las alturas de las secciones quedan a menos de 7px de Figma a 1440px, no hay desbordes a 375px y el build no da errores.

---

## 11. Notas técnicas

- **Node y Astro:** Astro 7 exige Node ≥ 22.23.4 y la máquina original tiene 22.17, por eso Astro está en 5.18. Para actualizar, subí Node y después corré `npm install astro@latest`.
- **Astro 5 no tiene `astro dev --background`.**
- **Navegador headless:** Chrome y Edge headless no bajan de ~500px de ancho. Para probar celular, usá un iframe de 375px o las DevTools.
- **Nombre en el diseño:** Figma usa "Tu nombre" como texto de ejemplo, y en el sitio se reemplazó por `site.nombre` ("Facundo"). El email sigue siendo el de ejemplo del diseño.

---

## 12. Pendientes de contenido

- [ ] Email real y perfiles (`site.ts`, receta 8.1).
- [ ] Proyectos: nombres, descripciones, herramientas, rol y contexto (receta 8.2).
- [ ] Formación: nombres de cursos, instituciones y período.
- [ ] Imágenes reales de los proyectos en lugar de las ilustraciones conceptuales.
- [ ] Construir lo pendiente de la sección 3.
