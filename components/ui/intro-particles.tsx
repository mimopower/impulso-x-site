'use client';

import { useEffect, useRef } from 'react';

/**
 * IntroParticles — budgeted golden "raining letters" for the intro.
 *
 * Desktop: max 24 glyphs. Mobile: max 10. Reduced-motion: none.
 * Only transform/opacity are animated (via RAF). No canvas, no filter.
 * Pauses on hidden tab (visibilitychange). Particles are created in useEffect
 * (client-only) so SSR emits an empty container — no hydration mismatch.
 * The parent unmounts this subtree once the intro completes.
 */
const GLYPHS = '01Xx#%*<>/?+';
type Particle = {
  el: HTMLSpanElement;
  startY: number;
  endY: number;
  durationMs: number;
  delayMs: number;
  baseOpacity: number;
};

export function IntroParticles({ reduced }: { reduced: boolean }) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    const play = document.documentElement.dataset.intro === 'play';
    if (!play) return;

    const host = hostRef.current;
    if (!host) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const count = isMobile ? 10 : 24;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'intro-particle';
      el.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      el.style.left = `${Math.random() * 100}vw`;
      el.style.fontSize = `${10 + Math.random() * 14}px`;
      el.style.opacity = '0';
      host.appendChild(el);
      particles.push({
        el,
        startY: -8,
        endY: 108,
        durationMs: 1800 + Math.random() * 900,
        delayMs: Math.random() * 600,
        baseOpacity: 0.12 + Math.random() * 0.26,
      });
    }

    let paused = false;
    const onVis = () => {
      paused = document.hidden;
    };
    document.addEventListener('visibilitychange', onVis);

    const start = performance.now();
    const tick = (now: number) => {
      if (paused) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - start;
      let active = false;
      for (const p of particles) {
        const t = (elapsed - p.delayMs) / p.durationMs;
        if (t < 0) {
          active = true;
          continue;
        }
        if (t > 1) {
          p.el.style.opacity = '0';
          continue;
        }
        active = true;
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const y = p.startY + (p.endY - p.startY) * eased;
        p.el.style.transform = `translate3d(0, ${y}vh, 0)`;
        let op = p.baseOpacity;
        if (t < 0.2) op *= t / 0.2;
        else if (t > 0.7) op *= (1 - t) / 0.3;
        p.el.style.opacity = String(op);
      }
      if (active && elapsed < 3300) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('visibilitychange', onVis);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      host.innerHTML = '';
    };
  }, [reduced]);

  return <span ref={hostRef} className="intro-particles" aria-hidden="true" />;
}
