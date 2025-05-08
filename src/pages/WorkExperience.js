// src/pages/WorkExperience.js
import React from "react";
import classes from "../styles/WorkExperience.module.scss";

const experiences = [
  {
    title: "Profesor",
    company: "Escuela Multimedial DaVinci",
    period: "August 2023 – Present",
    duration: "2 Years"
  },
  {
    title: "Profesor",
    company: "Universidad Argentina De La Empresa",
    period: "February 2025 – Present",
    duration: "3 Months"
  },
  {
    title: "Team Leader of Game Dev Area & BackEnd Programmer",
    company: "Inside Dark Studio",
    period: "March 2024 – December 2024",
    duration: "8 Months"
  },
  {
    title: "Unity Game Developer",
    company: "Inside Dark Studio",
    period: "December 2023 – February 2024",
    duration: "3 Months"
  },
  {
    title: "Full-stack Programmer",
    company: "CH SRL",
    period: "February 2023 – October 2023",
    duration: "9 Months"
  },
  {
    title: "BackEnd Programmer / Database Manager",
    company: "FUSANA",
    period: "August 2022 – January 2023",
    duration: "4 Months"
  },
];

const WorkExperience = () => (
  <div className={classes.timeline}>
    <h2 className={classes.timeline__title}>Work Experience</h2>
    <ul className={classes.timeline__list}>
      {experiences.map((exp, idx) => (
        <li key={idx} className={classes.timeline__item}>
          <span className={classes.timeline__date}>{exp.period}</span>
          <div className={classes.timeline__content}>
            <h3 className={classes.timeline__jobTitle}>{exp.title}</h3>
            <p className={classes.timeline__company}>{exp.company}</p>
            <p className={classes.timeline__duration}>{exp.duration}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default WorkExperience;
