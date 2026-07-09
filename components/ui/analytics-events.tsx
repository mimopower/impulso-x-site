'use client';

import { useEffect } from 'react';

export function AnalyticsEvents() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>('[data-event]');
      if (!el) return;
      const name = el.dataset.event;
      if (!name) return;
      try {
        if (typeof window.umami?.track === 'function') {
          window.umami.track(name);
        }
      } catch {
        // silencioso em caso de bloqueador
      }
    };
    document.body.addEventListener('click', handler);
    return () => document.body.removeEventListener('click', handler);
  }, []);
  return null;
}
