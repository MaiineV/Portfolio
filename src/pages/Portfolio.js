import React from "react";
import classes from "../styles/Portfolio.module.scss";

import robotpaloozaImage from "../images/robotpalooza_image.jpg";

import unrealImage from "../images/Unreal.png";

import aoeAI from "../projects/AIAOE.rar";
import aoeImage from "../images/aoe_image.png";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <div className={classes.portfolio__title}>My Projects</div>

      <div className={classes.portfolio__project}>
        <img src={robotpaloozaImage} alt="Robotpalooza enemy" />
        <div className={classes.portfolio__title}>Robotpaloza</div>
        <div className={classes.portfolio__project__info}>
          Robotpalooza is a frenetic first-person game, developed in Unity C# by
          a team of 4 people. It has been in development for six months and was
          selected to have a booth at EVA 2023, allowing us to showcase it to a
          wider audience and receive more feedback. In this project, I was
          responsible for programming, using design patterns and SOLID
          principles. I worked on artificial intelligence, player mechanics, and
          world events.
        </div>
        <a
          className={classes.portfolio__project__seemore}
          href="https://burntcones.itch.io/robotpalooza"
          target="_blank"
          rel="noreferrer"
        >
          Download Game!
        </a>
        <a
          className={classes.portfolio__project__seemore}
          href="https://github.com/TheSirYeti/ProjectFeverDream"
          target="_blank"
          rel="noreferrer"
        >
          See Project!
        </a>
      </div>

      <div className={classes.portfolio__project}>
        <img src={unrealImage} alt="Unreal Game" />
        <div className={classes.portfolio__title}>Unreal Game</div>
        <div className={classes.portfolio__project__info}>
          This is a first-person shooter game made in Unreal Engine 4, using
          both Blueprints and C++. Applying various concepts from it.
        </div>
        <a
          className={classes.portfolio__project__seemore}
          href="https://github.com/TheSirYeti/UE4_Project_VJM5AH"
          target="_blank"
          rel="noreferrer"
        >
          See Project!
        </a>
      </div>

      <div className={classes.portfolio__project}>
        <img src={aoeImage} alt="Age Of Empires" />
        <div className={classes.portfolio__title}>AI of Age of Empires</div>
        <div className={classes.portfolio__project__info}>
          It's a project in which designs for artificial intelligences are
          applied, such as Theta Star, obstacle avoidance, and state machines.
        </div>
        <a className={classes.portfolio__project__seemore} href={aoeAI}>
          Download Game!
        </a>
        <a
          className={classes.portfolio__project__seemore}
          href="https://github.com/MaiineV/AOE-AI"
          target="_blank"
          rel="noreferrer"
        >
          See Project!
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
