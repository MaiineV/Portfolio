import { useId } from 'react';
import classes from './Tabs.module.scss';
import Icon from './Icon';

// Accessible tab pattern (single panel rendered at a time).
// tabs: [{ id, label, icon?, count? }]
// activeId, onChange(id)
// children: render-prop receiving (activeId)
export default function Tabs({ tabs, activeId, onChange, label = 'Tabs', children }) {
  const baseId = useId();

  function handleKey(e, idx) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End') return;
    e.preventDefault();
    let next = idx;
    if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
    if (e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length - 1;
    onChange(tabs[next].id);
    const btn = document.getElementById(`${baseId}-tab-${tabs[next].id}`);
    btn?.focus();
  }

  return (
    <div className={classes.root}>
      <div role="tablist" aria-label={label} className={classes.tablist}>
        {tabs.map((tab, idx) => {
          const active = activeId === tab.id;
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={active ? 0 : -1}
              className={`${classes.tab} ${active ? classes.tabActive : ''}`}
              onClick={() => onChange(tab.id)}
              onKeyDown={(e) => handleKey(e, idx)}
            >
              {tab.icon && <Icon name={tab.icon} size={16} />}
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span className={classes.count}>{tab.count}</span>
              )}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeId}`}
        aria-labelledby={`${baseId}-tab-${activeId}`}
        className={classes.panel}
        tabIndex={0}
      >
        {typeof children === 'function' ? children(activeId) : children}
      </div>
    </div>
  );
}
