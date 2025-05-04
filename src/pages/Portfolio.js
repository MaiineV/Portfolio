import React, { useState } from "react";
import classes from "../styles/Portfolio.module.scss";

import robotpaloozaImage from "../images/robotpalooza_image.jpg";
import unrealImage from "../images/Unreal.png";
import aoeImage from "../images/aoe_image.png";
import aoeAI from "../projects/AIAOE.rar";

// **Importa aquí tus dos imágenes horizontales para cada proyecto**
import robotpaloozaBack1 from "../images/robotpalooza_image.jpg";
import robotpaloozaBack2 from "../images/robotpalooza_image.jpg";
import robotpaloozaBack3 from "../images/robotpalooza_image.jpg";
import robotpaloozaBack4 from "../images/robotpalooza_image.jpg";
import unrealBack1 from "../images/Unreal.png";
import unrealBack2 from "../images/Unreal.png";
import unrealBack3 from "../images/Unreal.png";
import unrealBack4 from "../images/Unreal.png";
import aoeBack1 from "../images/aoe_image.png";
import aoeBack2 from "../images/aoe_image.png";
import aoeBack3 from "../images/aoe_image.png";
import aoeBack4 from "../images/aoe_image.png";

const projects = [
  {
    title: "Robotpalooza",
    shortDescription: "Frenetic FPS in Unity.",
    fullDescription:
      "Developed in Unity C#, showcased at EVA 2023. I worked on AI, player mechanics, and world events using SOLID principles.",
    image: robotpaloozaImage,
    backImages: [robotpaloozaBack1, robotpaloozaBack2, robotpaloozaBack3, robotpaloozaBack4],
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
    backImages: [unrealBack1, unrealBack2, unrealBack3, unrealBack4],
    links: [{ label: "See Project!", url: "https://github.com/TheSirYeti/UE4_Project_VJM5AH" }],
  },
  {
    title: "AI of Age of Empires",
    shortDescription: "AI prototype for AoE.",
    fullDescription:
      "Applied Theta Star, obstacle avoidance, and state machines. Created AI agents with multiple decision layers.",
    image: aoeImage,
    backImages: [aoeBack1, aoeBack2, aoeBack3, aoeBack4],
    links: [
      { label: "Download Game!", url: aoeAI },
      { label: "See Project!", url: "https://github.com/MaiineV/AOE-AI" },
    ],
  },
];

const Portfolio = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const handleFlip = (i) => setFlippedIndex(prev => (prev === i ? null : i));

  return (
    <div className={classes.portfolio}>
      <h2 className={classes.portfolio__title}>My Projects</h2>
      <div className={classes.portfolio__grid}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`${classes.cardContainer} ${flippedIndex === idx ? classes.flipped : ""}`}
            onClick={() => handleFlip(idx)}
          >
            <div className={classes.card}>
              <div className={classes.front}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.fullDescription}</p>
              </div>
              <div className={classes.back}>
                <h3>{project.title}</h3>
                {/* aquí el grid de 2 imágenes */}
                <div className={classes.backGrid}>
                  {project.backImages.map((src, i) => (
                    <img key={i} src={src} alt={`${project.title} back ${i+1}`} />
                  ))}
                </div>
                <div className={classes.portfolio__card__buttons}>
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={classes.portfolio__button}
                      onClick={e => e.stopPropagation()}
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
