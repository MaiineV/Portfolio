import React, { useState, useEffect, useRef } from "react";
import classes from "../styles/Skills.module.scss";

const skillsData = [
  {
    category: "Game Development",
    icon: "🎮",
    description: "Creating immersive gaming experiences",
    skills: [
      { name: "Unity", level: 90, description: "Advanced 3D/2D game development" },
      { name: "C#", level: 90, description: "Object-oriented programming expertise" },
      { name: "Unreal Engine", level: 80, description: "Blueprint and C++ development" },
      { name: "C++", level: 80, description: "Performance-critical game systems" },
      { name: "Godot", level: 80, description: "Open-source game engine" },
    ]
  },
  {
    category: "Full-Stack Development",
    icon: "💻",
    description: "Building complete web applications",
    skills: [
      { name: "HTML/CSS", level: 90, description: "Semantic markup and modern styling" },
      { name: "TypeScript", level: 90, description: "Type-safe JavaScript development" },
      { name: "JavaScript", level: 90, description: "JavaScript development" },
      { name: "React", level: 80, description: "Component-based UI development" },
      { name: "MongoDB", level: 80, description: "NoSQL database management" },
      { name: "RESTful API", level: 80, description: "API design and implementation" },
      { name: "Python", level: 80, description: "Backend development and scripting" },
      { name: "Flask", level: 80, description: "Python web framework" },
      { name: "SQLite", level: 80, description: "SQLite for TO-DO App" },
      { name: "Node.js", level: 70, description: "Server-side JavaScript runtime" },
      { name: "Django", level: 60, description: "Python web framework" },
      { name: "Vue.js", level: 50, description: "Progressive web framework" },
    ]
  },
  {
    category: "Workflow & Tools",
    icon: "🛠️",
    description: "Professional development workflow",
    skills: [
      { name: "GitHub", level: 90, description: "Version control and collaboration" },
      { name: "Git Bash", level: 90, description: "Command-line version control" },
      { name: "Jira", level: 80, description: "Project management and tracking" },
      { name: "Trello", level: 80, description: "Task organization and planning" },
      { name: "Miro", level: 80, description: "Visual collaboration and brainstorming" },
    ]
  }
];

const overallStats = {
  totalSkills: skillsData.reduce((acc, category) => acc + category.skills.length, 0),
  averageLevel: Math.round(
    skillsData.reduce((acc, category) => 
      acc + category.skills.reduce((skillAcc, skill) => skillAcc + skill.level, 0), 0
    ) / skillsData.reduce((acc, category) => acc + category.skills.length, 0)
  ),
  categories: skillsData.length,
  expertSkills: skillsData.reduce((acc, category) => 
    acc + category.skills.filter(skill => skill.level >= 80).length, 0
  )
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const skillsRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate skills one by one
          skillsData[selectedCategory].skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, `${selectedCategory}-${index}`]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [selectedCategory]);

  // Reset animations when category changes
  useEffect(() => {
    setAnimatedSkills(new Set());
    if (skillsRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            skillsData[selectedCategory].skills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, `${selectedCategory}-${index}`]));
              }, index * 200);
            });
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(skillsRef.current);
      return () => observer.disconnect();
    }
  }, [selectedCategory]);

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    if (level >= 60) return "Intermediate";
    return "Learning";
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "expert";
    if (level >= 80) return "advanced";
    if (level >= 70) return "proficient";
    if (level >= 60) return "intermediate";
    return "learning";
  };

  return (
    <div className={classes.skills}>
      {/* Header Section */}
      <div className={classes.skills__header}>
        <h2 className={classes.skills__title}>My Skills & Expertise</h2>
        <p className={classes.skills__subtitle}>
          A comprehensive overview of my technical abilities and professional competencies
        </p>
      </div>

      {/* Overall Stats */}
      <div className={classes.skills__stats}>
        <div className={classes.skills__stat}>
          <span className={classes.skills__stat__number}>{overallStats.totalSkills}</span>
          <span className={classes.skills__stat__label}>Total Skills</span>
        </div>
        <div className={classes.skills__stat}>
          <span className={classes.skills__stat__number}>{overallStats.averageLevel}%</span>
          <span className={classes.skills__stat__label}>Average Level</span>
        </div>
        <div className={classes.skills__stat}>
          <span className={classes.skills__stat__number}>{overallStats.categories}</span>
          <span className={classes.skills__stat__label}>Categories</span>
        </div>
        <div className={classes.skills__stat}>
          <span className={classes.skills__stat__number}>{overallStats.expertSkills}</span>
          <span className={classes.skills__stat__label}>Expert Level</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className={classes.skills__tabs}>
        {skillsData.map((category, index) => (
          <button
            key={index}
            className={`${classes.skills__tab} ${
              selectedCategory === index ? classes.skills__tab__active : ''
            }`}
            onClick={() => setSelectedCategory(index)}
            style={{'--delay': `${index * 0.1}s`}}
          >
            <span className={classes.skills__tab__icon}>{category.icon}</span>
            <span className={classes.skills__tab__text}>{category.category}</span>
            <span className={classes.skills__tab__count}>
              {category.skills.length}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Category Content */}
      <div className={classes.skills__content} ref={skillsRef}>
        <div className={classes.skills__category}>
          <div className={classes.skills__category__header}>
            <h3 className={classes.skills__category__title}>
              <span className={classes.skills__category__icon}>
                {skillsData[selectedCategory].icon}
              </span>
              {skillsData[selectedCategory].category}
            </h3>
            <p className={classes.skills__category__description}>
              {skillsData[selectedCategory].description}
            </p>
          </div>

          <div className={classes.skills__category__grid}>
            {skillsData[selectedCategory].skills.map((skill, index) => (
              <div
                key={index}
                className={`${classes.skills__skill} ${
                  animatedSkills.has(`${selectedCategory}-${index}`) 
                    ? classes.skills__skill__animated 
                    : ''
                }`}
                style={{'--delay': `${index * 0.1}s`}}
              >
                <div className={classes.skills__skill__header}>
                  <h4 className={classes.skills__skill__name}>{skill.name}</h4>
                  <span className={`${classes.skills__skill__badge} ${classes[`skills__skill__badge__${getSkillLevelColor(skill.level)}`]}`}>
                    {getSkillLevelText(skill.level)}
                  </span>
                </div>
                
                <p className={classes.skills__skill__description}>
                  {skill.description}
                </p>

                <div className={classes.skills__skill__progress}>
                  <div className={classes.skills__skill__progressBar}>
                    <div 
                      className={`${classes.skills__skill__progressFill} ${classes[`skills__skill__progressFill__${getSkillLevelColor(skill.level)}`]}`}
                      style={{
                        '--width': `${skill.level}%`,
                        '--delay': `${index * 0.2}s`
                      }}
                    >
                      <div className={classes.skills__skill__progressStripes}></div>
                    </div>
                  </div>
                  <span className={classes.skills__skill__percentage}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Legend */}
      <div className={classes.skills__legend}>
        <h4 className={classes.skills__legend__title}>Proficiency Levels</h4>
        <div className={classes.skills__legend__items}>
          <div className={classes.skills__legend__item}>
            <span className={`${classes.skills__legend__indicator} ${classes.skills__legend__indicator__expert}`}></span>
            <span>Expert (90%+)</span>
          </div>
          <div className={classes.skills__legend__item}>
            <span className={`${classes.skills__legend__indicator} ${classes.skills__legend__indicator__advanced}`}></span>
            <span>Advanced (80-89%)</span>
          </div>
          <div className={classes.skills__legend__item}>
            <span className={`${classes.skills__legend__indicator} ${classes.skills__legend__indicator__proficient}`}></span>
            <span>Proficient (70-79%)</span>
          </div>
          <div className={classes.skills__legend__item}>
            <span className={`${classes.skills__legend__indicator} ${classes.skills__legend__indicator__intermediate}`}></span>
            <span>Intermediate (60-69%)</span>
          </div>
          <div className={classes.skills__legend__item}>
            <span className={`${classes.skills__legend__indicator} ${classes.skills__legend__indicator__learning}`}></span>
            <span>Learning (&lt;60%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;