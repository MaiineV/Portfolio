export const experiences = [
  {
    id: 1,
    title: 'Unreal Engine Developer',
    company: 'KiPcreating (Expressa)',
    period: 'January 2026 – Present',
    duration: '4 Months',
    type: 'Game Development',
    status: 'Current',
    location: 'Remote (Argentina)',
    description:
      'Developing performance-critical features in C++ on the Expressa real-time configurator platform, serving aviation, yachting, automotive, and architecture clients.',
    responsibilities: [
      'C++ systems development on Unreal Engine',
      'Data persistence and SQLite integration',
      'Real-time rendering pipeline integration',
      'Distributed team collaboration across 4 offices',
    ],
    technologies: ['Unreal Engine', 'C++', 'SQLite', 'GitLab'],
    icon: 'Monitor',
  },
  {
    id: 2,
    title: 'Lead Programmer',
    company: 'INVI · Project Toymaker',
    period: 'September 2025 – Present',
    duration: '8 Months',
    type: 'Game Development',
    status: 'Current',
    location: 'Remote (Argentina)',
    description:
      'Lead programmer for Project Toymaker, a state-funded indie videogame. Designing multiplayer networking and backend systems.',
    responsibilities: [
      'Multiplayer networking with FishNet',
      'Backend systems architecture',
      'In-editor tooling for the development team',
      'Technical direction and producer coordination',
    ],
    technologies: ['Unity', 'C#', 'FishNet', 'GitHub'],
    icon: 'Gamepad2',
  },
  {
    id: 3,
    title: 'Freelance Developer',
    company: 'Self-employed',
    period: '2025',
    duration: '1 Year',
    type: 'Game Development',
    status: 'Completed',
    location: 'Remote',
    description:
      'Delivered multiple videogame projects in Unity and Godot, covering gameplay systems, networking integration, and tooling.',
    responsibilities: [
      'Gameplay systems development',
      'Networking integration',
      'Custom tooling and editor extensions',
    ],
    technologies: ['Unity', 'Godot', 'C#', 'Networking'],
    icon: 'Briefcase',
  },
  {
    id: 4,
    title: 'Professor — Game Development & Programming',
    company: 'Universidad Argentina De La Empresa (UADE)',
    period: 'February 2025 – Present',
    duration: '1 Year',
    type: 'Education',
    status: 'Current',
    location: 'Buenos Aires, Argentina',
    description:
      'Teaching algorithms, design patterns, SOLID, game design, and production within the Video Game Development program.',
    responsibilities: [
      'Algorithms, design patterns, and SOLID instruction',
      'Game design, core loops, HCD, and GDD creation workshops',
      'Student thesis mentorship from concept to vertical slice',
      'Architecture and code review guidance using Unity and C#',
    ],
    technologies: ['Unity', 'C#', 'Game Design', 'Algorithms', 'SOLID'],
    icon: 'GraduationCap',
  },
  {
    id: 5,
    title: 'Professor — Backend, Databases & Game Development',
    company: 'Escuela Multimedial Da Vinci',
    period: 'August 2023 – Present',
    duration: '2 Years',
    type: 'Education',
    status: 'Current',
    location: 'Buenos Aires, Argentina',
    description:
      'Teaching backend development, databases, AI programming, online games, algorithms, and game design across the Video Game Development program.',
    responsibilities: [
      'REST API design, authentication, and backend architecture',
      'Database workshops: SQL, schema design, ORM (PostgreSQL, MongoDB)',
      'AI programming (FSM, GOAP) and online games (Photon, Mirror)',
      'Algorithms, design patterns, and SOLID principles',
      'Thesis project mentorship and code reviews',
    ],
    technologies: ['Unity', 'C#', 'Python', 'PostgreSQL', 'MongoDB', 'Photon', 'Mirror'],
    icon: 'GraduationCap',
  },
  {
    id: 6,
    title: 'Game Producer, Backend Programmer & Game Designer',
    company: 'Inside Dark Studio',
    period: 'March 2024 – December 2024',
    duration: '9 Months',
    type: 'Game Development',
    status: 'Completed',
    location: 'Remote',
    description:
      'Led a 7-member team delivering multiplayer backend services and game design across 6 concurrent projects under Agile sprints.',
    responsibilities: [
      'Led 7-member team across 6 concurrent projects under Agile sprints',
      'Designed matchmaking and lobby backend services in C# and Node.js',
      'Authored GDDs and feature specs; defined core loops and game feel',
      'Reduced server latency by 25% and improved stability by 40%',
      'Mentored juniors on backend best practices and system architecture',
    ],
    technologies: ['Unity', 'C#', 'Node.js', 'WebSockets', 'Photon', 'Agile'],
    icon: 'Gamepad2',
  },
  {
    id: 7,
    title: 'Unity Game Developer',
    company: 'Inside Dark Studio',
    period: 'December 2023 – February 2024',
    duration: '3 Months',
    type: 'Game Development',
    status: 'Completed',
    location: 'Remote',
    description:
      'Unity development for a mobile/web multiplayer title — gameplay mechanics, UI/UX systems, and real-time networking.',
    responsibilities: [
      'Gameplay mechanic prototyping and implementation',
      'UI/UX systems including real-time HUD and menu flows',
      'In-editor tooling for level configuration',
      'Boosted concurrent player capacity by 2× through optimization',
    ],
    technologies: ['Unity', 'C#', 'Mirror', 'WebSocket', 'UI/UX'],
    icon: 'Gamepad2',
  },
  {
    id: 8,
    title: 'Full-stack Programmer',
    company: 'CH SRL',
    period: 'February 2023 – October 2023',
    duration: '9 Months',
    type: 'Web Development',
    status: 'Completed',
    location: 'Buenos Aires, Argentina',
    description:
      'Full-stack web development with React and TypeScript frontend and C#/.NET backend with PostgreSQL databases.',
    responsibilities: [
      'Frontend development with React and TypeScript',
      'Backend API development with C# .NET',
      'PostgreSQL database design and optimization',
      'JWT authentication and role-based access control',
    ],
    technologies: ['React', 'TypeScript', 'C#', '.NET', 'PostgreSQL'],
    icon: 'Code2',
  },
  {
    id: 9,
    title: 'Backend Programmer / Database Manager',
    company: 'FUSANA',
    period: 'February 2022 – January 2023',
    duration: '1 Year',
    type: 'Backend Development',
    status: 'Completed',
    location: 'Buenos Aires, Argentina',
    description:
      'Backend development and database management for healthcare applications, ensuring data security and system reliability.',
    responsibilities: [
      'Database architecture and management',
      'Backend API development',
      'Data security implementation',
      'System performance monitoring',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'API Development'],
    icon: 'Database',
  },
];

export const jobTypes = [
  'All',
  'Education',
  'Game Development',
  'Web Development',
  'Backend Development',
];

export function computeExperienceStats(data) {
  const totalYears =
    Math.round(
      data.reduce((acc, exp) => {
        const d = exp.duration;
        if (d.includes('Year')) return acc + parseInt(d, 10);
        if (d.includes('Month')) return acc + parseInt(d, 10) / 12;
        return acc;
      }, 0) * 10,
    ) / 10;
  return {
    totalExperience: data.length,
    totalYears,
    currentPositions: data.filter((e) => e.status === 'Current').length,
    companies: new Set(data.map((e) => e.company)).size,
  };
}
