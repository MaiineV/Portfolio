import React, { useState, useEffect } from "react";
import styles from "../styles/AboutMe.module.scss";
import selfImage from "../images/image-portfolio.jpg";

const education = [
  {
    year: "Current",
    degree: "Degree in Video Game Development",
    school: "UADE",
    note: 'Focus on Game Design & Producer',
    status: "in-progress"
  },
  {
    year: "2024",
    degree: "Technical Degree in Video Game Development",
    school: "Escuela DaVinci",
    note: "Focus on Unity & Unreal Programming",
    status: "completed"
  },
];

const achievements = [
  {
    title: "Game Showcased at EVA 2023",
    description: "Robotpalooza was featured at EVA 2023 gaming convention",
    icon: "🏆"
  },
  {
    title: "GamesCom Latam Participant",
    description: "Pitched Sawi, The Void Buster at GamesCom Latam",
    icon: "🎮"
  },
  {
    title: "Professor at Two Universities",
    description: "Teaching game development at DaVinci and UADE",
    icon: "👨‍🏫"
  },
  {
    title: "Full-Stack Expertise",
    description: "Proficient in both game and web development",
    icon: "💻"
  }
];

const personalFacts = [
  {
    category: "Coding Journey",
    fact: "Started programming at age 16 with Python",
    icon: "🐍"
  },
  {
    category: "Game Dev Passion",
    fact: "Developed 15+ game prototypes in the last 3 years",
    icon: "🎯"
  },
  {
    category: "Teaching Love",
    fact: "Mentored over 100 students in game development",
    icon: "📚"
  },
  {
    category: "Problem Solver",
    fact: "Can debug code for hours without getting frustrated",
    icon: "🔧"
  }
];

const interests = [
  "Game Design Theory", "AI Development", "Level Design", 
  "UI/UX Design", "3D Modeling", "Music Production",
  "Indie Game Development", "Teaching & Mentoring"
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = () => {
    // This would normally download a PDF resume
    alert("Resume download feature - You would implement this to download your actual resume PDF");
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '👨‍💻' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'personal', label: 'Personal', icon: '🌟' }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__header}>
        <h2 className={styles.about__title}>About Me</h2>
        <p className={styles.about__subtitle}>
          Get to know the person behind the code
        </p>
      </div>

      {/* Hero Section with Photo and Quick Intro */}
      <div className={styles.about__hero}>
        <div className={styles.about__photo}>
          <div className={styles.about__photo__wrapper}>
            <img src={selfImage} alt="Ignacio Martinez" className={styles.about__photo__image} />
            <div className={styles.about__photo__glow}></div>
          </div>
          <div className={styles.about__photo__badge}>
            <span className={styles.about__photo__badge__text}>Available for hire</span>
            <span className={styles.about__photo__badge__pulse}></span>
          </div>
        </div>
        
        <div className={styles.about__intro}>
          <div className={styles.about__intro__content}>
            <h3 className={styles.about__intro__greeting}>
              Hello! I'm <span className={styles.about__intro__name}>Ignacio Martinez</span>
            </h3>
            <p className={styles.about__intro__description}>
              I'm a passionate FullStack Developer specialized in Game Development with a strong 
              background in Game Design and Level Design. Currently working as a professor while 
              actively seeking new challenges in the gaming industry.
            </p>
            <div className={styles.about__intro__stats}>
              <div className={styles.about__intro__stat}>
                <span className={styles.about__intro__stat__number}>3+</span>
                <span className={styles.about__intro__stat__label}>Years Experience</span>
              </div>
              <div className={styles.about__intro__stat}>
                <span className={styles.about__intro__stat__number}>100+</span>
                <span className={styles.about__intro__stat__label}>Students Taught</span>
              </div>
              <div className={styles.about__intro__stat}>
                <span className={styles.about__intro__stat__number}>15+</span>
                <span className={styles.about__intro__stat__label}>Projects Built</span>
              </div>
            </div>
            <button 
              className={styles.about__intro__resume}
              onClick={downloadResume}
            >
              <span className={styles.about__intro__resume__icon}>📄</span>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Tabbed Content Section */}
      <div className={styles.about__content}>
        <div className={styles.about__tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.about__tab} ${activeTab === tab.id ? styles.about__tab__active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.about__tab__icon}>{tab.icon}</span>
              <span className={styles.about__tab__label}>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.about__tabContent}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className={styles.about__overview}>
              <div className={styles.about__mission}>
                <h4>My Mission</h4>
                <p>
                  To create engaging and innovative gaming experiences while sharing knowledge 
                  with the next generation of developers. I believe in the power of games to 
                  tell stories, solve problems, and bring people together.
                </p>
              </div>
              
              <div className={styles.about__interests}>
                <h4>Interests & Hobbies</h4>
                <div className={styles.about__interests__grid}>
                  {interests.map((interest, index) => (
                    <span key={index} className={styles.about__interests__tag}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.about__quote}>
                <blockquote>
                  "Code is like humor. When you have to explain it, it's bad."
                </blockquote>
                <cite>- Cory House (but I totally agree!)</cite>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className={styles.about__education}>
              <div className={styles.about__timeline}>
                {education.map((item, index) => (
                  <div key={index} className={styles.about__timeline__item}>
                    <div className={styles.about__timeline__marker}>
                      <div className={`${styles.about__timeline__dot} ${
                        item.status === 'in-progress' ? styles.about__timeline__dot__active : ''
                      }`}></div>
                    </div>
                    <div className={styles.about__timeline__content}>
                      <span className={styles.about__timeline__year}>{item.year}</span>
                      <h4 className={styles.about__timeline__degree}>{item.degree}</h4>
                      <p className={styles.about__timeline__school}>{item.school}</p>
                      <small className={styles.about__timeline__note}>{item.note}</small>
                      {item.status === 'in-progress' && (
                        <span className={styles.about__timeline__badge}>In Progress</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.about__certifications}>
                <h4>Certifications & Courses</h4>
                <div className={styles.about__certifications__grid}>
                  <div className={styles.about__certification}>
                    <span className={styles.about__certification__icon}>🔥</span>
                    <span className={styles.about__certification__text}>Udemy: C++ Unreal Engine – Current</span>
                  </div>
                  <div className={styles.about__certification}>
                    <span className={styles.about__certification__icon}>🐍</span>
                    <span className={styles.about__certification__text}>Django BackEnd – 2023</span>
                  </div>
                  <div className={styles.about__certification}>
                    <span className={styles.about__certification__icon}>🌐</span>
                    <span className={styles.about__certification__text}>Python Full-Stack – 2022</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className={styles.about__achievements}>
              <div className={styles.about__achievements__grid}>
                {achievements.map((achievement, index) => (
                  <div key={index} className={styles.about__achievement}>
                    <div className={styles.about__achievement__icon}>
                      {achievement.icon}
                    </div>
                    <div className={styles.about__achievement__content}>
                      <h4 className={styles.about__achievement__title}>
                        {achievement.title}
                      </h4>
                      <p className={styles.about__achievement__description}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Tab */}
          {activeTab === 'personal' && (
            <div className={styles.about__personal}>
              <div className={styles.about__facts}>
                <h4>Fun Facts About Me</h4>
                <div className={styles.about__facts__grid}>
                  {personalFacts.map((fact, index) => (
                    <div key={index} className={styles.about__fact}>
                      <div className={styles.about__fact__header}>
                        <span className={styles.about__fact__icon}>{fact.icon}</span>
                        <span className={styles.about__fact__category}>{fact.category}</span>
                      </div>
                      <p className={styles.about__fact__text}>{fact.fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.about__workStyle}>
                <h4>My Work Style</h4>
                <div className={styles.about__workStyle__content}>
                  <p>
                    I thrive in collaborative environments where creativity meets technical excellence. 
                    My approach combines systematic problem-solving with creative thinking, always 
                    keeping the end user experience in mind.
                  </p>
                  <div className={styles.about__workStyle__traits}>
                    <span className={styles.about__workStyle__trait}>🧠 Analytical Thinker</span>
                    <span className={styles.about__workStyle__trait}>🎨 Creative Problem Solver</span>
                    <span className={styles.about__workStyle__trait}>🤝 Team Collaborator</span>
                    <span className={styles.about__workStyle__trait}>📚 Continuous Learner</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.about__cta}>
        <div className={styles.about__cta__content}>
          <h3>Let's Work Together!</h3>
          <p>
            I'm always excited to take on new challenges and collaborate with 
            passionate people. Let's create something amazing!
          </p>
          <div className={styles.about__cta__buttons}>
            <a 
              href="mailto:contact@ignacio-martinez.dev" 
              className={styles.about__cta__primary}
            >
              <span className={styles.about__cta__icon}>📧</span>
              Get In Touch
            </a>
            <a 
              href="https://www.linkedin.com/in/agustin-martinez-731705213/" 
              target="_blank" 
              rel="noreferrer"
              className={styles.about__cta__secondary}
            >
              <span className={styles.about__cta__icon}>💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;