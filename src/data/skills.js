export const skillsData = [
  {
    category: 'Game Development',
    icon: 'Gamepad2',
    description: 'Creating immersive gaming experiences',
    skills: [
      { name: 'Unity',         level: 90, description: 'Advanced 3D/2D game development' },
      { name: 'C#',            level: 90, description: 'Object-oriented programming expertise' },
      { name: 'Unreal Engine', level: 80, description: 'Blueprint and C++ development' },
      { name: 'C++',           level: 80, description: 'Performance-critical game systems' },
      { name: 'Godot',         level: 80, description: 'Open-source game engine' },
      { name: 'FishNet',       level: 80, description: 'Unity multiplayer networking' },
      { name: 'Photon',        level: 80, description: 'Real-time multiplayer framework' },
      { name: 'Mirror',        level: 80, description: 'Open-source Unity networking' },
    ],
  },
  {
    category: 'Full-Stack Development',
    icon: 'Code2',
    description: 'Building complete web applications',
    skills: [
      { name: 'HTML/CSS',     level: 90, description: 'Semantic markup and modern styling' },
      { name: 'TypeScript',   level: 90, description: 'Type-safe JavaScript development' },
      { name: 'JavaScript',   level: 90, description: 'Core JavaScript development' },
      { name: 'React',        level: 80, description: 'Component-based UI development' },
      { name: 'MongoDB',      level: 80, description: 'NoSQL database management' },
      { name: 'RESTful API',  level: 80, description: 'API design and implementation' },
      { name: 'WebSockets',   level: 80, description: 'Real-time bidirectional communication' },
      { name: 'JWT/OAuth',    level: 80, description: 'Authentication and authorization' },
      { name: 'Python',       level: 80, description: 'Backend development and scripting' },
      { name: 'Flask',        level: 80, description: 'Python web microframework' },
      { name: 'SQLite',       level: 80, description: 'Embedded relational database' },
      { name: 'PostgreSQL',   level: 80, description: 'Relational database management' },
      { name: 'MySQL',        level: 80, description: 'Relational database management' },
      { name: 'Redis',        level: 80, description: 'In-memory data store and cache' },
      { name: '.NET',         level: 70, description: 'C# backend framework' },
      { name: 'Node.js',      level: 70, description: 'Server-side JavaScript runtime' },
      { name: 'Next.js',      level: 70, description: 'React framework with SSR' },
      { name: 'Java',         level: 70, description: 'Object-oriented backend development' },
      { name: 'Django',       level: 60, description: 'Python web framework' },
      { name: 'Vue.js',       level: 50, description: 'Progressive web framework' },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    icon: 'Server',
    description: 'Deployment, automation, and cloud',
    skills: [
      { name: 'Docker',         level: 70, description: 'Containerization and deployment' },
      { name: 'CI/CD',          level: 70, description: 'Continuous integration and delivery' },
      { name: 'GitHub Actions', level: 70, description: 'Workflow automation' },
      { name: 'AWS',            level: 60, description: 'Cloud infrastructure basics' },
    ],
  },
  {
    category: 'Workflow & Tools',
    icon: 'Wrench',
    description: 'Professional development workflow',
    skills: [
      { name: 'GitHub',     level: 90, description: 'Version control and collaboration' },
      { name: 'Git Bash',   level: 90, description: 'Command-line version control' },
      { name: 'Jira',       level: 80, description: 'Project management and tracking' },
      { name: 'Trello',     level: 80, description: 'Task organization and planning' },
      { name: 'Miro',       level: 80, description: 'Visual collaboration and brainstorming' },
      { name: 'GitLab',     level: 70, description: 'Git hosting and CI/CD platform' },
      { name: 'YouTrack',   level: 70, description: 'Issue tracking and project management' },
      { name: 'Notion',     level: 70, description: 'Documentation and project wiki' },
      { name: 'Postman',    level: 70, description: 'API testing and documentation' },
      { name: 'Figma',      level: 60, description: 'UI/UX design and prototyping' },
      { name: 'Confluence', level: 60, description: 'Team documentation platform' },
    ],
  },
];

export function skillLevelText(level) {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Proficient';
  if (level >= 60) return 'Intermediate';
  return 'Learning';
}

export function computeOverallStats(data) {
  const total = data.reduce((acc, c) => acc + c.skills.length, 0);
  const sum = data.reduce(
    (acc, c) => acc + c.skills.reduce((s, k) => s + k.level, 0),
    0,
  );
  return {
    totalSkills: total,
    averageLevel: total ? Math.round(sum / total) : 0,
    categories: data.length,
    expertSkills: data.reduce(
      (acc, c) => acc + c.skills.filter((s) => s.level >= 80).length,
      0,
    ),
  };
}
