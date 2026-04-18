import classes from './PageHeader.module.scss';

export default function PageHeader({ title, subtitle, level = 1 }) {
  const Heading = `h${level}`;
  return (
    <header className={classes.header}>
      <Heading className={classes.title}>{title}</Heading>
      {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
    </header>
  );
}
