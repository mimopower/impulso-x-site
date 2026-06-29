'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import { EASE_OUT_EXPO } from '@/lib/motion';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'md' | 'lg' | 'xl';

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary: 'border-gold bg-gold text-ink hover:border-gold-soft hover:bg-gold-soft',
  outline: 'border-gold/60 bg-ink/35 text-cream hover:border-gold hover:bg-gold/10',
  ghost: 'border-transparent bg-transparent text-cream hover:text-gold',
};

const sizeClass: Record<Size, string> = {
  md: 'px-3 py-2.5 text-sm min-[360px]:px-5',
  lg: 'px-4 py-3 text-[15px] min-[360px]:px-6',
  xl: 'px-4 py-3.5 text-base min-[360px]:px-7',
};

export function CtaButton({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  external = false,
  ariaLabel,
  className = '',
}: Props) {
  const prefersReduced = useReducedMotion();
  const [flashId, setFlashId] = useState<number | null>(null);

  const startFlash = () => {
    if (!prefersReduced) {
      setFlashId((current) => (current ?? 0) + 1);
    }
  };

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onTapStart={startFlash}
      whileHover={prefersReduced ? undefined : { y: -2 }}
      whileTap={prefersReduced ? undefined : { y: 0, scale: 0.97 }}
      transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
      className={`cta-btn group relative inline-flex max-w-full items-center justify-center gap-3 rounded-pill border font-display font-semibold leading-tight transition-colors duration-300 ease-out-expo ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      <span className="cta-surface" aria-hidden>
        <span className="cta-glow" />
        <span className="cta-sheen" />
        {flashId !== null ? (
          <motion.span
            key={flashId}
            className="cta-flash"
            initial={{ opacity: 0.5, scale: 0.88 }}
            animate={{ opacity: 0, scale: 1.12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onAnimationComplete={() => setFlashId(null)}
          />
        ) : null}
      </span>
      <span className="relative z-[1] min-w-0 text-center [overflow-wrap:anywhere]">{children}</span>
      <span
        aria-hidden
        className={`relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-transform duration-300 ease-out-expo ${prefersReduced ? '' : 'group-hover:translate-x-0.5'} ${
          variant === 'primary'
            ? 'border-ink/18 bg-ink/10 text-ink'
            : 'border-gold/35 bg-gold/10 text-gold'
        }`}
      >
        →
      </span>
    </motion.a>
  );
}
