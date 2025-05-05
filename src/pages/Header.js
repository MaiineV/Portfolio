import React from 'react'

import classes from "../styles/Header.module.scss"
import menuImage from "../images/menu-icon.png"

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className={classes.nav}>
      <Link to={"/"} className={classes.nav__logo}>Portfolio</Link>
      <div className={classes.nav__buttons}>
          <Link to={"/"} className={classes.button}>Home</Link>
          <Link to={"/Projects"} className={classes.button}>Projects</Link>
          <Link to={"/Skills"} className={classes.button}>Skills</Link>
          <Link to={"/Experience"} className={classes.button}>Work Experience</Link>
          <Link to={"/AboutMe"} className={classes.button}>About Me</Link>
      </div>
      <img src={menuImage} alt="Menu Logo"className={classes.nav__menu}/>
    </div>
  )
}

export default Header