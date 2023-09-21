import React from "react";
import classes from "../styles/WorkExperience.module.scss";

const WorkExperience = () => {
  return (
    <div className={classes.workExperiences}>
      <div className={classes.workExperiences__title}>Work Experience</div>
      <div className={classes.workExperiences__jobsList}>
        <div className={classes.workExperiences__itemList}>
          Position: Assistant Proffesor and Proffesor <br />
          Company: Escuela Davinci <br />
          Work Time: 1 Year (Agosto 2022 - Present)
        </div>
        <div className={classes.workExperiences__itemList}>
          Position: Full-stack Programmer <br />
          Company: OWO de Culturales Hierbabuna SRL <br />
          Work Time: 5 Month (November 2022 - February 2023)
        </div>
        <div className={classes.workExperiences__itemList}>
          Position: SQL Programmer / Database Manager <br />
          Company: FUSANA <br />- 4 Work Time: Month (May 2022 - September 2022)
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
