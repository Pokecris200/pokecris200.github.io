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
  imageUrl?: string;
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
    itchUrl: 'https://pokecris200.itch.io',
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
    itchUrl: 'https://pokecris200.itch.io',
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
    itchUrl: 'https://pokecris200.itch.io',
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
    itchUrl: 'https://pokecris200.itch.io',
    isPending: true,
    accentColor: '#25465b'
  },
  {
    id: 'la-peor-noche-del-campamento',
    title: 'La peor noche del campamento',
    category: 'game-jams',
    categoryLabel: { es: 'Game Jams', en: 'Game Jams' },
    tagline: { es: 'GAME JAM / COMBATE 3D Y SUPERVIVENCIA', en: 'GAME JAM / 3D COMBAT & SURVIVAL' },
    description: {
      es: 'Juego de combate 3D en tercera persona desarrollado en Game Jam. Encarna a un campista armado con una sartén y acompañado por su amiga ardilla para detener un ritual oscuro antes del amanecer.',
      en: 'Third-person 3D action combat Game Jam project. Play as a camper armed with a sturdy frying pan and a squirrel companion to disrupt an occult ritual before sunrise.'
    },
    technologies: ['Unity 3D', 'C#', 'Third-Person Combat', 'AI Behaviors', 'PM & Integration'],
    itchUrl: 'https://holamijo.itch.io/la-peor-noche-del-campamento',
    isPending: false,
    imageUrl: './projects/la-peor-noche-del-campamento.png',
    accentColor: '#34a0a4'
  },
  {
    id: 'nostalgia-invaders',
    title: 'Nostalgia Invaders',
    category: 'game-jams',
    categoryLabel: { es: 'Game Jams', en: 'Game Jams' },
    tagline: { es: 'GAME JAM / ACCIÓN RETRO', en: 'GAME JAM / RETRO ACTION' },
    description: {
      es: 'Un homenaje a los recuerdos y juegos de infancia: conduce tu Tron Bike y dispara bolas de Pac-Man para enfrentar al gran Dios Cthulhu en un shooter de acción trepidante.',
      en: 'A tribute to childhood memories and classics: ride your Tron Bike and shoot Pac-Man pellets to battle the mighty God Cthulhu in a fast-paced retro arcade shooter.'
    },
    technologies: ['Unity', 'C#', '2D Gameplay', 'Retro Arcade', 'Game Jam'],
    itchUrl: 'https://pokecris200.itch.io/nostalgia-invaders',
    isPending: false,
    imageUrl: './projects/nostalgia-invaders.png',
    accentColor: '#b5e48c'
  },
  {
    id: 'noend-colombia',
    title: 'NoEnd Colombia',
    category: 'game-jams',
    categoryLabel: { es: 'Game Jams', en: 'Game Jams' },
    tagline: { es: 'GAME JAM / ROGUELITE RUNNER', en: 'GAME JAM / ROGUELITE RUNNER' },
    description: {
      es: 'Roguelite endless runner vertical de ritmo rápido creado para Game Jam. Desciende a las profundidades del abismo, derrota hordas de enemigos y sobrevive para batir tu récord.',
      en: 'Fast-paced vertical roguelite endless runner created for a Game Jam. Descend into the depths of the abyss, defeat waves of enemies, and survive to beat your high score.'
    },
    technologies: ['Unity', 'C#', 'Roguelite', 'Endless Runner', 'Procedural Generation'],
    itchUrl: 'https://hamsoft23.itch.io/noend-colombia',
    isPending: false,
    imageUrl: './projects/noend-colombia.png',
    accentColor: '#184e77'
  }
];
