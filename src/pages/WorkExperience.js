import React from "react";
import classes from "../styles/WorkExperience.module.scss";

const WorkExperience = () => {
  return (
    <div className={classes.workExperiences}>
      <div className={classes.workExperiences__title}>Work Experience</div>
      <div className={classes.workExperiences__jobsList}>
        <div className={classes.workExperiences__itemList}>
          <p className={classes.workExperiences__jobTitle}>
            Position: Proffesor
          </p>
          <p>Company: Escuela Multimedial DaVinci</p>
          <p>Work Time: 2 Year (August 2023 - Present)</p>
        </div>
        <div className={classes.workExperiences__itemList}>
          <p className={classes.workExperiences__jobTitle}>
            Position: Proffesor
          </p>
          <p>Company: Universidad Argentina De La Empresa</p>
          <p>Work Time: 3 Month (February 2025 - Present)</p>
        </div>
        <div className={classes.workExperiences__itemList}>
          <p className={classes.workExperiences__jobTitle}>
            Position: Team Leader of Game Dev Area & BackEnd Programmer
          </p>
          <p>Company: Inside Dark Studio</p>
          <p>Work Time: 8 Month (March 2024 - December)</p>
        </div>
        <div className={classes.workExperiences__itemList}>
          <p className={classes.workExperiences__jobTitle}>
            Position: Unity Game Developer
          </p>
          <p>Company: Inside Dark Studio</p>
          <p>Work Time: 3 Month (December 2023 - February 2024)</p>
        </div>
        <div className={classes.workExperiences__itemList}>
          <p className={classes.workExperiences__jobTitle}>
            Position: Full-stack Programmer
          </p>
          <p>Company: CH SRL</p>
          <p>Work Time: 9 Month (February 2023 - October 2023)</p>
        </div>
        <div className={classes.workExperiences__itemList}>
          <p className={classes.workExperiences__jobTitle}>
            Position: BackEnd Programmer / Database Manager
          </p>
          <p>Company: FUSANA</p>
          <p>Work Time: 4 Month (August 2022 - January 2023)</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
