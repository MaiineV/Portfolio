import classes from './PageShell.module.scss';

// Common page wrapper: <main> landmark, peach backdrop, container width.
export default function PageShell({ children, width = 'base' }) {
  const widthClass =
    width === 'narrow' ? classes.narrow : width === 'wide' ? classes.wide : classes.base;
  return (
    <main id="main" tabIndex={-1} className={classes.shell}>
      <div className={`${classes.container} ${widthClass}`}>{children}</div>
    </main>
  );
}
