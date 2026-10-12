import { Link, useSearchParams } from 'react-router-dom';
import classes from '../styles/Home.module.scss';
import selfImage from '../images/image-portfolio.webp';
import PageShell from '../components/layout/PageShell';
import FilterChips from '../components/ui/FilterChips';
import StatGrid from '../components/ui/StatGrid';
import Icon from '../components/ui/Icon';
import { routes } from '../routes';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const explore = routes.filter((r) => r.path !== '/');

// Home has one mode per profile; `?mode=fullstack` deep-links to the second one.
const MODES = [
  {
    id: 'game-design',
    label: 'Game Designer',
    role: 'Game Designer · Systems · Balancing · Level Design · Unity · Unreal',
    bio: (
      <>
        I design games and can build what I design: <strong>systems design</strong>,{' '}
        <strong>balancing</strong>, level design and GDDs, backed by the programming to prototype
        my own ideas in <strong>Unity</strong> and <strong>Unreal</strong>. Open to game design
        roles.
      </>
    ),
    cta: 'View my games',
    category: 'Game Design',
    stats: [
      { value: '4+',  label: 'Years Experience' },
      { value: '15+', label: 'Game Prototypes' },
      { value: '3',   label: 'GamesCom Latam Pitches' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Developer',
    role: 'Full-Stack Developer · React · TypeScript · Node.js · C#/.NET',
    bio: (
      <>
        I build web applications end to end with <strong>React</strong>,{' '}
        <strong>TypeScript</strong>, Node.js and C#/.NET. My real-time and game background
        (<strong>Unity C#</strong>, <strong>Unreal C++</strong>) makes me obsessive about
        performance. Open to full-stack and frontend roles.
      </>
    ),
    cta: 'View my work',
    category: 'FullStack',
    stats: [
      { value: '4+',  label: 'Years Experience' },
      { value: '15+', label: 'Technologies' },
      { value: '5+',  label: 'Projects Completed' },
    ],
  },
];

const MODE_LABELS = MODES.map((m) => m.label);

export default function Home() {
  const [params, setParams] = useSearchParams();
  const mode = MODES.find((m) => m.id === params.get('mode')) || MODES[0];
  useDocumentTitle(mode.label);

  const selectMode = (label) => {
    const next = MODES.find((m) => m.label === label);
    setParams(next === MODES[0] ? {} : { mode: next.id }, { replace: true });
  };

  return (
    <PageShell>
      <section className={classes.hero}>
        <div className={classes.portrait}>
          <img src={selfImage} alt="Ignacio Martinez" width={240} height={240} />
        </div>
        <div className={classes.intro}>
          <p className={classes.greeting}>Hello, I'm</p>
          <h1 className={classes.name}>Ignacio Martinez</h1>
          <div className={classes.modes}>
            <FilterChips
              items={MODE_LABELS}
              value={mode.label}
              onChange={selectMode}
              label="Profile"
            />
          </div>
          <p className={classes.role}>{mode.role}</p>
          <p className={classes.bio}>{mode.bio}</p>
          <div className={classes.cta}>
            <Link
              to="/projects"
              state={{ category: mode.category }}
              className={classes.ctaPrimary}
            >
              {mode.cta} <Icon name="ArrowRight" size={16} />
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
        <StatGrid items={mode.stats} />
      </section>
    </PageShell>
  );
}
