import { useEffect, useRef, useState } from 'react';

// One-shot intersection observer. Returns [ref, hasAppeared].
// Replaces the duplicate useEffect bug that was in the old Skills page.
export function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, shown]);

  return [ref, shown];
}
