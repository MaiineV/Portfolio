import { useState } from 'react';
import classes from '../styles/AboutMe.module.scss';
import selfImage from '../images/image-portfolio.webp';
import PageShell from '../components/layout/PageShell';
import PageHeader from '../components/ui/PageHeader';
import StatGrid from '../components/ui/StatGrid';
import Tabs from '../components/ui/Tabs';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import {
  education,
  certifications,
  achievements,
  personalFacts,
  interests,
  workStyleTraits,
  aboutTabs,
} from '../data/about';
import { contact } from '../data/contact';

const heroStats = [
  { value: '3+',   label: 'Years Experience' },
  { value: '100+', label: 'Students Taught' },
  { value: '15+',  label: 'Projects Built' },
];

function Overview() {
  return (
    <div className={classes.panel}>
      <section>
        <h3 className={classes.h3}>My mission</h3>
        <p>
          To create engaging and innovative gaming experiences while sharing knowledge with the
          next generation of developers. I believe in the power of games to tell stories, solve
          problems, and bring people together.
        </p>
      </section>

      <section>
        <h3 className={classes.h3}>Interests</h3>
        <ul className={classes.tagList}>
          {interests.map((i) => (<li key={i}>{i}</li>))}
        </ul>
      </section>

      <blockquote className={classes.quote}>
        <p>"Code is like humor. When you have to explain it, it's bad."</p>
        <cite>— Cory House</cite>
      </blockquote>
    </div>
  );
}

function Education() {
  return (
    <div className={classes.panel}>
      <section>
        <h3 className={classes.h3}>Education</h3>
        <ol className={classes.educationList}>
          {education.map((e) => (
            <li key={e.degree} className={classes.educationItem}>
              <div className={classes.educationYear}>{e.year}</div>
              <div className={classes.educationBody}>
                <h4 className={classes.h4}>{e.degree}</h4>
                <p className={classes.subtle}>{e.school}</p>
                <p className={classes.subtle}>{e.note}</p>
                {e.status === 'in-progress' && (
                  <span className={classes.badge}>In progress</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className={classes.h3}>Certifications</h3>
        <ul className={classes.certList}>
          {certifications.map((c) => (
            <li key={c.text}>
              <Icon name="Award" size={16} />
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Achievements() {
  return (
    <ul className={classes.cardGrid}>
      {achievements.map((a) => (
        <li key={a.title}>
          <Card>
            <div className={classes.achievementHead}>
              <Icon name="Trophy" size={20} />
              <h4 className={classes.h4}>{a.title}</h4>
            </div>
            <p className={classes.subtle}>{a.description}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

function Personal() {
  return (
    <div className={classes.panel}>
      <section>
        <h3 className={classes.h3}>Fun facts</h3>
        <dl className={classes.facts}>
          {personalFacts.map((f) => (
            <div key={f.category} className={classes.fact}>
              <dt>{f.category}</dt>
              <dd>{f.fact}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h3 className={classes.h3}>How I work</h3>
        <p>
          I thrive in collaborative environments where creativity meets technical excellence.
          My approach combines systematic problem-solving with creative thinking, always keeping
          the end-user experience in mind.
        </p>
        <ul className={classes.tagList}>
          {workStyleTraits.map((t) => (<li key={t}>{t}</li>))}
        </ul>
      </section>
    </div>
  );
}

const PANELS = {
  overview:     <Overview />,
  education:    <Education />,
  achievements: <Achievements />,
  personal:     <Personal />,
};

export default function AboutMe() {
  const [activeId, setActiveId] = useState('overview');

  return (
    <PageShell>
      <PageHeader
        title="About"
        subtitle="Get to know the person behind the code."
      />

      <section className={classes.hero}>
        <div className={classes.portrait}>
          <img src={selfImage} alt="Ignacio Martinez" width={240} height={240} />
          <span className={classes.availability}>
            <span className={classes.availabilityDot} aria-hidden="true" />
            Available for hire
          </span>
        </div>
        <div className={classes.heroText}>
          <p className={classes.greeting}>Hello, I'm</p>
          <h2 className={classes.name}>Ignacio Martinez</h2>
          <p className={classes.bio}>
            FullStack Developer specialized in Game Development with a strong background in Game
            Design and Level Design. Currently working as a professor while seeking new challenges
            in the gaming industry.
          </p>
          <StatGrid items={heroStats} />
        </div>
      </section>

      <Tabs tabs={aboutTabs} activeId={activeId} onChange={setActiveId} label="About sections">
        {(id) => PANELS[id]}
      </Tabs>

      <section className={classes.cta}>
        <h3 className={classes.h3}>Let's work together</h3>
        <p>
          I'm always excited to take on new challenges and collaborate with passionate people.
          Let's create something amazing.
        </p>
        <div className={classes.ctaActions}>
          <a href={`mailto:${contact.email}`} className={classes.ctaPrimary}>
            <Icon name="Mail" size={16} /> Get in touch
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.ctaGhost}
          >
            <Icon name="Linkedin" size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </PageShell>
  );
}
