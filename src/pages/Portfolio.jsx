import { useMemo, useState } from 'react';
import classes from '../styles/Portfolio.module.scss';
import PageShell from '../components/layout/PageShell';
import PageHeader from '../components/ui/PageHeader';
import FilterChips from '../components/ui/FilterChips';
import StatGrid from '../components/ui/StatGrid';
import Icon from '../components/ui/Icon';
import { projects, projectCategories } from '../data/projects';

const STATUS_VARIANT = {
  Released:        'released',
  'In Development': 'development',
  Prototype:       'prototype',
};

function ProjectCard({ project }) {
  return (
    <article className={classes.card}>
      <div className={classes.imageWrap}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={classes.image}
        />
        {project.featured && (
          <span className={classes.featured}>
            <Icon name="Star" size={14} />
            Featured
          </span>
        )}
      </div>

      <div className={classes.body}>
        <header className={classes.cardHeader}>
          <div className={classes.tags}>
            {project.categories.map((c) => (
              <span key={c} className={classes.tag}>{c}</span>
            ))}
          </div>
          <span className={`${classes.status} ${classes[STATUS_VARIANT[project.status] || 'prototype']}`}>
            {project.status}
          </span>
        </header>

        <h3 className={classes.cardTitle}>{project.title}</h3>
        <p className={classes.description}>{project.description}</p>

        <ul className={classes.tech}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={classes.actions}>
          {project.viewLink && (
            <a
              href={project.viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.actionPrimary}
            >
              <Icon name="ExternalLink" size={14} />
              View
            </a>
          )}
          {project.gddLink && (
            <a
              href={project.gddLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.actionGhost}
            >
              <Icon name="FileText" size={14} />
              GDD
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.actionGhost}
            >
              <Icon name="Github" size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.categories.includes(category))),
    [category],
  );

  const stats = [
    { value: projects.length,                                          label: 'Projects' },
    { value: new Set(projects.flatMap((p) => p.technologies)).size,    label: 'Technologies' },
    { value: projects.filter((p) => p.featured).length,                label: 'Featured' },
  ];

  return (
    <PageShell width="wide">
      <PageHeader
        title="Projects"
        subtitle="A showcase of my work, categorized by type and technology."
      />

      <FilterChips
        items={projectCategories}
        value={category}
        onChange={setCategory}
        label="Project category"
      />

      <ul className={classes.grid}>
        {filtered.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>

      <div className={classes.statsBlock}>
        <StatGrid items={stats} />
      </div>
    </PageShell>
  );
}
