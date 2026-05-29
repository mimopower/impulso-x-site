'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_OUT_EXPO } from '@/lib/motion';

type Props = {
  text: string;
  className?: string;
  accent?: string | string[];
  as?: 'h1' | 'h2' | 'p' | 'span';
  delay?: number;
};

export function AnimatedText({ text, className = '', accent, as = 'span', delay = 0 }: Props) {
  const reducedMotion = useReducedMotion();
  const words = text.split(' ');
  const accentSet = new Set(
    (Array.isArray(accent) ? accent : accent ? [accent] : []).map((word) =>
      word.toLowerCase().replace(/[.,?!]/g, ''),
    ),
  );
  const MotionTag = motion[as] as typeof motion.span;

  if (reducedMotion) {
    return (
      <MotionTag className={className}>
        {words.map((word, index) => {
          const clean = word.toLowerCase().replace(/[.,?!]/g, '');
          return (
            <span key={`${word}-${index}`} className={accentSet.has(clean) ? 'text-gold' : undefined}>
              {word}
              {index < words.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </MotionTag>
    );
  }

  return (
    <MotionTag className={className} initial="hidden" animate="visible" transition={{ staggerChildren: 0.045, delayChildren: delay }}>
      {words.map((word, index) => {
        const clean = word.toLowerCase().replace(/[.,?!]/g, '');
        return (
          <span key={`${word}-${index}`}>
            <span className="inline-block overflow-hidden align-baseline">
              <motion.span
                variants={{
                  hidden: { y: '112%', opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.82, ease: EASE_OUT_EXPO },
                  },
                }}
                className={`inline-block ${accentSet.has(clean) ? 'text-gold' : ''}`}
              >
                {word}
              </motion.span>
            </span>
            {index < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </MotionTag>
  );
}

export function FadeUpBlock({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
