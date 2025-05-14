import React from "react";
import classes from "../styles/Portfolio.module.scss";

import robotpaloozaImage from "../images/robotpalooza_image.jpg";
import sawiImage from "../images/banner.png";
import aoeImage from "../images/aoe_image.png";

const projects = [
  {
    title: "Robotpalooza",
    description: "Frenetic FPS made in Unity. Showcased at EVA 2023. I Worked on the game's programming, game design and level design.",
    image: robotpaloozaImage,
    viewLink: "https://burntcones.itch.io/robotpalooza",
    codeLink: "https://github.com/TheSirYeti/ProjectFeverDream",
  },
  {
    title: "Sawi, The Void Buster",
    description: "2D platformer made in Godot, pitched on GamesCom Latam. I worked on the main game design and level design",
    image: sawiImage,
    viewLink: "https://mvg-games.com.ar/game/sawi",
    codeLink: "https://github.com/MaiineV",
  },
  {
    title: "AI of Age of Empires",
    description: "AI prototype using Theta Star and state machines.",
    image: aoeImage,
    viewLink: "",
    codeLink: "https://github.com/MaiineV/AOE-AI",
  },
];

const Portfolio = () => {
  return (
    <section className={classes.portfolio}>
      <h2 className={classes.portfolio__title}>My Projects</h2>
      <div className={classes.portfolio__grid}>
        {projects.map((project, index) => (
          <div key={index} className={classes.portfolio__card}>
            <img
              src={project.image}
              alt={project.title}
              className={classes.portfolio__image}
            />
            <h3 className={classes.portfolio__card__title}>{project.title}</h3>
            <p className={classes.portfolio__card__description}>{project.description}</p>
            <div className={classes.portfolio__card__buttons}>
              <a href={project.viewLink} target="_blank" rel="noreferrer" className={classes.portfolio__button}>
                View Project
              </a>
              <a href={project.codeLink} target="_blank" rel="noreferrer" className={classes.portfolio__button}>
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
