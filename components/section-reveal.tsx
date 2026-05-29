'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Emil principle: content MUST be visible by default.
 * "Animation serves function, not decoration."
 *
 * This component renders content at full opacity always (visible to crawlers,
 * screenshots, screen readers). The subtle whileInView transition is an ENHANCEMENT
 * — it gently confirms presence when the section enters the viewport.
 *
 * We do NOT start hidden and reveal on scroll (that pattern makes full-page captures
 * and accessibility tools see an empty page). The hero already has full choreography
 * for dramatic entrance. Section headers don't need to hide and appear.
 */
export function SectionReveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      // Start at 0.92 opacity (visible in screenshots), ease to 1.0 when in view
      initial={{ opacity: 0.92 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
