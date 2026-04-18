import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.scss';
import selfImage from '../images/image-portfolio.jpg';
import PageShell from '../components/layout/PageShell';
import StatGrid from '../components/ui/StatGrid';
import Icon from '../components/ui/Icon';
import { routes } from '../routes';

const explore = routes.filter((r) => r.path !== '/');

const stats = [
  { value: '3+',  label: 'Years Experience' },
  { value: '15+', label: 'Technologies' },
  { value: '5+',  label: 'Projects Completed' },
];

export default function Home() {
  return (
    <PageShell>
      <section className={classes.hero}>
        <div className={classes.portrait}>
          <img src={selfImage} alt="Ignacio Martinez" />
        </div>
        <div className={classes.intro}>
          <p className={classes.greeting}>Hello, I'm</p>
          <h1 className={classes.name}>Ignacio Martinez</h1>
          <p className={classes.role}>
            Game Designer, Game Developer &amp; Full-Stack Engineer
          </p>
          <p className={classes.bio}>
            Graduated game developer with expertise in <strong>Unity C#</strong> and{' '}
            <strong>Unreal C++</strong>, currently seeking new challenges and opportunities. Skilled in
            game design as a technical game designer.
          </p>
          <div className={classes.cta}>
            <Link to="/projects" className={classes.ctaPrimary}>
              View my work <Icon name="ArrowRight" size={16} />
            </Link>
            <Link to="/aboutme" className={classes.ctaGhost}>
              About me
            </Link>
          </div>
        </div>
      </section>

      <section className={classes.section} aria-labelledby="explore-heading">
        <h2 id="explore-heading" className={classes.sectionTitle}>Explore</h2>
        <ul className={classes.cards}>
          {explore.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={classes.card}>
                <span className={classes.cardIcon}>
                  <Icon name={item.icon} size={20} />
                </span>
                <span className={classes.cardTitle}>{item.label}</span>
                <Icon name="ArrowRight" size={16} className={classes.cardArrow} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={classes.section} aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">By the numbers</h2>
        <StatGrid items={stats} />
      </section>
    </PageShell>
  );
}
