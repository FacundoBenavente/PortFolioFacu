export type Proyecto = {
  numero: '01' | '02' | '03';
  titulo: string;
  /** Texto corto de la tarjeta en la página principal */
  resumen: string;
  /** Leyenda sobre la ilustración ("01 / composición · estructura · ritmo") */
  coordenada: string;
  herramientas: string;
  estado: string;
  /**
   * Ruta de la página de detalle. Solo se define cuando la página existe;
   * mientras tanto la tarjeta se muestra sin enlace.
   */
  href?: string;
};

export const proyectos: Proyecto[] = [
  {
    numero: '01',
    titulo: 'Proyecto personal 01',
    resumen: 'Un espacio para presentar la idea, sus decisiones y su desarrollo.',
    coordenada: '01 / composición · estructura · ritmo',
    herramientas: 'Herramientas: por completar',
    estado: 'Rol y contexto por documentar',
    href: '/proyectos/proyecto-01',
  },
  {
    numero: '02',
    titulo: 'Proyecto personal 02',
    resumen: 'Un espacio para explorar el contexto, la forma y la solución.',
    coordenada: '02 / forma · luz · espacio',
    herramientas: 'Herramientas: por completar',
    estado: 'Rol y contexto por documentar',
  },
  {
    numero: '03',
    titulo: 'Proyecto personal 03',
    resumen: 'Un espacio para compartir la lógica, el proceso y lo aprendido.',
    coordenada: '03 / lógica · conexión · posibilidad',
    herramientas: 'Herramientas: por completar',
    estado: 'Rol y contexto por documentar',
  },
];
