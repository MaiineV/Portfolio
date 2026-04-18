import classes from './StatGrid.module.scss';

// items: [{ value: '3+', label: 'Years Experience' }, ...]
export default function StatGrid({ items }) {
  return (
    <dl className={classes.grid}>
      {items.map((item) => (
        <div key={item.label} className={classes.item}>
          <dt className={classes.value}>{item.value}</dt>
          <dd className={classes.label}>{item.label}</dd>
        </div>
      ))}
    </dl>
  );
}
