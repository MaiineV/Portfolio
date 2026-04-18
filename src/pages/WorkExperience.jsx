import { useMemo, useState } from 'react';
import classes from '../styles/WorkExperience.module.scss';
import PageShell from '../components/layout/PageShell';
import PageHeader from '../components/ui/PageHeader';
import StatGrid from '../components/ui/StatGrid';
import FilterChips from '../components/ui/FilterChips';
import Icon from '../components/ui/Icon';
import { experiences, jobTypes, computeExperienceStats } from '../data/experiences';

function ExperienceItem({ exp }) {
  return (
    <li className={classes.item}>
      <span className={classes.dot} aria-hidden="true">
        <Icon name={exp.icon} size={16} />
      </span>
      <article className={classes.card}>
        <header className={classes.cardHead}>
          <div>
            <h3 className={classes.title}>{exp.title}</h3>
            <p className={classes.company}>{exp.company}</p>
          </div>
          <span
            className={`${classes.statusPill} ${
              exp.status === 'Current' ? classes.statusCurrent : classes.statusCompleted
            }`}
          >
            {exp.status}
          </span>
        </header>

        <div className={classes.meta}>
          <span><Icon name="MapPin" size={14} /> {exp.location}</span>
          <span><Icon name="Calendar" size={14} /> {exp.period}</span>
          <span><Icon name="Clock" size={14} /> {exp.duration}</span>
          <span><Icon name="Tag" size={14} /> {exp.type}</span>
        </div>

        <p className={classes.description}>{exp.description}</p>

        <details className={classes.details}>
          <summary>Responsibilities</summary>
          <ul>
            {exp.responsibilities.map((r) => (<li key={r}>{r}</li>))}
          </ul>
        </details>

        <ul className={classes.tech}>
          {exp.technologies.map((tech) => (<li key={tech}>{tech}</li>))}
        </ul>
      </article>
    </li>
  );
}

export default function WorkExperience() {
  const [type, setType] = useState('All');
  const filtered = useMemo(
    () => (type === 'All' ? experiences : experiences.filter((e) => e.type === type)),
    [type],
  );
  const computed = computeExperienceStats(experiences);
  const stats = [
    { value: computed.totalExperience,    label: 'Positions' },
    { value: `${computed.totalYears}+`,   label: 'Years Experience' },
    { value: computed.currentPositions,   label: 'Current Roles' },
    { value: computed.companies,          label: 'Companies' },
  ];

  return (
    <PageShell width="wide">
      <PageHeader
        title="Experience"
        subtitle="My career path through game development, education, and full-stack programming."
      />

      <div className={classes.statsBlock}>
        <StatGrid items={stats} />
      </div>

      <FilterChips items={jobTypes} value={type} onChange={setType} label="Job type" />

      <ol className={classes.timeline}>
        {filtered.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </ol>
    </PageShell>
  );
}
