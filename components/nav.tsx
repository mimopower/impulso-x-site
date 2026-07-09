'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { SITE, WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { useIntroReady } from './intro-reveal';
import { CtaButton } from './ui/cta-button';
import { LogoShine } from './ui/logo-shine';

const links = [
  { href: '/#operacao', label: 'Operação' },
  { href: '/#servicos', label: 'Frentes' },
  { href: '/#processo', label: 'Como funciona' },
  { href: '/#fundadores', label: 'Fundadores' },
  { href: '/blog', label: 'Blog' },
];

const SECTION_IDS = ['top', 'operacao', 'servicos', 'processo', 'fundadores'] as const;

function NavLink({
  href,
  label,
  isActive,
  onClick,
  variant = 'desktop',
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}) {
  const isInternal = href.startsWith('/#');
  const className =
    variant === 'mobile'
      ? `block rounded-control px-3 py-3 font-display text-xl font-semibold transition-colors duration-300 hover:bg-gold/10 ${
          isActive ? 'bg-gold/10 text-gold-soft' : 'text-cream'
        }`
      : `group relative text-sm font-medium transition-colors duration-300 hover:text-cream ${
          isActive ? 'text-cream' : 'text-steel'
        }`;

  if (isInternal) {
    return (
      <a href={href} onClick={onClick} className={className}>
        <span>{label}</span>
        {variant === 'desktop' && (
          <span
            className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ease-out-expo ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        )}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className} scroll={false}>
      <span>{label}</span>
      {variant === 'desktop' && (
        <span
          className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ease-out-expo ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      )}
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isBlog = pathname.startsWith('/blog');

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const introReady = useIntroReady();
  const prefersReducedMotion = useReducedMotion();
  const motionReady = Boolean(prefersReducedMotion) || introReady;

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const firstMountRef = useRef(true);

  // Scroll state — passive listener, no layout recalculation.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy via IntersectionObserver — only on home.
  useEffect(() => {
    if (!isHome) return;
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Body scroll lock + focus management on open/close.
  useEffect(() => {
    if (open) {
      firstMountRef.current = false;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const t = window.setTimeout(() => {
        const first = menuPanelRef.current?.querySelector<HTMLAnchorElement>('a[href]');
        first?.focus();
      }, 120);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.clearTimeout(t);
      };
    }
    if (firstMountRef.current) {
      firstMountRef.current = false;
      return;
    }
    menuButtonRef.current?.focus();
  }, [open]);

  // Esc to close + focus trap while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const panel = menuPanelRef.current;
      if (!panel) return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a[href], button'),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <motion.header
      initial={false}
      animate={{ y: motionReady ? 0 : -12, opacity: motionReady ? 1 : 0.94 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 md:px-6 md:pt-5"
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-brand border px-3 py-2 transition-colors duration-300 md:px-4 ${
          scrolled || open
            ? 'border-gold/22 bg-ink/86 shadow-[0_14px_48px_rgba(0,0,0,0.30)] backdrop-blur-lg'
            : 'border-cream/10 bg-ink/34 backdrop-blur-md'
        }`}
      >
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${SITE.name} - voltar ao início`}>
          {/* Logo box stays a fixed size on scroll — no layout shift. */}
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[10px] border border-gold/25 bg-ink p-1">
            <Image
              src={ASSETS.mark.src}
              alt=""
              width={ASSETS.mark.width}
              height={ASSETS.mark.height}
              priority
              className="h-full w-full object-contain"
            />
            <LogoShine variant="subtle" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-lg font-bold text-cream md:text-xl">Impulso X</span>
            <span className="mt-1 hidden text-[11px] font-medium text-steel sm:block">Intelligence</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((link) => {
            const id = link.href.replace('/#', '');
            const isActive = isBlog
              ? link.href === '/blog'
              : isHome && activeId === id;
            return (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isActive}
              />
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CtaButton
            href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
            variant="outline"
            size="md"
            external
            eventName="whatsapp_diagnostico"
          >
            Agendar diagnóstico
          </CtaButton>
        </div>

        {/* Mobile hamburger — 44px touch target preserved */}
        <button
          ref={menuButtonRef}
          type="button"
          className="relative grid h-11 w-11 place-items-center rounded-control border border-cream/12 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          onClick={() => setOpen((state) => !state)}
        >
          <span
            className={`absolute h-px w-5 bg-cream transition-transform duration-300 ease-out-expo ${
              open ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-cream transition-transform duration-300 ease-out-expo ${
              open ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>
      </div>

      <motion.div
        ref={menuPanelRef}
        id="mobile-nav-menu"
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        {...(!open ? { inert: true } : {})}
        className="absolute left-3 right-3 top-full mt-2 rounded-brand border border-gold/20 bg-ink/94 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:left-6 md:right-6 lg:hidden"
      >
        <nav aria-label="Menu mobile">
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const id = link.href.replace('/#', '');
              const isActive = isBlog
                ? link.href === '/blog'
                : isHome && activeId === id;
              return (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={isActive}
                    onClick={closeMenu}
                    variant="mobile"
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        <CtaButton
          href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
          variant="primary"
          size="lg"
          external
          eventName="whatsapp_diagnostico"
          className="mt-4 w-full"
        >
          Agendar diagnóstico
        </CtaButton>
      </motion.div>
    </motion.header>
  );
}
