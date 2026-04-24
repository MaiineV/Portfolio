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
      { name: 'Python',       level: 80, description: 'Backend development and scripting' },
      { name: 'Flask',        level: 80, description: 'Python web microframework' },
      { name: 'SQLite',       level: 80, description: 'Embedded relational database' },
      { name: 'PostgreSQL',   level: 80, description: 'Relational database management' },
      { name: '.NET',         level: 70, description: 'C# backend framework' },
      { name: 'Node.js',      level: 70, description: 'Server-side JavaScript runtime' },
      { name: 'Django',       level: 60, description: 'Python web framework' },
      { name: 'Vue.js',       level: 50, description: 'Progressive web framework' },
    ],
  },
  {
    category: 'Workflow & Tools',
    icon: 'Wrench',
    description: 'Professional development workflow',
    skills: [
      { name: 'GitHub',   level: 90, description: 'Version control and collaboration' },
      { name: 'Git Bash', level: 90, description: 'Command-line version control' },
      { name: 'Jira',     level: 80, description: 'Project management and tracking' },
      { name: 'Trello',   level: 80, description: 'Task organization and planning' },
      { name: 'Miro',     level: 80, description: 'Visual collaboration and brainstorming' },
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
