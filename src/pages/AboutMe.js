import React from 'react';
import styles from '../styles/AboutMe.module.scss';
import selfImage from "../images/image-portfolio.jpg"

const education = [
  {
    year: '2024',
    degree: 'B.Sc. in Computer Science',
    school: 'University X',
    note: 'Specialization in 3D Graphics & AI'
  },
  {
    year: '2022',
    degree: 'Diploma in Programming',
    school: 'Institute Y',
    note: 'Final Project: "Bullet Time"'
  },
  {
    year: '2021',
    degree: 'Advanced Unity Course',
    school: 'School Z',
    note: 'Focus on AI & Networking'
  },
];

const AboutMe = () => (
  <section id="about" className={styles.about}>
    <h2>About Me</h2>
    <div className={styles.top}>
      <img src={selfImage} alt="Agustin Martinez" className={styles.photo}/>
      <p className={styles.bio}>
        I am a game developer with expertise in Unity and C++. Passionate about game AI and performance optimization.
        I strive to apply SOLID principles and design patterns in challenging projects.
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

    <div className={styles.extras}>
      <h4>Certifications</h4>
      <div className={styles.pills}>
        <span>React – 2023</span>
        <span>Udemy: Solidity – 2024</span>
        <span>Scrum Master – 2023</span>
      </div>
    </div>
  </section>
);

export default AboutMe;
