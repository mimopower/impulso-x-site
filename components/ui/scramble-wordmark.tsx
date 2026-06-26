'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrambleWordmark — the "decode" pegada for the Impulso X intro.
 *
 * SSR renders the FINAL wordmark ("Impulso X") so there is never random text in
 * the initial HTML (prevents hydration mismatch). After mount, when the intro is
 * playing and motion is allowed, a requestAnimationFrame loop shuffles each glyph
 * through a curated gold-tone set and settles left→right into the final word.
 *
 * Rules (per plan):
 *   - Only transform/opacity animated; scramble mutates textContent + a color class.
 *   - Final: "Impulso" in cream, "X" in gold.
 *   - prefers-reduced-motion: no scramble, final word stays as-rendered.
 *   - RAF cancelled on unmount.
 *   - No canvas, no library.
 */
const FINAL = ['I', 'm', 'p', 'u', 'l', 's', 'o', '\u00a0', 'X'] as const;
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%*<>/?';
const SETTLE_STAGGER_MS = 55;
const STEP_MS = 34;
const TOTAL_DECODE_MS = (FINAL.length - 1) * SETTLE_STAGGER_MS + 90;

export function ScrambleWordmark({ reduced }: { reduced: boolean }) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const play = document.documentElement.dataset.intro === 'play';
    if (!play || reduced) return;

    const start = performance.now();
    let lastShuffle = -STEP_MS;

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed - lastShuffle >= STEP_MS) {
        lastShuffle = elapsed;
        for (let i = 0; i < FINAL.length; i++) {
          const node = refs.current[i];
          if (!node) continue;
          const settleAt = i * SETTLE_STAGGER_MS;
          if (elapsed >= settleAt) {
            if (!node.classList.contains('is-settled')) {
              node.textContent = FINAL[i];
              node.classList.add('is-settled');
            }
          } else {
            node.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
        }
      }
      if (elapsed < TOTAL_DECODE_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        for (let i = 0; i < FINAL.length; i++) {
          const node = refs.current[i];
          if (node && !node.classList.contains('is-settled')) {
            node.textContent = FINAL[i];
            node.classList.add('is-settled');
          }
        }
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [reduced]);

  return (
    <span className="intro-reveal__wordmark-text" aria-hidden="true">
      {FINAL.map((letter, i) => (
        <span className="intro-reveal__letter-mask" key={i}>
          <span
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={
              letter === 'X'
                ? 'intro-reveal__letter intro-reveal__letter--gold intro-reveal__letter--decode'
                : 'intro-reveal__letter intro-reveal__letter--decode'
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </span>
  );
}
