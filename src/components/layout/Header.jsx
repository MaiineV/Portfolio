import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './Header.module.scss';
import { routes } from '../../routes';
import Icon from '../ui/Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <nav
        className={`${classes.nav} ${scrolled ? classes.navScrolled : ''}`}
        aria-label="Primary"
      >
        <div className={classes.container}>
          <NavLink to="/" className={classes.brand} aria-label="Home — Ignacio Martinez">
            <span className={classes.brandMark} aria-hidden="true">{'</>'}</span>
            <span className={classes.brandText}>Ignacio Martinez</span>
          </NavLink>

          <ul className={classes.menu}>
            {routes.map((r) => (
              <li key={r.path}>
                <NavLink
                  to={r.path}
                  end={r.path === '/'}
                  className={({ isActive }) =>
                    `${classes.link} ${isActive ? classes.linkActive : ''}`
                  }
                >
                  <Icon name={r.icon} size={16} />
                  <span>{r.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={classes.toggle}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        <div
          className={`${classes.overlay} ${open ? classes.overlayOpen : ''}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <div
          id="mobile-menu"
          className={`${classes.drawer} ${open ? classes.drawerOpen : ''}`}
          role="dialog"
          aria-modal={open}
          aria-label="Site menu"
          inert={open ? undefined : ''}
        >
          <ul className={classes.drawerList}>
            {routes.map((r) => (
              <li key={r.path}>
                <NavLink
                  to={r.path}
                  end={r.path === '/'}
                  className={({ isActive }) =>
                    `${classes.drawerLink} ${isActive ? classes.drawerLinkActive : ''}`
                  }
                >
                  <Icon name={r.icon} size={18} />
                  <span>{r.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={classes.spacer} />
    </>
  );
}
