import React from "react";
import clasess from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <div className={clasess.skills}>
      <div className={clasess.skills__title}>Skills</div>
      <div className={clasess.skills__category}>
        <p className={clasess.skills__category__titleCategory}>
          Game Development
        </p>
        <p>Unity: Advanced</p>
        <div className={clasess.skills__category__container90}>
          <div>90%</div>
        </div>
        <p>C#: Advanced</p>
        <div className={clasess.skills__category__container90}>
          <div>90%</div>
        </div>
        <p>Unreal:  Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
        <p>C++: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
      </div>

      <div className={clasess.skills__category}>
        <p className={clasess.skills__category__titleCategory}>
          FullStack Development
        </p>
        <p>HTML: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        <p>CSS/SASS: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        <p>JavaScript: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
        <p>React: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
        <p>DataBases: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
        <p>Phyton: Intermediate</p>
        <div className={clasess.skills__category__container40}>
          <div>40%</div>
        </div>
        <p>Django: Intermediate</p>
        <div className={clasess.skills__category__container40}>
          <div>40%</div>
        </div>
        <p>Flask: Junior</p>
        <div className={clasess.skills__category__container20}>
          <div>20%</div>
        </div>
        <p>VUE: Junior</p>
        <div className={clasess.skills__category__container20}>
          <div>20%</div>
        </div>
      </div>

      <div className={clasess.skills__category}>
        <p className={clasess.skills__category__titleCategory}>
          Graphic Skills
        </p>
        <p>Maya: Intermediate</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>Substance Painter: Intermediate</p>
        <div className={clasess.skills__category__container70}>
          <div>70%</div>
        </div>
        <p>Photoshop: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        <p>Illustrator: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        <p>After Effects: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
        <p>Audition: Junior</p>
        <div className={clasess.skills__category__container30}>
          <div>30%</div>
        </div>
        <p>Zbrush: Junior</p>
        <div className={clasess.skills__category__container30}>
          <div>30%</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
