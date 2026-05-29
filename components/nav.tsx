'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { SITE, WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { LogoShine } from './ui/logo-shine';

const links = [
  { href: '#servicos', label: 'Soluções' },
  { href: '#fundadores', label: 'Fundadores' },
  { href: '#exemplos', label: 'Exemplos' },
  { href: '#processo', label: 'Processo' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 md:px-6 md:pt-5"
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-brand border transition-all duration-500 md:px-4 ${
          scrolled || open
            ? 'border-gold/22 bg-ink/86 px-3 py-1.5 shadow-[0_14px_48px_rgba(0,0,0,0.30)] backdrop-blur-lg'
            : 'border-cream/10 bg-ink/34 px-3 py-2.5 backdrop-blur-md'
        }`}
      >
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label={`${SITE.name} - voltar ao topo`}>
          {/* Logo box shrinks slightly when scrolled to reduce header presence */}
          <span
            className={`relative grid shrink-0 place-items-center overflow-hidden rounded-[7px] border border-gold/25 bg-ink p-1 transition-all duration-500 ${
              scrolled ? 'h-9 w-9' : 'h-11 w-11'
            }`}
          >
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
            <span className={`font-display font-bold text-cream transition-all duration-500 ${scrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
              Impulso X
            </span>
            <span className="mt-1 hidden text-[11px] font-medium text-steel sm:block">Intelligence</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-steel transition-colors duration-300 hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="outline" size="md" external>
            Agendar diagnóstico
          </CtaButton>
        </div>

        {/* Mobile hamburger — min 44px touch target preserved */}
        <button
          type="button"
          className="relative grid h-11 w-11 place-items-center rounded-control border border-cream/12 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
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
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-3 right-3 top-full mt-2 rounded-brand border border-gold/20 bg-ink/94 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:left-6 md:right-6 lg:hidden"
      >
        <nav aria-label="Menu mobile">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control px-3 py-3 font-display text-xl font-semibold text-cream transition-colors duration-300 hover:bg-gold/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <CtaButton
          href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
          variant="primary"
          size="lg"
          external
          className="mt-4 w-full"
        >
          Agendar diagnóstico
        </CtaButton>
      </motion.div>
    </motion.header>
  );
}
