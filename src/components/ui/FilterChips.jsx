import classes from './FilterChips.module.scss';

// Single-select filter group rendered as ARIA tablist.
// items: string[]; value: current selection; onChange(value)
export default function FilterChips({ items, value, onChange, label = 'Filter' }) {
  return (
    <div role="tablist" aria-label={label} className={classes.list}>
      {items.map((item) => {
        const active = item === value;
        return (
          <button
            key={item}
            role="tab"
            type="button"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
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
