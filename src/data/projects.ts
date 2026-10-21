export type ProjectCategory = 'completos' | 'aprendizaje' | 'game-jams';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  technologies: string[];
  itchUrl?: string;
  githubUrl?: string;
  isPending?: boolean;
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: 'orbital',
    title: 'Orbital',
    category: 'completos',
    categoryLabel: { es: 'Proyectos completos', en: 'Complete Projects' },
    tagline: { es: 'EJEMPLO / PORTADA PROVISIONAL', en: 'EXAMPLE / PLACEHOLDER COVER' },
    description: {
      es: 'Ejemplo de juego de exploración. Sustituye este texto por el objetivo, tu contribución y el resultado del proyecto.',
      en: 'Space exploration game example. Replace this text with the objective, your contribution, and the project outcome.'
    },
    technologies: ['Unity 3D', 'C#', 'Física orbital', 'Shader Graph'],
    itchUrl: 'https://itch.io',
    isPending: true,
    accentColor: '#34a0a4'
  },
  {
    id: 'echo-valley',
    title: 'Echo Valley',
    category: 'completos',
    categoryLabel: { es: 'Proyectos completos', en: 'Complete Projects' },
    tagline: { es: 'EJEMPLO / PORTADA PROVISIONAL', en: 'EXAMPLE / PLACEHOLDER COVER' },
    description: {
      es: 'Ejemplo de aventura de puzles. Un espacio para contar cómo llevaste una idea desde el prototipo hasta su versión final.',
      en: 'Puzzle adventure game example. A space to explain how you took an idea from prototype to final release.'
    },
    technologies: ['Unity', 'C#', 'Level Design', 'State Machine'],
    itchUrl: 'https://itch.io',
    isPending: true,
    accentColor: '#184e77'
  },
  {
    id: 'movimiento-2d',
    title: 'Movimiento 2D',
    category: 'aprendizaje',
    categoryLabel: { es: 'Proyectos de aprendizaje', en: 'Learning Projects' },
    tagline: { es: 'ESTUDIO DE FÍSICAS', en: 'PHYSICS STUDY' },
    description: {
      es: 'Ejemplo de estudio de movimiento. Describe aquí la mecánica que exploraste y qué aprendiste al desarrollarla.',
      en: 'Movement mechanics research study. Describe the mechanic you explored and the core insights learned.'
    },
    technologies: ['Unity 2D', 'Rigidbody2D', 'Kinematics', 'C#'],
    itchUrl: 'https://itch.io',
    isPending: true,
    accentColor: '#1a759f'
  },
  {
    id: 'ia-enemigos',
    title: 'IA de enemigos',
    category: 'aprendizaje',
    categoryLabel: { es: 'Proyectos de aprendizaje', en: 'Learning Projects' },
    tagline: { es: 'COMPORTAMIENTO Y PATRONES', en: 'BEHAVIORS & PATTERNS' },
    description: {
      es: 'Ejemplo de experimento con comportamientos. Añade el reto técnico, tu enfoque y los aprendizajes del proceso.',
      en: 'Enemy behavior experimental sandbox. Add the technical challenge, your approach, and key takeaways.'
    },
    technologies: ['Unity', 'NavMesh', 'FSM / Behaviour Trees', 'C#'],
    itchUrl: 'https://itch.io',
    isPending: true,
    accentColor: '#25465b'
  },
  {
    id: 'last-light',
    title: 'Last Light',
    category: 'game-jams',
    categoryLabel: { es: 'Game Jams', en: 'Game Jams' },
    tagline: { es: 'GLOBAL GAME JAM / 48H', en: 'GLOBAL GAME JAM / 48H' },
    description: {
      es: 'Ejemplo de proyecto de Game Jam. Cuenta el tema, las limitaciones y tu aportación durante el desarrollo.',
      en: 'Game Jam speedrun project. Explain the theme constraints, mechanics designed, and sprint contributions.'
    },
    technologies: ['Unity', 'C#', '2D Lighting', 'Post-Processing'],
    itchUrl: 'https://itch.io',
    isPending: true,
    accentColor: '#b5e48c'
  },
  {
    id: 'tiny-worlds',
    title: 'Tiny Worlds',
    category: 'game-jams',
    categoryLabel: { es: 'Game Jams', en: 'Game Jams' },
    tagline: { es: 'LUDUM DARE / PROTOTIPO', en: 'LUDUM DARE / PROTOTYPE' },
    description: {
      es: 'Ejemplo de juego creado con tiempo limitado. Sustituye este contenido por la experiencia de tu próxima jam.',
      en: 'Time-constrained game prototype. Swap this content with stories and learnings from your next jam.'
    },
    technologies: ['Unity', 'C#', 'Low Poly', 'Audio Integration'],
    itchUrl: 'https://itch.io',
    isPending: true,
    accentColor: '#34a0a4'
  }
];
