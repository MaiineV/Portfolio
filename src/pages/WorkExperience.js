import React from "react";
import classes from "../styles/WorkExperience.module.scss";

const WorkExperience = () => {
  return (
    <div className={classes.workExperiences}>
      <div className={classes.workExperience__title}>WorkExperience</div>
      <ul>
        <li className={classes.workExperience____itemList}>
          Full-stack Programmer - OWO de Culturales Hierbabuna SRL - 5 Month
          (November 2022 - February 2023)
        </li>
        <li className={classes.workExperience____itemList}>
        SQL Programmer / Database Manager  - FUSANA 
- 4 Month (May 2022 - September 2022)
        </li>
        <li className={classes.workExperience____itemList}>
        Assistant Proffesor and Proffesor - Escuela Davinci 
- 1 Year (Agosto 2022 - Present)
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
