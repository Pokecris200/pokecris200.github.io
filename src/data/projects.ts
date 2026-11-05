export type ProjectCategory = 'completos' | 'aprendizaje' | 'game-jams';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  challenge?: { es: string; en: string };
  technologies: string[];
  itchUrl?: string;
  githubUrl?: string;
  isPending?: boolean;
  accentColor?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'la-peor-noche-del-campamento',
    title: 'La peor noche del campamento',
    category: 'game-jams',
    categoryLabel: { es: 'Game Jams', en: 'Game Jams' },
    tagline: { es: 'GAME JAM / COMBATE 3D Y SUPERVIVENCIA', en: 'GAME JAM / 3D COMBAT & SURVIVAL' },
    description: {
      es: 'Juego de acción y combate en tercera persona desarrollado en Game Jam. Encarna a un campista armado con una sartén y acompañado por su fiel ardilla para desbaratar un oscuro ritual en el bosque antes del amanecer.',
      en: 'Third-person 3D action combat adventure developed for a Game Jam. Play as a camper armed with a sturdy frying pan and a loyal squirrel companion to disrupt an occult woodland ritual before sunrise.'
    },
    challenge: {
      es: 'Integración fluida del combate cuerpo a cuerpo y la IA enemiga: sincronización de la mecánica de ataque con animaciones dinámicas, hitboxes y efectos de sonido en tiempo real, junto con la implementación de un sistema de navegación con NavMesh para coordinar el patrullaje, detección y persecución de los enemigos principales.',
      en: 'Fluid melee combat and enemy AI integration: synchronizing attack mechanics with dynamic animations, hitboxes, and real-time sound effects, coupled with generating a NavMesh pathfinding system to coordinate enemy patrolling, detection, and pursuit in a 3D environment.'
    },
    technologies: ['Unity 3D', 'C#', 'Third-Person Combat', 'NavMesh AI', 'Animation & Audio Sync'],
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
      es: 'Un homenaje a los recuerdos y clásicos de infancia: conduce tu Tron Bike y dispara proyectiles inspirados en Pac-Man para enfrentar al colosal Dios Cthulhu en un shooter de acción arcade vertiginoso.',
      en: 'A tribute to childhood memories and arcade classics: ride your Tron Bike and launch Pac-Man projectiles to battle the mighty God Cthulhu in a fast-paced retro arcade shooter.'
    },
    challenge: {
      es: 'Desarrollo de la física y respuesta de control de la moto: más allá del desplazamiento horizontal tradicional en el eje X, se programó un sistema cinemático con inclinación angular (tilt) e inercia dependiente de la aceleración y la dirección del viraje, transmitiendo una sensación arcade ágil y con peso visual.',
      en: 'Vehicle physics and handling control: beyond standard horizontal movement along the X-axis, implemented angular banking and dynamic tilt based on steering direction and acceleration, delivering responsive arcade feedback with genuine visual weight.'
    },
    technologies: ['Unity', 'C#', 'Vehicle Tilt Physics', 'Kinematics', 'Retro Arcade', 'Game Jam'],
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
      es: 'Roguelite endless runner vertical de ritmo rápido creado para Game Jam. Desciende a las profundidades de un abismo infinito, derrota hordas de enemigos y sobrevive a peligros continuos para batir tu récord.',
      en: 'Fast-paced vertical roguelite endless runner created for a Game Jam. Descend into the depths of the abyss, defeat waves of enemies, and survive hazards to beat your high score.'
    },
    challenge: {
      es: 'Diseño e implementación del movimiento aéreo con caída perpetua: el personaje está en descenso constante por gravedad, por lo que la mecánica clave para suspenderse y maniobrar en el aire fue calcular el retroceso cinético del disparo, equilibrando el impulso físico y la cadencia para lograr un control aéreo responsivo.',
      en: 'Aerial locomotion design under perpetual freefall: the character is in constant gravitational descent, so the core mechanic to stay airborne and maneuver required calculating weapon recoil impulses and kinetic vectors to counter gravity while shooting.'
    },
    technologies: ['Unity', 'C#', 'Recoil Kinematics', 'Aerial Movement', 'Roguelite', 'Procedural Gen'],
    itchUrl: 'https://hamsoft23.itch.io/noend-colombia',
    isPending: false,
    imageUrl: './projects/noend-colombia.png',
    accentColor: '#184e77'
  }
];
