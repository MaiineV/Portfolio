import React, { useState } from "react";
import classes from "../styles/Portfolio.module.scss";

import robotpaloozaImage from "../images/robotpalooza_image.jpg";
import sawiImage from "../images/banner.png";
import waxyImage from "../images/MiniaturaWaxy.jpg";
import retrucoImage from "../images/RetrucoImage.png";
import oneStepImage from "../images/OneStepImage.png";

const projects = [
  {
    id: 2,
    title: "Sawi, The Void Buster",
    description:
      "2D platformer made in Godot, pitched on GamesCom Latam. I worked on the main game design and level design",
    image: sawiImage,
    viewLink: "https://mvg-games.com.ar/game/sawi",
    codeLink: "https://github.com/MaiineV",
    gddLink: "", // Add your GDD link here when available
    categories: ["Game Development", "Game Design"],
    technologies: ["Godot", "2D"],
    status: "In Development",
    featured: true,
  },
  {
    id: 3,
    title: "Waxy: The Wick and the Witch",
    description:
      "Waxy: The Wick and the Witch is a third-person 3D puzzle-platformer where you play as a living candle exploring the forgotten attic of a witch’s house.",
    image: waxyImage,
    viewLink: "https://3amgamesstudio.itch.io/waxy-the-wick-and-the-witch",
    codeLink: "",
    gddLink:
      "https://docs.google.com/document/d/1skRFyi93VuhgQmpYGfLQ1OmZlOqO3887zhP5It__0OI/edit?usp=sharing", // Add your GDD link here when available
    categories: ["Game Development", "Game Design"],
    technologies: ["C#", "Unity"],
    status: "In Development",
    featured: true,
  },
  {
    id: 5,
    title: "One Step Behind",
    description:
      "One Step Behind is an incremental-Bullethell game with some metroidvania mechanics, with the unique mechanic that you have to fight with your pass life side by side.",
    image: oneStepImage,
    viewLink: "https://andres-pittaluga.itch.io/one-step-behind",
    codeLink: "",
    gddLink:
      "https://miro.com/app/board/uXjVJFkucr0=/?share_link_id=695560825167", // Add your GDD link here when available
    categories: ["Game Design", "Game Development"],
    technologies: ["C#", "Unity"],
    status: "In Development",
    featured: true,
  },
  {
    id: 4,
    title: "Retruco al Diablo",
    description:
      "Retruco al diablo is a card game with single match, special ability and a complex lie system.",
    image: retrucoImage,
    viewLink: "https://youtu.be/ntMhAfiPFYE",
    codeLink: "",
    gddLink:
      "https://docs.google.com/document/d/1nrsUY1v7X4N-dKN-YiLq7TMPnyXFkkjbknu9BOc9qPk/edit?usp=sharing", // Add your GDD link here when available
    categories: ["Game Design"],
    technologies: ["C#", "Unity"],
    status: "Prototype",
    featured: false,
  },
  {
    id: 1,
    title: "Robotpalooza",
    description:
      "Frenetic FPS made in Unity. Showcased at EVA 2023. I worked on the game's programming, game design and level design.",
    image: robotpaloozaImage,
    viewLink: "https://burntcones.itch.io/robotpalooza",
    codeLink: "https://github.com/TheSirYeti/ProjectFeverDream",
    gddLink:
      "https://docs.google.com/document/d/1bFFF-2n0IrftEVJ7uQ_9-dTtN_R2T2Wtoc3uTwaIJCc/edit?usp=sharing", // Add your GDD link here when available
    categories: ["Game Development", "Game Design"],
    technologies: ["Unity", "C#", "Game Design", "Level Design"],
    status: "Released",
    featured: false,
  },
];

const categories = ["All", "Game Development", "Game Design", "FullStack"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <section className={classes.portfolio}>
      <div className={classes.portfolio__header}>
        <h2 className={classes.portfolio__title}>My Projects</h2>
        <p className={classes.portfolio__subtitle}>
          A showcase of my best work, categorized by type and technology.
        </p>
      </div>

      {/* Category Filter */}
      <div className={classes.portfolio__filters}>
        {categories.map((category, index) => (
          <button
            key={category}
            className={`${classes.portfolio__filter} ${
              selectedCategory === category
                ? classes.portfolio__filter__active
                : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            style={{ "--delay": `${index * 0.1}s` }}
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
              project.featured ? classes.portfolio__card__featured : ""
            }`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{ "--delay": `${index * 0.1}s` }}
          >
            {/* Card Header */}
            <div className={classes.portfolio__card__header}>
              <div className={classes.portfolio__card__categories}>
                {project.categories.map((cat, index) => (
                  <span
                    key={index}
                    className={classes.portfolio__card__category}
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span
                className={`${classes.portfolio__card__status} ${
                  classes[
                    `portfolio__card__status__${project.status
                      .toLowerCase()
                      .replace(/\s+/g, "")}`
                  ]
                }`}
              >
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
              {project.featured && (
                <div className={classes.portfolio__card__featured__badge}>
                  ⭐ Featured
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className={classes.portfolio__card__content}>
              <h3 className={classes.portfolio__card__title}>
                {project.title}
              </h3>
              <p className={classes.portfolio__card__description}>
                {project.description}
              </p>

              {/* Technologies */}
              <div className={classes.portfolio__card__technologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={classes.portfolio__card__tech}
                  >
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
              {project.gddLink && (
                <a
                  href={project.gddLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.portfolio__button} ${classes.portfolio__button__secondary}`}
                >
                  <span className={classes.portfolio__button__icon}>📄</span>
                  <span>View GDD</span>
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.portfolio__button} ${classes.portfolio__button__secondary}`}
                >
                  <span className={classes.portfolio__button__icon}>💻</span>
                  <span>View Code</span>
                </a>
              )}
            </div>

            <div
              className={`${classes.portfolio__card__glow} ${
                hoveredProject === project.id
                  ? classes.portfolio__card__glow__active
                  : ""
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className={classes.portfolio__stats}>
        <div className={classes.portfolio__stat}>
          <span className={classes.portfolio__stat__number}>
            {projects.length}
          </span>
          <span className={classes.portfolio__stat__label}>Projects</span>
        </div>
        <div className={classes.portfolio__stat}>
          <span className={classes.portfolio__stat__number}>
            {[...new Set(projects.flatMap((p) => p.technologies))].length}
          </span>
          <span className={classes.portfolio__stat__label}>Technologies</span>
        </div>
        <div className={classes.portfolio__stat}>
          <span className={classes.portfolio__stat__number}>
            {projects.filter((p) => p.featured).length}
          </span>
          <span className={classes.portfolio__stat__label}>Featured</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
