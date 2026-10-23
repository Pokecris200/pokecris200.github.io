export type SkillItem = string | { es: string; en: string };

export interface SkillGroup {
  id: string;
  title: { es: string; en: string };
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: { es: 'Programación', en: 'Programming' },
    skills: [
      'Unity 2D / 3D',
      'C#',
      'Python',
      'Java',
      'SOLID',
      'Clean Code',
      { es: 'Patrones de diseño', en: 'Design Patterns' },
      'Object Pooling',
      'State Machines',
      'Git / GitHub / GitLab'
    ]
  },
  {
    id: 'qa',
    title: { es: 'QA & Testing', en: 'QA & Testing' },
    skills: [
      { es: 'Reporte de bugs', en: 'Bug Reporting' },
      { es: 'Reproducción', en: 'Bug Reproduction' },
      { es: 'Severidad y prioridad', en: 'Severity & Priority' },
      { es: 'Testing funcional', en: 'Functional Testing' },
      { es: 'Testing exploratorio', en: 'Exploratory Testing' },
      'Bug Life Cycle',
      'Logs',
      { es: 'Depuración', en: 'Debugging' }
    ]
  },
  {
    id: 'management',
    title: { es: 'Project Management', en: 'Project Management' },
    skills: [
      'Scrum',
      'Kanban',
      { es: 'Planificación', en: 'Planning' },
      { es: 'Estimación', en: 'Estimation' },
      { es: 'Presupuestos', en: 'Budgeting' },
      { es: 'Gestión de riesgos', en: 'Risk Management' },
      { es: 'Hitos', en: 'Milestones' },
      'Jira',
      'ClickUp',
      'Trello',
      'Google Workspace',
      { es: 'Documentación', en: 'Documentation' }
    ]
  },
  {
    id: 'soft-skills',
    title: { es: 'Soft Skills', en: 'Soft Skills' },
    skills: [
      { es: 'Comunicación asertiva', en: 'Assertive Communication' },
      { es: 'Liderazgo', en: 'Leadership' },
      { es: 'Orientación al detalle', en: 'Attention to Detail' },
      { es: 'Resiliencia', en: 'Resilience' }
    ]
  }
];
