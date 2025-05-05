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
        <p>Unreal: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>C++: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>Godot: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
      </div>

      <div className={clasess.skills__category}>
        <p className={clasess.skills__category__titleCategory}>
          FullStack Development
        </p>
        <p>HTML/CSS: Advanced</p>
        <div className={clasess.skills__category__container90}>
          <div>90%</div>
        </div>
        <p>TypeScript: Advanced</p>
        <div className={clasess.skills__category__container90}>
          <div>90%</div>
        </div>
        <p>React: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>MongoDB: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>RESTful API: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>NodeJS: Advanced</p>
        <div className={clasess.skills__category__container70}>
          <div>70%</div>
        </div>
        <p>Phyton: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        <p>Django: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        <p>Vue: Intermediate</p>
        <div className={clasess.skills__category__container50}>
          <div>50%</div>
        </div>
      </div>

      <div className={clasess.skills__category}>
        <p className={clasess.skills__category__titleCategory}>
          WokrFlow Stack
        </p>
        <p>GitHub: Advanced</p>
        <div className={clasess.skills__category__container90}>
          <div>90%</div>
        </div>
        <p>GitBash: Advanced</p>
        <div className={clasess.skills__category__container90}>
          <div>90%</div>
        </div>
        <p>Jira: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>Trello: Advanced</p>
        <div className={clasess.skills__category__container80}>
          <div>80%</div>
        </div>
        <p>Miro: Intermediate</p>
        <div className={clasess.skills__category__container60}>
          <div>60%</div>
        </div>
        </div>
    </div>
  );
};

export default Skills;
