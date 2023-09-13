import React from 'react'
import classes from "../styles/Home.module.scss"
import { Link } from 'react-router-dom'

import selfImage from "../images/image-portfolio.jpg"

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__picture}>
        <img src={selfImage} alt="Self Pic Of Me" />
      </div>
      <div className={classes.home__name}>
        Ignacio Martinez
      </div>
      <div className={classes.home__resume}>
        Enthusiastic soon-to-be graduated game developer 
        trained in object oriented programming, knowledgeable 
        of design patterns and principles, skilled in problem solving 
        and critical thinking, with a strong foundation in linear algebra 
        and logic. Currently working on furthering my studies in C++.
      </div>
      <div className={classes.home__categories}>
        <div>Pages:</div>
        <Link className={classes.home__categories__buttons} to={"/projects"}>Portfolio</Link>
        <Link className={classes.home__categories__buttons} to={"/skills"}>Skills</Link>
        <Link className={classes.home__categories__buttons} to={"/experience"}>Work Experience</Link>
        <Link className={classes.home__categories__buttons} to={"/aboutme"}>About Me</Link>
      </div>
    </div>
  )
}

export default Home