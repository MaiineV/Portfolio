import React, { useState } from "react";
import classes from "../styles/Portfolio.module.scss";

import robotpaloozaImage from "../images/robotpalooza_image.jpg";
import unrealImage from "../images/Unreal.png";
import aoeImage from "../images/aoe_image.png";
import aoeAI from "../projects/AIAOE.rar";

const projects = [
  {
    title: "Robotpalooza",
    shortDescription: "Frenetic FPS in Unity.",
    fullDescription:
      "Developed in Unity C#, showcased at EVA 2023. I worked on AI, player mechanics, and world events using SOLID principles.",
    image: robotpaloozaImage,
    links: [
      { label: "Download Game!", url: "https://burntcones.itch.io/robotpalooza" },
      { label: "See Project!", url: "https://github.com/TheSirYeti/ProjectFeverDream" },
    ],
  },
  {
    title: "Unreal Game",
    shortDescription: "Shooter made in UE4.",
    fullDescription:
      "FPS made with Blueprints and C++. Covered core gameplay, logic and level scripting.",
    image: unrealImage,
    links: [
      { label: "See Project!", url: "https://github.com/TheSirYeti/UE4_Project_VJM5AH" },
    ],
  },
  {
    title: "AI of Age of Empires",
    shortDescription: "AI prototype for AoE.",
    fullDescription:
      "Applied Theta Star, obstacle avoidance, and state machines. Created AI agents with multiple decision layers.",
    image: aoeImage,
    links: [
      { label: "Download Game!", url: aoeAI },
      { label: "See Project!", url: "https://github.com/MaiineV/AOE-AI" },
    ],
  },
];

const Portfolio = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={classes.portfolio}>
      <h2 className={classes.portfolio__title}>My Projects</h2>
      <div className={classes.portfolio__grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${classes.cardContainer} ${
              flippedIndex === index ? classes.flipped : ""
            }`}
            onClick={() => handleFlip(index)}
          >
            <div className={classes.card}>
              <div className={classes.front}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
              <div className={classes.back}>
                <h3>{project.title}</h3>
                <p>{project.fullDescription}</p>
                <div className={classes.portfolio__card__buttons}>
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={classes.portfolio__button}
                      onClick={(e) => e.stopPropagation()} // evita volver a girar al clickear link
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
