'use client';

import { motion } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';
import type { ReactNode } from 'react';

type Props = {
  text: string;
  className?: string;
  goldWord?: string | string[];
  as?: 'h1' | 'h2' | 'p' | 'span';
  delay?: number;
};

export function AnimatedText({
  text,
  className = '',
  goldWord,
  as = 'h2',
  delay = 0,
}: Props) {
  const words = text.split(' ');
  const goldSet = new Set(
    (Array.isArray(goldWord) ? goldWord : goldWord ? [goldWord] : []).map((w) =>
      w.toLowerCase().replace(/[.,?!]/g, ''),
    ),
  );

  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((w, i) => {
        const isGold = goldSet.has(w.toLowerCase().replace(/[.,?!]/g, ''));
        return (
          <span key={i} className="inline-block overflow-hidden align-baseline">
            <motion.span
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.95, ease: EASE_OUT_EXPO },
                },
              }}
              className={`inline-block ${isGold ? 'text-gold' : ''}`}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}

export function FadeUpBlock({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}
