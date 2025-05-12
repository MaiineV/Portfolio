import React from "react";
import styles from "../styles/AboutMe.module.scss";
import selfImage from "../images/image-portfolio.jpg";

const education = [
  {
    year: "Current",
    degree: "Degree in Video Game Development",
    school: "UADE",
    note: 'Focus on Game Design & Producer',
  },
  {
    year: "2024",
    degree: "Technical Degree in Video Game Development",
    school: "Escuela DaVinci",
    note: "Focus on Unity & Unreal Programming",
  },
];

const AboutMe = () => (
  <section id="about" className={styles.about}>
    <h2>About Me</h2>

    <div>
      <div className={styles.top}>
        <img src={selfImage} alt="Agustin Martinez" className={styles.photo} />
        <p className={styles.bio}>
          I'm a FullStack Development orientated to Game Development and also a Game Designer and Level Designer
          with a great background on Game Development and Design Work, also with work experience in Producer!
        </p>
      </div>

      <div className={styles.timeline}>
        {education.map((e, i) => (
          <div key={i} className={styles.event}>
            <div className={styles.dot} />
            <div className={styles.content}>
              <span className={styles.year}>{e.year}</span>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.school}>{e.school}</p>
              <small className={styles.note}>{e.note}</small>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.extras}>
      <h4>Certifications</h4>
      <div className={styles.pills}>
        <span>Udemy: C++ Unreal Engine – Current</span>
        <span>Django BackEnd – 2023</span>
        <span>Phyton Full-Stack – 2022</span>
      </div>
    </div>
  </section>
);

export default AboutMe;
