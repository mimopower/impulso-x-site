'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CtaButton } from './ui/cta-button';
import { SITE, WHATSAPP_URL } from '@/lib/site';

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#cases', label: 'Cases' },
  { href: '#fundadores', label: 'Fundadores' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? 'bg-ink/75 backdrop-blur-xl border-b border-gold/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Impulso X — Voltar ao topo">
          {/* Tipographic logomark — letter-based, not raster */}
          <span className="relative inline-flex items-center justify-center w-9 h-9 border border-gold/50 text-gold font-display font-bold text-lg tracking-tight group-hover:border-gold transition-colors duration-300">
            iX
            <span aria-hidden className="absolute -inset-px border border-gold/0 group-hover:border-gold/20 transition-colors duration-300" />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-cream text-sm tracking-wider uppercase">Impulso X</span>
            <span className="text-[10px] text-mist tracking-[0.25em] uppercase mt-1">Intelligence</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-mist hover:text-cream transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out-expo" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton href={WHATSAPP_URL('Olá! Quero falar com a Impulso X.')} variant="outline" size="md" external>
            Falar agora
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-grafite/40"
      >
        <div className="container-x py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-cream font-display uppercase tracking-wide text-lg"
            >
              {link.label}
            </a>
          ))}
          <CtaButton
            href={WHATSAPP_URL('Olá! Quero falar com a Impulso X.')}
            variant="primary"
            size="md"
            external
            className="self-start mt-2"
          >
            Falar agora
          </CtaButton>
        </div>
      </motion.div>

      <a href={SITE.url} className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-gold text-ink px-3 py-2 text-sm">
        Pular para conteúdo
      </a>
    </motion.header>
  );
}
