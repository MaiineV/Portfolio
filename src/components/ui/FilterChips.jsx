import classes from './FilterChips.module.scss';

// Single-select filter group rendered as a button group (aria-pressed).
// Every chip is a real, tabbable button so the filter is fully keyboard-operable.
// items: string[]; value: current selection; onChange(value)
export default function FilterChips({ items, value, onChange, label = 'Filter' }) {
  return (
    <div role="group" aria-label={label} className={classes.list}>
      {items.map((item) => {
        const active = item === value;
        return (
          <button
            key={item}
            type="button"
            aria-pressed={active}
            className={`${classes.chip} ${active ? classes.chipActive : ''}`}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
