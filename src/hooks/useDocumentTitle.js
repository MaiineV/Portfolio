import { useEffect } from 'react';

// Sets the document title per route, e.g. "Projects · Ignacio Martinez".
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} · Ignacio Martinez`;
  }, [title]);
}
