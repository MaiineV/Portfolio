import React from 'react'
import classes from "../styles/Home.module.scss"
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
      Graduated game developer trained in object oriented programming, with expertice in Unity C# and Unreal C++, currently searching for a challeng and a new oportunities!
      Knowledge on Game Design, level design, full-stack development and producer to!
      </div>
    </div>
  )
}

export default Home