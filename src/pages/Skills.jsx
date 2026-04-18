import { useState } from 'react';
import classes from '../styles/Skills.module.scss';
import PageShell from '../components/layout/PageShell';
import PageHeader from '../components/ui/PageHeader';
import StatGrid from '../components/ui/StatGrid';
import Tabs from '../components/ui/Tabs';
import SkillBar from '../components/ui/SkillBar';
import { skillsData, skillLevelText, computeOverallStats } from '../data/skills';

const overall = computeOverallStats(skillsData);
const stats = [
  { value: overall.totalSkills,        label: 'Total Skills' },
  { value: `${overall.averageLevel}%`, label: 'Average Level' },
  { value: overall.categories,         label: 'Categories' },
  { value: overall.expertSkills,       label: 'Expert Level' },
];

const tabs = skillsData.map((cat) => ({
  id: cat.category,
  label: cat.category,
  icon: cat.icon,
  count: cat.skills.length,
}));

export default function Skills() {
  const [activeId, setActiveId] = useState(skillsData[0].category);
  const active = skillsData.find((c) => c.category === activeId) || skillsData[0];

  return (
    <PageShell width="wide">
      <PageHeader
        title="Skills"
        subtitle="A comprehensive overview of my technical abilities and professional competencies."
      />

      <div className={classes.statsBlock}>
        <StatGrid items={stats} />
      </div>

      <div className={classes.tabsBlock}>
        <Tabs tabs={tabs} activeId={activeId} onChange={setActiveId} label="Skill categories">
          {() => (
            <>
              <p className={classes.categoryDesc}>{active.description}</p>
              <ul className={classes.skillList}>
                {active.skills.map((skill) => (
                  <li key={skill.name}>
                    <SkillBar
                      label={skill.name}
                      level={skill.level}
                      description={skill.description}
                      levelText={skillLevelText(skill.level)}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </Tabs>
      </div>
    </PageShell>
  );
}
