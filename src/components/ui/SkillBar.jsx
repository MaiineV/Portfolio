import classes from './SkillBar.module.scss';

// Accessible progress bar.
// label, level (0-100), description?, levelText (Expert / Advanced / ...)
export default function SkillBar({ label, level, description, levelText }) {
  return (
    <div className={classes.row}>
      <div className={classes.head}>
        <span className={classes.name}>{label}</span>
        <span className={classes.badge}>{levelText}</span>
      </div>
      {description && <p className={classes.desc}>{description}</p>}
      <div
        className={classes.track}
        role="progressbar"
        aria-label={`${label} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
      >
        <div className={classes.fill} style={{ '--width': `${level}%` }} />
      </div>
      <span className={classes.percent}>{level}%</span>
    </div>
  );
}
