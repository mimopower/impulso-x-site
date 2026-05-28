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
  primary:
    'bg-gold text-ink hover:bg-cream hover:text-ink border border-gold hover:border-cream',
  outline:
    'border border-gold/60 text-gold hover:border-gold hover:bg-gold/5',
  ghost: 'text-cream hover:text-gold',
};

const sizeClass: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm tracking-wide',
  lg: 'px-7 py-4 text-[15px] tracking-wide',
  xl: 'px-9 py-5 text-base tracking-wider',
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
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative inline-flex items-center gap-3 font-display font-semibold uppercase transition-colors duration-300 ease-out-expo ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
        →
      </span>
    </motion.a>
  );
}
