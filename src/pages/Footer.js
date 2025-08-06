import React from 'react'
import { Link } from 'react-router-dom'

import classes from "../styles/Footer.module.scss"

import gitHubImage from "../images/GitHub.png"
import linkedinImage from "../images/Linkedin.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/agustin-martinez-731705213/",
      image: linkedinImage,
      icon: "💼",
      color: "#0077B5"
    },
    {
      name: "GitHub", 
      url: "https://github.com/MaiineV",
      image: gitHubImage,
      icon: "💻",
      color: "#333"
    }
  ]

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "About Me", path: "/aboutme" }
  ]

  const contactInfo = {
    email: "contact@ignacio-martinez.dev", // Replace with actual email
    location: "Buenos Aires, Argentina",
    availability: "Open to opportunities"
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className={classes.footer}>
      {/* Main Footer Content */}
      <div className={classes.footer__container}>
        
        {/* Brand Section */}
        <div className={classes.footer__brand}>
          <div className={classes.footer__logo}>
            <span className={classes.footer__logo__icon}>{'</>'}</span>
            <span className={classes.footer__logo__text}>Ignacio Martinez</span>
          </div>
          <p className={classes.footer__tagline}>
            Creating amazing digital experiences through code and creativity
          </p>
          <div className={classes.footer__social}>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer__social__link}
                aria-label={`Visit my ${social.name} profile`}
                style={{'--delay': `${index * 0.1}s`, '--color': social.color}}
              >
                <img 
                  src={social.image} 
                  alt={`${social.name} Logo`}
                  className={classes.footer__social__image}
                />
                <span className={classes.footer__social__icon}>{social.icon}</span>
                <span className={classes.footer__social__tooltip}>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={classes.footer__section}>
          <h3 className={classes.footer__section__title}>Quick Links</h3>
          <nav className={classes.footer__nav}>
            {quickLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={classes.footer__nav__link}
                style={{'--delay': `${index * 0.05}s`}}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className={classes.footer__section}>
          <h3 className={classes.footer__section__title}>Get In Touch</h3>
          <div className={classes.footer__contact}>
            <div className={classes.footer__contact__item}>
              <span className={classes.footer__contact__icon}>📧</span>
              <span className={classes.footer__contact__text}>{contactInfo.email}</span>
            </div>
            <div className={classes.footer__contact__item}>
              <span className={classes.footer__contact__icon}>📍</span>
              <span className={classes.footer__contact__text}>{contactInfo.location}</span>
            </div>
            <div className={classes.footer__contact__item}>
              <span className={classes.footer__contact__icon}>🚀</span>
              <span className={classes.footer__contact__text}>{contactInfo.availability}</span>
            </div>
          </div>
        </div>

        {/* Skills Highlight */}
        <div className={classes.footer__section}>
          <h3 className={classes.footer__section__title}>Specializing In</h3>
          <div className={classes.footer__skills}>
            <span className={classes.footer__skills__tag}>Unity C#</span>
            <span className={classes.footer__skills__tag}>Unreal C++</span>
            <span className={classes.footer__skills__tag}>React</span>
            <span className={classes.footer__skills__tag}>Node.js</span>
            <span className={classes.footer__skills__tag}>Game Design</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={classes.footer__bottom}>
        <div className={classes.footer__bottom__container}>
          <div className={classes.footer__bottom__left}>
            <p className={classes.footer__copyright}>
              © {currentYear} Ignacio Martinez. All rights reserved.
            </p>
            <p className={classes.footer__made}>
              Made with <span className={classes.footer__heart}>❤️</span> and lots of ☕
            </p>
          </div>
          
          <button 
            className={classes.footer__scrollTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
          >
            <span className={classes.footer__scrollTop__icon}>↑</span>
            <span className={classes.footer__scrollTop__text}>Top</span>
          </button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className={classes.footer__bg}>
        <div className={classes.footer__bg__shape1}></div>
        <div className={classes.footer__bg__shape2}></div>
        <div className={classes.footer__bg__shape3}></div>
      </div>
    </footer>
  )
}

export default Footer