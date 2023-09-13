import React from 'react'

import classes from "../styles/Header.module.scss"
import menuImage from "../images/menu-icon.png"

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className={classes.nav}>
      <Link to={"/"} className={classes.nav__logo}>Portfolio</Link>
      <div className={classes.nav__buttons}>
          <Link to={"/projects"} className={classes.button}>Projects</Link>
          <Link to={"/skills"} className={classes.button}>Skills</Link>
          <Link to={"/experience"} className={classes.button}>Work Experience</Link>
          <Link to={"/aboutme"} className={classes.button}>About Me</Link>
      </div>
      <img src={menuImage} alt="Menu Logo"className={classes.nav__menu}/>
    </div>
  )
}

export default Header