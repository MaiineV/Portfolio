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
    title: 'Profesor',
    company: 'Universidad Argentina De La Empresa',
    period: 'February 2025 – Present',
    duration: '1 Year',
    type: 'Education',
    status: 'Current',
    location: 'Buenos Aires, Argentina',
    description:
      'Teaching game development and programming fundamentals to university students, developing curriculum and practical projects.',
    responsibilities: [
      'Curriculum development for game programming courses',
      'Student mentorship and project guidance',
      'Technology integration in educational content',
    ],
    technologies: ['Unity', 'C#', 'Game Design', 'Education'],
    icon: 'GraduationCap',
  },
  {
    id: 5,
    title: 'Profesor',
    company: 'Escuela Multimedial DaVinci',
    period: 'August 2023 – Present',
    duration: '3 Years',
    type: 'Education',
    status: 'Current',
    location: 'Buenos Aires, Argentina',
    description:
      'Lead instructor for multimedia and game development programs, focusing on Unity development and game design principles.',
    responsibilities: [
      'Advanced Unity development instruction',
      'Game design workshop facilitation',
      'Industry best practices training',
    ],
    technologies: ['Unity', 'C#', 'Game Design', 'Multimedia'],
    icon: 'GraduationCap',
  },
  {
    id: 6,
    title: 'Game Producer, Backend Programmer & Game Designer',
    company: 'Inside Dark Studio',
    period: 'March 2024 – December 2024',
    duration: '8 Months',
    type: 'Game Development',
    status: 'Completed',
    location: 'Remote',
    description:
      'Led game production while handling backend development and game design for multiple projects, managing cross-functional teams.',
    responsibilities: [
      'Project management and production oversight',
      'Backend system architecture and development',
      'Game design documentation and implementation',
      'Team coordination and milestone planning',
    ],
    technologies: ['Unity', 'C#', 'Backend Development', 'Project Management'],
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
      'Specialized Unity development focusing on gameplay mechanics, UI systems, and performance optimization.',
    responsibilities: [
      'Gameplay mechanic implementation',
      'UI/UX development in Unity',
      'Performance optimization and debugging',
      'Code review and documentation',
    ],
    technologies: ['Unity', 'C#', 'UI Development', 'Performance Optimization'],
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
