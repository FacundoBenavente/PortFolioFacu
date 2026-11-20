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
