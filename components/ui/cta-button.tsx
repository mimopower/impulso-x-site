'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

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
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3.5 text-[15px]',
  xl: 'px-6 py-4 text-base',
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
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className={`cta-btn group relative inline-flex max-w-full items-center justify-center gap-3 rounded-control border font-display font-semibold leading-none transition-colors duration-300 ease-out-expo ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      {/* Glow layer — opacity-only, no box-shadow animation. Hover guarded in CSS. */}
      <span className="cta-glow" aria-hidden />
      <span className="relative z-[1] truncate">{children}</span>
      <span
        aria-hidden
        className={`relative z-[1] grid h-7 w-7 shrink-0 place-items-center rounded-[4px] border transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 ${
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
