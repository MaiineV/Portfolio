import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import classes from "../styles/Header.module.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/projects", label: "Projects", icon: "🎮" },
    { path: "/skills", label: "Skills", icon: "💻" },
    { path: "/experience", label: "Experience", icon: "🚀" },
    { path: "/aboutme", label: "About Me", icon: "👨‍💻" }
  ]

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isActiveRoute = (path) => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      <nav className={`${classes.nav} ${isScrolled ? classes.nav__scrolled : ''}`}>
        <div className={classes.nav__container}>
          {/* Logo */}
          <Link 
            to="/" 
            className={classes.nav__logo}
            onClick={closeMenu}
          >
            <span className={classes.nav__logo__icon}>{'</>'}</span>
            <span className={classes.nav__logo__text}>Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={classes.nav__buttons}>
            {navigationItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${classes.nav__button} ${
                  isActiveRoute(item.path) ? classes.nav__button__active : ''
                }`}
                style={{'--delay': `${index * 0.1}s`}}
              >
                <span className={classes.nav__button__icon}>{item.icon}</span>
                <span className={classes.nav__button__text}>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${classes.nav__menuButton} ${isMenuOpen ? classes.nav__menuButton__active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className={classes.nav__menuButton__line}></span>
            <span className={classes.nav__menuButton__line}></span>
            <span className={classes.nav__menuButton__line}></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`${classes.nav__overlay} ${isMenuOpen ? classes.nav__overlay__active : ''}`}
          onClick={closeMenu}
        />

        {/* Mobile Navigation */}
        <div className={`${classes.nav__mobile} ${isMenuOpen ? classes.nav__mobile__active : ''}`}>
          <div className={classes.nav__mobile__header}>
            <Link 
              to="/" 
              className={classes.nav__mobile__logo}
              onClick={closeMenu}
            >
              <span className={classes.nav__mobile__logo__icon}>{'</>'}</span>
              <span>Portfolio</span>
            </Link>
            <button
              className={classes.nav__mobile__close}
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          <nav className={classes.nav__mobile__menu}>
            {navigationItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${classes.nav__mobile__link} ${
                  isActiveRoute(item.path) ? classes.nav__mobile__link__active : ''
                }`}
                onClick={closeMenu}
                style={{'--delay': `${index * 0.1}s`}}
              >
                <span className={classes.nav__mobile__link__icon}>{item.icon}</span>
                <span className={classes.nav__mobile__link__text}>{item.label}</span>
                <span className={classes.nav__mobile__link__arrow}>→</span>
              </Link>
            ))}
          </nav>

          <div className={classes.nav__mobile__footer}>
            <p>Let's create something amazing together!</p>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jumping */}
      <div className={classes.nav__spacer}></div>
    </>
  )
}

export default Header