'use client';

import { motion } from 'framer-motion';
import { Glow } from './ui/glow';
import { CtaButton } from './ui/cta-button';
import { AnimatedText } from './ui/animated-text';
import { WHATSAPP_URL } from '@/lib/site';
import { EASE_OUT_EXPO } from '@/lib/motion';

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 md:pt-44 pb-section overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Glow intensity="medium" position="center" />

      {/* Diagonal stripe — decorative, top right */}
      <div
        aria-hidden
        className="absolute -top-12 -right-32 w-[420px] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent rotate-[35deg]"
      />

      <div className="container-x relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-8 h-px bg-gold" />
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
            Impulso X Intelligence
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-display font-extrabold uppercase text-cream text-hero track-tight-caps max-w-[18ch] text-balance"
        >
          <AnimatedText
            as="span"
            text="Transformamos empresas através de"
            className="block"
          />
          <AnimatedText
            as="span"
            text="inteligência, automação"
            goldWord={['inteligência,']}
            className="block"
            delay={0.15}
          />
          <AnimatedText
            as="span"
            text="e estratégia digital."
            className="block"
            delay={0.3}
          />
        </h1>

        {/* Sub + CTAs */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.9 }}
            className="md:col-span-7 text-mist text-lead max-w-prose text-pretty"
          >
            Unimos IA, automação, branding e estratégia para estruturar operações
            mais eficientes, modernas e preparadas pra crescer com consistência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 1.05 }}
            className="md:col-span-5 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <CtaButton
              href={WHATSAPP_URL('Olá! Quero solicitar um diagnóstico estratégico com a Impulso X.')}
              variant="primary"
              size="lg"
              external
            >
              Solicitar diagnóstico
            </CtaButton>
            <CtaButton
              href={WHATSAPP_URL('Olá! Quero falar com um especialista da Impulso X.')}
              variant="ghost"
              size="lg"
              external
            >
              Falar com especialista
            </CtaButton>
          </motion.div>
        </div>

        {/* Stat strip — premium signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 1.3 }}
          className="mt-20 md:mt-24 pt-10 border-t border-grafite/60 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6"
        >
          {[
            { kpi: 'IA', label: 'Aplicada na operação' },
            { kpi: '360°', label: 'Estrutura digital' },
            { kpi: '24/7', label: 'Automação ativa' },
            { kpi: 'PMEs', label: 'Foco em ticket alto' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <span className="font-display font-bold text-cream text-3xl md:text-4xl tracking-tight">
                {s.kpi}
              </span>
              <span className="text-mist text-xs md:text-sm tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mist text-[10px] tracking-[0.3em] uppercase"
      >
        <span>Scroll</span>
        <span className="block w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-float-slow" />
      </motion.div>
    </section>
  );
}
