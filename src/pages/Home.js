import React from 'react'
import { Link } from 'react-router-dom'
import classes from "../styles/Home.module.scss"
import selfImage from "../images/image-portfolio.jpg"

const Home = () => {
  const quickActions = [
    {
      title: "View Projects",
      description: "Check out my latest work",
      link: "/projects",
      icon: "🎮"
    },
    {
      title: "My Skills", 
      description: "Technical expertise overview",
      link: "/skills",
      icon: "💻"
    },
    {
      title: "Experience",
      description: "Professional journey",
      link: "/experience", 
      icon: "🚀"
    },
    {
      title: "About Me",
      description: "Get to know me better",
      link: "/aboutme",
      icon: "👨‍💻"
    }
  ];

  return (
    <div className={classes.home}>
      {/* Hero Section */}
      <div className={classes.home__hero}>
        <div className={classes.home__picture}>
          <div className={classes.home__picture__wrapper}>
            <img src={selfImage} alt="Ignacio Martinez - Game Developer" />
            <div className={classes.home__picture__glow}></div>
          </div>
        </div>
        
        <div className={classes.home__content}>
          <div className={classes.home__greeting}>
            <span className={classes.home__greeting__text}>Hello, I'm</span>
          </div>
          <div className={classes.home__name}>
            <span className={classes.home__name__first}>Ignacio</span>
            <span className={classes.home__name__last}>Martinez</span>
          </div>
          <div className={classes.home__title}>
            <span className={classes.home__title__main}>Game Designer, Game Developer</span>
            <span className={classes.home__title__sub}>& Full-Stack Engineer</span>
          </div>
          <div className={classes.home__resume}>
            <p>
              Graduated game developer with expertise in <strong>Unity C#</strong> and <strong>Unreal C++</strong>, 
              currently seeking new challenges and opportunities! Skilled in Game Design, Level Design, 
              Full-Stack Development, and Production.
            </p>
          </div>
          
          <div className={classes.home__cta}>
            <Link to="/projects" className={classes.home__cta__primary}>
              View My Work
            </Link>
            <Link to="/aboutme" className={classes.home__cta__secondary}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className={classes.home__section}>
        <h2 className={classes.home__section__title}>Explore My Portfolio</h2>
        <div className={classes.home__quickActions}>
          {quickActions.map((action, index) => (
            <Link 
              key={index} 
              to={action.link} 
              className={classes.home__quickActions__card}
              style={{'--delay': `${index * 0.1}s`}}
            >
              <div className={classes.home__quickActions__card__icon}>
                {action.icon}
              </div>
              <div className={classes.home__quickActions__card__content}>
                <h3 className={classes.home__quickActions__card__title}>
                  {action.title}
                </h3>
                <p className={classes.home__quickActions__card__description}>
                  {action.description}
                </p>
              </div>
              <div className={classes.home__quickActions__card__arrow}>
                →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Skills Highlight */}
      <div className={classes.home__section}>
        <div className={classes.home__highlights}>
          <div className={classes.home__highlights__item}>
            <div className={classes.home__highlights__number}>3+</div>
            <div className={classes.home__highlights__label}>Years Experience</div>
          </div>
          <div className={classes.home__highlights__item}>
            <div className={classes.home__highlights__number}>15+</div>
            <div className={classes.home__highlights__label}>Technologies</div>
          </div>
          <div className={classes.home__highlights__item}>
            <div className={classes.home__highlights__number}>5+</div>
            <div className={classes.home__highlights__label}>Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home