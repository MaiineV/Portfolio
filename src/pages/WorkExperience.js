import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/WorkExperience.module.scss";

const experiences = [
  {
    id: 1,
    title: "Profesor",
    company: "Universidad Argentina De La Empresa",
    period: "February 2025 – Present",
    duration: "3 Months",
    type: "Education",
    status: "Current",
    location: "Buenos Aires, Argentina",
    description: "Teaching game development and programming fundamentals to university students, developing curriculum and practical projects.",
    responsibilities: [
      "Curriculum development for game programming courses",
      "Student mentorship and project guidance",
      "Technology integration in educational content"
    ],
    technologies: ["Unity", "C#", "Game Design", "Education"],
    icon: "🎓"
  },
  {
    id: 2,
    title: "Profesor",
    company: "Escuela Multimedial DaVinci",
    period: "August 2023 – Present",
    duration: "2 Years",
    type: "Education",
    status: "Current",
    location: "Buenos Aires, Argentina",
    description: "Lead instructor for multimedia and game development programs, focusing on Unity development and game design principles.",
    responsibilities: [
      "Advanced Unity development instruction",
      "Game design workshop facilitation",
      "Industry best practices training"
    ],
    technologies: ["Unity", "C#", "Game Design", "Multimedia"],
    icon: "🎓"
  },
  {
    id: 3,
    title: "Game Producer, BackEnd Programmer and Game Designer",
    company: "Inside Dark Studio",
    period: "March 2024 – December 2024",
    duration: "8 Months",
    type: "Game Development",
    status: "Completed",
    location: "Remote",
    description: "Led game production while handling backend development and game design for multiple projects, managing cross-functional teams.",
    responsibilities: [
      "Project management and production oversight",
      "Backend system architecture and development",
      "Game design documentation and implementation",
      "Team coordination and milestone planning"
    ],
    technologies: ["Unity", "C#", "Backend Development", "Project Management"],
    icon: "🎮"
  },
  {
    id: 4,
    title: "Unity Game Developer",
    company: "Inside Dark Studio",
    period: "December 2023 – February 2024",
    duration: "3 Months",
    type: "Game Development",
    status: "Completed",
    location: "Remote",
    description: "Specialized Unity development focusing on gameplay mechanics, UI systems, and performance optimization.",
    responsibilities: [
      "Gameplay mechanic implementation",
      "UI/UX development in Unity",
      "Performance optimization and debugging",
      "Code review and documentation"
    ],
    technologies: ["Unity", "C#", "UI Development", "Performance Optimization"],
    icon: "🎮"
  },
  {
    id: 5,
    title: "Full-stack Programmer",
    company: "CH SRL",
    period: "February 2023 – October 2023",
    duration: "9 Months",
    type: "Web Development",
    status: "Completed",
    location: "Buenos Aires, Argentina",
    description: "Full-stack web development creating modern applications with React frontend and Node.js backend solutions.",
    responsibilities: [
      "Frontend development with React and TypeScript",
      "Backend API development with Node.js",
      "Database design and optimization",
      "Client communication and project planning"
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    icon: "💻"
  },
  {
    id: 6,
    title: "BackEnd Programmer / Database Manager",
    company: "FUSANA",
    period: "August 2022 – January 2023",
    duration: "4 Months",
    type: "Backend Development",
    status: "Completed",
    location: "Buenos Aires, Argentina",
    description: "Backend development and database management for healthcare applications, ensuring data security and system reliability.",
    responsibilities: [
      "Database architecture and management",
      "Backend API development",
      "Data security implementation",
      "System performance monitoring"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "API Development"],
    icon: "🗄️"
  }
];

const jobTypes = ["All", "Education", "Game Development", "Web Development", "Backend Development"];

const WorkExperience = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [visibleExperiences, setVisibleExperiences] = useState(new Set());
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const timelineRef = useRef(null);

  const filteredExperiences = selectedType === "All" 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedType);

  // Calculate statistics
  const stats = {
    totalExperience: experiences.length,
    totalYears: Math.round(
      experiences.reduce((acc, exp) => {
        const duration = exp.duration;
        if (duration.includes("Year")) {
          return acc + parseInt(duration);
        } else if (duration.includes("Month")) {
          return acc + parseInt(duration) / 12;
        }
        return acc;
      }, 0) * 10
    ) / 10,
    currentPositions: experiences.filter(exp => exp.status === "Current").length,
    companies: [...new Set(experiences.map(exp => exp.company))].length
  };

  // Animate cards on load and filter change
  useEffect(() => {
    // Reset all animations
    setVisibleExperiences(new Set());
    setHoveredExperience(null);

    // Start animations with staggered delay
    const timeouts = [];
    
    filteredExperiences.forEach((exp, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleExperiences(prev => new Set([...prev, exp.id]));
      }, index * 200); // 200ms delay between each card
      
      timeouts.push(timeoutId);
    });

    // Cleanup function to clear timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [filteredExperiences]); // Re-run when filtered experiences change

  return (
    <div className={classes.experience}>
      {/* Header Section */}
      <div className={classes.experience__header}>
        <h2 className={classes.experience__title}>Professional Journey</h2>
        <p className={classes.experience__subtitle}>
          My career path through game development, education, and full-stack programming
        </p>
      </div>

      {/* Statistics Section */}
      <div className={classes.experience__stats}>
        <div className={classes.experience__stat}>
          <span className={classes.experience__stat__number}>{stats.totalExperience}</span>
          <span className={classes.experience__stat__label}>Positions</span>
        </div>
        <div className={classes.experience__stat}>
          <span className={classes.experience__stat__number}>{stats.totalYears}+</span>
          <span className={classes.experience__stat__label}>Years Experience</span>
        </div>
        <div className={classes.experience__stat}>
          <span className={classes.experience__stat__number}>{stats.currentPositions}</span>
          <span className={classes.experience__stat__label}>Current Roles</span>
        </div>
        <div className={classes.experience__stat}>
          <span className={classes.experience__stat__number}>{stats.companies}</span>
          <span className={classes.experience__stat__label}>Companies</span>
        </div>
      </div>

      {/* Filter Section */}
      <div className={classes.experience__filters}>
        {jobTypes.map((type, index) => (
          <button
            key={type}
            className={`${classes.experience__filter} ${
              selectedType === type ? classes.experience__filter__active : ''
            }`}
            onClick={() => setSelectedType(type)}
            style={{'--delay': `${index * 0.1}s`}}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Timeline Section */}
      <div className={classes.experience__timeline} ref={timelineRef}>
        <div className={classes.experience__timeline__line}></div>
        
        {filteredExperiences.map((exp, index) => (
          <div
            key={`${exp.id}-${selectedType}`} // Add selectedType to key to force re-render
            className={`${classes.experience__timeline__item} ${
              visibleExperiences.has(exp.id) ? classes.experience__timeline__item__visible : ''
            }`}
            data-experience-id={exp.id}
            onMouseEnter={() => setHoveredExperience(exp.id)}
            onMouseLeave={() => setHoveredExperience(null)}
            style={{'--delay': `${index * 0.2}s`}}
          >
            {/* Timeline Dot */}
            <div className={classes.experience__timeline__dot}>
              <span className={classes.experience__timeline__icon}>{exp.icon}</span>
              <div className={`${classes.experience__timeline__pulse} ${
                hoveredExperience === exp.id ? classes.experience__timeline__pulse__active : ''
              }`}></div>
            </div>

            {/* Experience Card */}
            <div className={classes.experience__card}>
              <div className={classes.experience__card__header}>
                <div className={classes.experience__card__title__section}>
                  <h3 className={classes.experience__card__title}>{exp.title}</h3>
                  <div className={classes.experience__card__meta}>
                    <span className={classes.experience__card__company}>{exp.company}</span>
                    <span className={classes.experience__card__location}>📍 {exp.location}</span>
                  </div>
                </div>
                <div className={classes.experience__card__badges}>
                  <span className={`${classes.experience__card__status} ${
                    classes[`experience__card__status__${exp.status.toLowerCase()}`]
                  }`}>
                    {exp.status}
                  </span>
                  <span className={classes.experience__card__type}>{exp.type}</span>
                </div>
              </div>

              <div className={classes.experience__card__timeline}>
                <span className={classes.experience__card__period}>📅 {exp.period}</span>
                <span className={classes.experience__card__duration}>⏱️ {exp.duration}</span>
              </div>

              <p className={classes.experience__card__description}>
                {exp.description}
              </p>

              <div className={classes.experience__card__responsibilities}>
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className={classes.experience__card__technologies}>
                <h4>Technologies Used:</h4>
                <div className={classes.experience__card__tech__list}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className={classes.experience__card__tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`${classes.experience__card__glow} ${
                hoveredExperience === exp.id ? classes.experience__card__glow__active : ''
              }`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Highlights */}
      <div className={classes.experience__highlights}>
        <h3 className={classes.experience__highlights__title}>Career Highlights</h3>
        <div className={classes.experience__highlights__grid}>
          <div className={classes.experience__highlight}>
            <div className={classes.experience__highlight__icon}>🏆</div>
            <h4>Leadership Growth</h4>
            <p>Progressed from developer to producer, leading cross-functional teams</p>
          </div>
          <div className={classes.experience__highlight}>
            <div className={classes.experience__highlight__icon}>📚</div>
            <h4>Education Impact</h4>
            <p>Teaching next generation of developers at two prestigious institutions</p>
          </div>
          <div className={classes.experience__highlight}>
            <div className={classes.experience__highlight__icon}>🔧</div>
            <h4>Full-Stack Expertise</h4>
            <p>Mastered both game development and web development technologies</p>
          </div>
          <div className={classes.experience__highlight}>
            <div className={classes.experience__highlight__icon}>🚀</div>
            <h4>Continuous Growth</h4>
            <p>Consistently taking on new challenges and expanding skill set</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;