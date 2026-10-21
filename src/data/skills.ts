export interface SkillGroup {
  id: string;
  title: { es: string; en: string };
  skills: string[];
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
      'Patrones de diseño',
      'Object Pooling',
      'State Machines',
      'Git / GitHub / GitLab'
    ]
  },
  {
    id: 'qa',
    title: { es: 'QA & Testing', en: 'QA & Testing' },
    skills: [
      'Reporte de bugs',
      'Reproducción',
      'Severidad y prioridad',
      'Testing funcional',
      'Testing exploratorio',
      'Bug Life Cycle',
      'Logs',
      'Depuración'
    ]
  },
  {
    id: 'management',
    title: { es: 'Project Management', en: 'Project Management' },
    skills: [
      'Scrum',
      'Kanban',
      'Planificación',
      'Estimación',
      'Presupuestos',
      'Gestión de riesgos',
      'Hitos',
      'Jira',
      'ClickUp',
      'Trello',
      'Google Workspace',
      'Documentación'
    ]
  },
  {
    id: 'soft-skills',
    title: { es: 'Soft Skills', en: 'Soft Skills' },
    skills: [
      'Comunicación asertiva',
      'Liderazgo',
      'Orientación al detalle',
      'Resiliencia'
    ]
  }
];
