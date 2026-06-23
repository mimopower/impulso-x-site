'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface WordRotatorProps {
  words: string[];
  /** Starts cycling only after the page experience is ready. */
  enabled?: boolean;
  /** Total cycle duration in ms (hold + transition). Default 2600. */
  interval?: number;
  /** Delay before first cycle starts in ms. Default 1200. */
  startDelay?: number;
  className?: string;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Word rotator — cycles through words with a vertical fade/slide.
 * Technique: inline-grid with all words overlapped in the same cell so the
 * container always sizes to the widest word (no layout shift).
 * Respects prefers-reduced-motion. Pauses when tab is hidden.
 *
 * A11y: the whole rotator is aria-hidden. The parent H1 carries a stable
 * aria-label covering all words so screen readers get the full context.
 */
export function WordRotator({
  words,
  enabled = true,
  interval = 2600,
  startDelay = 1200,
  className = '',
}: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!enabled || prefersReduced || words.length < 2) return;

    let timerId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const advance = () => setIndex((i) => (i + 1) % words.length);

    const startCycling = () => {
      if (intervalId === null) intervalId = setInterval(advance, interval);
    };

    const stopCycling = () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) stopCycling();
      else startCycling();
    };

    timerId = setTimeout(startCycling, startDelay);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearTimeout(timerId);
      stopCycling();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [enabled, words, interval, startDelay, prefersReduced]);

  return (
    <span
      aria-hidden
      style={{
        display: 'inline-grid',
        gridTemplate: '1fr / 1fr',
        verticalAlign: 'baseline',
      }}
    >
      {/* Invisible spacers — all words in same grid cell so container sizes to
          the widest word and never shifts layout when the active word changes. */}
      {words.map((word) => (
        <span
          key={`spacer-${word}`}
          aria-hidden
          style={{
            gridArea: '1 / 1',
            visibility: 'hidden',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          className={className}
        >
          {word}
        </span>
      ))}

      {/* Animated active word — overlaps the spacers in the same grid cell */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          style={{ gridArea: '1 / 1' }}
          className={className}
          initial={prefersReduced ? false : { opacity: 0, y: '0.35em' }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? undefined : { opacity: 0, y: '-0.35em' }}
          transition={{ duration: prefersReduced ? 0 : 0.42, ease: EASE }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
