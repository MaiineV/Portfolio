import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';
import { routes } from '../../routes';
import { contact } from '../../data/contact';
import Icon from '../ui/Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <section className={classes.brand}>
          <Link to="/" className={classes.brandRow} aria-label="Home">
            <span className={classes.brandMark} aria-hidden="true">{'</>'}</span>
            <span className={classes.brandName}>Ignacio Martinez</span>
          </Link>
          <p className={classes.tagline}>
            Game and full-stack developer based in Buenos Aires.
          </p>
          <div className={classes.social}>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
              aria-label="LinkedIn profile"
            >
              <Icon name="Linkedin" size={18} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
              aria-label="GitHub profile"
            >
              <Icon name="Github" size={18} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className={classes.socialLink}
              aria-label="Send email"
            >
              <Icon name="Mail" size={18} />
            </a>
          </div>
        </section>

        <nav className={classes.section} aria-label="Site map">
          <h2 className={classes.sectionTitle}>Sitemap</h2>
          <ul className={classes.linkList}>
            {routes.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className={classes.link}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Contact</h2>
          <ul className={classes.contactList}>
            <li>
              <Icon name="Mail" size={14} />
              <a href={`mailto:${contact.email}`} className={classes.link}>{contact.email}</a>
            </li>
            <li>
              <Icon name="MapPin" size={14} />
              <span>{contact.location}</span>
            </li>
            <li>
              <Icon name="Circle" size={10} className={classes.statusDot} />
              <span>{contact.availability}</span>
            </li>
          </ul>
        </section>
      </div>

      <div className={classes.bottom}>
        <p>© {year} Ignacio Martinez. All rights reserved.</p>
      </div>
    </footer>
  );
}
