import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from "../styles/Header.module.scss"
import menuImage from "../images/menu-icon.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className={classes.nav}>
      <Link to="/" className={classes.nav__logo}>Portfolio</Link>

      <div className={classes.nav__buttons}>
        <Link to="/" className={classes.button}>Home</Link>
        <Link to="/projects" className={classes.button}>Projects</Link>
        <Link to="/skills" className={classes.button}>Skills</Link>
        <Link to="/experience" className={classes.button}>Work Experience</Link>
        <Link to="/aboutme" className={classes.button}>About Me</Link>
      </div>

      <img
        src={menuImage}
        alt="Menu Logo"
        className={classes.nav__menu}
        onClick={toggleMenu}
      />

      <div className={`${classes.nav__nav} ${isMenuOpen ? classes.isMenu : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Work Experience</Link></li>
          <li><Link to="/aboutme" onClick={closeMenu}>About Me</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
