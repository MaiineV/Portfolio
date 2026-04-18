export const experiences = [
  {
    id: 1,
    title: 'Profesor',
    company: 'Universidad Argentina De La Empresa',
    period: 'February 2025 – Present',
    duration: '3 Months',
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
    id: 2,
    title: 'Profesor',
    company: 'Escuela Multimedial DaVinci',
    period: 'August 2023 – Present',
    duration: '2 Years',
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title: 'Full-stack Programmer',
    company: 'CH SRL',
    period: 'February 2023 – October 2023',
    duration: '9 Months',
    type: 'Web Development',
    status: 'Completed',
    location: 'Buenos Aires, Argentina',
    description:
      'Full-stack web development creating modern applications with React frontend and Node.js backend solutions.',
    responsibilities: [
      'Frontend development with React and TypeScript',
      'Backend API development with Node.js',
      'Database design and optimization',
      'Client communication and project planning',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    icon: 'Code2',
  },
  {
    id: 6,
    title: 'Backend Programmer / Database Manager',
    company: 'FUSANA',
    period: 'August 2022 – January 2023',
    duration: '4 Months',
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
