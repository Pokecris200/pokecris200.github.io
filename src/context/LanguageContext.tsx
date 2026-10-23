import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.about': 'Sobre mí',
    'nav.cv': 'CV',
    
    // Hero
    'hero.badge': 'DESARROLLADOR UNITY | GAME PROGRAMMER',
    'hero.name': 'Cristian Forero.',
    'hero.intro': 'Ingeniero de Sistemas y Desarrollador Unity. Especializado en programar mecánicas de juego fluidas, arquitectura en C# y dar vida a mundos jugables.',
    'hero.viewPortfolio': 'Ver portafolio',
    'hero.banner': 'DESARROLLO DE VIDEOJUEGOS / PROTOTIPADO Y EXPERIMENTACIÓN',
    'hero.explore': 'Explorar',
    'hero.comingSoonTitle': 'ARTE EN DESARROLLO',
    'hero.comingSoonSubtitle': 'Visual Concept · Coming Soon',

    // Portfolio
    'portfolio.index': '01 / PORTAFOLIO',
    'portfolio.title': 'Juegos, ideas y experimentos.',
    'portfolio.subtitle': 'De la primera mecánica al juego terminado. Los proyectos que ves aquí son ejemplos para presentar la estructura.',
    'portfolio.tab.all': 'Todos',
    'portfolio.tab.complete': 'Completos',
    'portfolio.tab.learning': 'Aprendizaje',
    'portfolio.tab.gamejams': 'Game Jams',
    'portfolio.itchLink': 'Ver en itch.io',
    'portfolio.pendingLink': 'Enlace pendiente',
    'portfolio.exampleBadge': 'EJEMPLO',

    // About
    'about.index': '02 / SOBRE MÍ',
    'about.title': 'Detrás de cada juego, una nueva forma de aprender.',
    'about.p1': 'Soy Cristian, desarrollador de videojuegos e ingeniero de sistemas.',
    'about.p2': 'Me apasiona trabajar en proyectos diseñados para conectar y despertar emociones en las personas. Me defino como el puente entre la visión artística y la viabilidad técnica: traduzco conceptos creativos en mecánicas jugables, fluidas y optimizadas en Unity (C#).',
    'about.p3': 'Combino arquitectura de software sólida (patrones de diseño, código limpio) con un enfoque riguroso en pruebas, calidad y trabajo ágil en equipo para dar vida a experiencias estables y memorables.',
    'about.photoPlaceholder': 'Tu foto aquí',
    'about.skillsTitle': 'Stack técnico y habilidades',
    'about.skillsSubtitle': 'Código, calidad, procesos y personas.',
    'about.contactButton': 'Enviar correo',
    'about.copied': '¡Copiado al portapapeles!',
    'about.copyEmail': 'Copiar correo',

    // Footer
    'footer.copyright': '© 2026 Cristian Forero',
    'footer.backToTop': 'Volver al inicio',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About me',
    'nav.cv': 'CV',

    // Hero
    'hero.badge': 'UNITY DEVELOPER | GAME PROGRAMMER',
    'hero.name': 'Cristian Forero.',
    'hero.intro': 'Systems Engineer & Unity Game Developer. Focused on crafting fluid gameplay mechanics, solid C# architecture, and bringing playable worlds to life.',
    'hero.viewPortfolio': 'View portfolio',
    'hero.banner': 'GAME DEVELOPMENT / PROTOTYPING & EXPERIMENTATION',
    'hero.explore': 'Explore',
    'hero.comingSoonTitle': 'ARTWORK IN PROGRESS',
    'hero.comingSoonSubtitle': 'Visual Concept · Coming Soon',

    // Portfolio
    'portfolio.index': '01 / PORTFOLIO',
    'portfolio.title': 'Games, ideas & experiments.',
    'portfolio.subtitle': 'From the initial mechanic to the finished game. The projects shown here serve as a showcase of structure and pipeline.',
    'portfolio.tab.all': 'All',
    'portfolio.tab.complete': 'Complete',
    'portfolio.tab.learning': 'Learning',
    'portfolio.tab.gamejams': 'Game Jams',
    'portfolio.itchLink': 'View on itch.io',
    'portfolio.pendingLink': 'Link pending',
    'portfolio.exampleBadge': 'EXAMPLE',

    // About
    'about.index': '02 / ABOUT ME',
    'about.title': 'Behind every game, a new way to learn.',
    'about.p1': "I'm Cristian, game developer and systems engineer.",
    'about.p2': 'I am passionate about building games designed to connect and spark emotions. I see myself as the bridge between artistic vision and technical feasibility: translating creative ideas into responsive, fluid, and optimized gameplay in Unity (C#).',
    'about.p3': 'I combine robust software architecture (design patterns, clean code) with rigorous testing, QA, and agile team workflows to deliver stable, memorable experiences.',
    'about.photoPlaceholder': 'Your photo here',
    'about.skillsTitle': 'Technical stack & skill matrix',
    'about.skillsSubtitle': 'Code, quality, processes, and people.',
    'about.contactButton': 'Send email',
    'about.copied': 'Copied to clipboard!',
    'about.copyEmail': 'Copy email',

    // Footer
    'footer.copyright': '© 2026 Cristian Forero',
    'footer.backToTop': 'Back to top',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('cf_lang') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('cf_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
