export type Dato = { etiqueta: string; valor: string; detalle: string };

export type Proyecto = {
  numero: '01' | '02' | '03';
  titulo: string;
  /** Texto corto de la tarjeta en la página principal */
  resumen: string;
  /** Bajada del título en la página de detalle */
  subtitulo: string;
  /** Leyenda sobre la ilustración ("01 / composición · estructura · ritmo") */
  coordenada: string;
  herramientas: string;
  estado: string;
  /** Rol, herramientas y contexto (cabecera de la página de detalle) */
  datos: Dato[];
  /** Ruta de la página de detalle. Sin href, la tarjeta se muestra sin enlace. */
  href?: string;
};

const datosPorCompletar: Dato[] = [
  { etiqueta: 'ROL EN EL PROYECTO', valor: 'Por completar', detalle: 'Indicar responsabilidades reales.' },
  { etiqueta: 'HERRAMIENTAS', valor: 'Por completar', detalle: 'Agregar las herramientas utilizadas.' },
  { etiqueta: 'CONTEXTO Y FECHA', valor: 'Por completar', detalle: 'Precisar alcance y período.' },
];

export const proyectos: Proyecto[] = [
  {
    numero: '01',
    titulo: 'Proyecto personal 01',
    resumen: 'Un espacio para presentar la idea, sus decisiones y su desarrollo.',
    subtitulo: 'Un espacio para contar cómo una idea toma forma.',
    coordenada: '01 / composición · estructura · ritmo',
    herramientas: 'Herramientas: por completar',
    estado: 'Rol y contexto por documentar',
    datos: datosPorCompletar,
    href: '/proyectos/proyecto-01',
  },
  {
    numero: '02',
    titulo: 'Proyecto personal 02',
    resumen: 'Un espacio para explorar el contexto, la forma y la solución.',
    subtitulo: 'Otro punto de vista. Un nuevo espacio para explorar.',
    coordenada: '02 / forma · luz · espacio',
    herramientas: 'Herramientas: por completar',
    estado: 'Rol y contexto por documentar',
    datos: datosPorCompletar,
    href: '/proyectos/proyecto-02',
  },
  {
    numero: '03',
    titulo: 'Proyecto personal 03',
    resumen: 'Un espacio para compartir la lógica, el proceso y lo aprendido.',
    subtitulo: 'De una pregunta a un sistema de posibilidades.',
    coordenada: '03 / lógica · conexión · posibilidad',
    herramientas: 'Herramientas: por completar',
    estado: 'Rol y contexto por documentar',
    datos: datosPorCompletar,
    href: '/proyectos/proyecto-03',
  },
];

export const getProyecto = (numero: Proyecto['numero']) => proyectos.find((p) => p.numero === numero)!;
