import React from 'react'

import classes from "../styles/Footer.module.scss"

import gitHubImage from "../images/GitHub.png"
import linkedinImage from "../images/Linkedin.png"

const Footer = () => {
  return (
    <div className={classes.footer}>
        <a href="https://www.linkedin.com/in/agustin-martinez-731705213/" target="_blank" rel="noreferrer"><img className={classes.footer__image} src={linkedinImage} alt="Linkedin Logo"/></a>
        <a href="https://github.com/MaiineV" target="_blank" rel="noreferrer"><img  className={classes.footer__image} src={gitHubImage} alt="GitHub Logo" /></a>
    </div>
  )
}

export default Footer