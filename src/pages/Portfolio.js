import React, { useState } from "react";
import classes from "../styles/Portfolio.module.scss";

import robotpaloozaImage from "../images/robotpalooza_image.jpg";
import sawiImage from "../images/banner.png";
import aoeImage from "../images/aoe_image.png";

const projects = [
  {
    id: 1,
    title: "Robotpalooza",
    description: "Frenetic FPS made in Unity. Showcased at EVA 2023. I worked on the game's programming, game design and level design.",
    image: robotpaloozaImage,
    viewLink: "https://burntcones.itch.io/robotpalooza",
    codeLink: "https://github.com/TheSirYeti/ProjectFeverDream",
    category: "Game Development",
    technologies: ["Unity", "C#", "Game Design", "Level Design"],
    status: "Released",
    featured: true
  },
  {
    id: 2,
    title: "Sawi, The Void Buster",
    description: "2D platformer made in Godot, pitched on GamesCom Latam. I worked on the main game design and level design",
    image: sawiImage,
    viewLink: "https://mvg-games.com.ar/game/sawi",
    codeLink: "https://github.com/MaiineV",
    category: "Game Development",
    technologies: ["Godot", "Game Design", "Level Design", "2D"],
    status: "Released",
    featured: true
  },
  {
    id: 3,
    title: "AI of Age of Empires",
    description: "AI prototype using Theta Star and state machines for intelligent unit behavior and pathfinding.",
    image: aoeImage,
    viewLink: "",
    codeLink: "https://github.com/MaiineV/AOE-AI",
    category: "AI Development",
    technologies: ["C++", "AI", "Pathfinding", "State Machines"],
    status: "Prototype",
    featured: false
  },
];

const categories = ["All", "Game Development", "AI Development"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className={classes.portfolio}>
      <div className={classes.portfolio__header}>
        <h2 className={classes.portfolio__title}>My Projects</h2>
        <p className={classes.portfolio__subtitle}>
          A showcase of my work in game development, AI programming, and creative projects
        </p>
      </div>

      {/* Category Filter */}
      <div className={classes.portfolio__filters}>
        {categories.map((category, index) => (
          <button
            key={category}
            className={`${classes.portfolio__filter} ${
              selectedCategory === category ? classes.portfolio__filter__active : ''
            }`}
            onClick={() => setSelectedCategory(category)}
            style={{'--delay': `${index * 0.1}s`}}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={classes.portfolio__grid}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`${classes.portfolio__card} ${
              project.featured ? classes.portfolio__card__featured : ''
            }`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{'--delay': `${index * 0.1}s`}}
          >
            {/* Card Header */}
            <div className={classes.portfolio__card__header}>
              <span className={classes.portfolio__card__category}>
                {project.category}
              </span>
              <span className={`${classes.portfolio__card__status} ${classes[`portfolio__card__status__${project.status.toLowerCase()}`]}`}>
                {project.status}
              </span>
            </div>

            {/* Image Container */}
            <div className={classes.portfolio__card__imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={classes.portfolio__card__image}
              />
              <div className={classes.portfolio__card__overlay}>
                <div className={classes.portfolio__card__overlayContent}>
                  <span className={classes.portfolio__card__overlayText}>View Details</span>
                </div>
              </div>
              {project.featured && (
                <div className={classes.portfolio__card__featured__badge}>
                  ⭐ Featured
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className={classes.portfolio__card__content}>
              <h3 className={classes.portfolio__card__title}>{project.title}</h3>
              <p className={classes.portfolio__card__description}>{project.description}</p>
              
              {/* Technologies */}
              <div className={classes.portfolio__card__technologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={classes.portfolio__card__tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Actions */}
            <div className={classes.portfolio__card__actions}>
              {project.viewLink && (
                <a 
                  href={project.viewLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`${classes.portfolio__button} ${classes.portfolio__button__primary}`}
                >
                  <span className={classes.portfolio__button__icon}>🚀</span>
                  <span>View Project</span>
                </a>
              )}
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noreferrer" 
                className={`${classes.portfolio__button} ${classes.portfolio__button__secondary}`}
              >
                <span className={classes.portfolio__button__icon}>💻</span>
                <span>View Code</span>
              </a>
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noreferrer" 
                className={`${classes.portfolio__button} ${classes.portfolio__button__secondary}`}
              >
                <span className={classes.portfolio__button__icon}>💻</span>
                <span>View Code</span>
              </a>
            </div>

            {/* Hover Effect Elements */}
            <div className={`${classes.portfolio__card__glow} ${
              hoveredProject === project.id ? classes.portfolio__card__glow__active : ''
            }`}></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className={classes.portfolio__stats}>
        <div className={classes.portfolio__stat}>
          <span className={classes.portfolio__stat__number}>{projects.length}</span>
          <span className={classes.portfolio__stat__label}>Projects</span>
        </div>
        <div className={classes.portfolio__stat}>
          <span className={classes.portfolio__stat__number}>{[...new Set(projects.flatMap(p => p.technologies))].length}</span>
          <span className={classes.portfolio__stat__label}>Technologies</span>
        </div>
        <div className={classes.portfolio__stat}>
          <span className={classes.portfolio__stat__number}>{projects.filter(p => p.featured).length}</span>
          <span className={classes.portfolio__stat__label}>Featured</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;