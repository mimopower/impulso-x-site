'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { useIntroReady } from './intro-reveal';
import { CtaButton } from './ui/cta-button';
import { HeroShieldVideo } from './ui/hero-shield-video';
import { WordRotator } from './ui/word-rotator';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const introReady = useIntroReady();
  const prefersReducedMotion = useReducedMotion();
  const motionReady = Boolean(prefersReducedMotion) || introReady;

  // Parallax — only compositor props (transform/opacity)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[calc(100dvh-28px)] items-center overflow-hidden pb-16 pt-32 md:pt-36"
      aria-labelledby="hero-heading"
    >
      {/* Background with parallax */}
      <motion.picture
        aria-hidden
        className="absolute inset-0 z-0 block"
        style={{ y: prefersReducedMotion ? 0 : bgY }}
      >
        <source media="(max-width: 767px)" srcSet={ASSETS.hero.mobile} />
        <img
          src={ASSETS.hero.desktop}
          alt=""
          fetchPriority="high"
          className="hero-background-image h-full w-full scale-[1.04] object-cover"
        />
      </motion.picture>

      <HeroShieldVideo enabled={motionReady} />

      <motion.div
        aria-hidden
        className="hero-float-icon pointer-events-none absolute z-[7] grid place-items-center"
        initial={false}
        animate={
          motionReady && !prefersReducedMotion
            ? { opacity: 1, y: [0, -7, 0], rotate: [0, 4, 0, -4, 0] }
            : { opacity: 0.9, y: 0, rotate: 0 }
        }
        transition={
          motionReady && !prefersReducedMotion
            ? { duration: 6.5, ease: 'easeInOut', repeat: Infinity }
            : { duration: 0.2, ease }
        }
      >
        <Sparkles size={22} strokeWidth={1.65} />
      </motion.div>

      {/* Contrast layer keeps copy readable while preserving the animated mark. */}
      <div aria-hidden className="hero-contrast-overlay absolute inset-0 z-[5]" />

      {/* Bottom fade into next section */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[6] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* Content */}
      <div className="container-x relative z-10">
        <div className="max-w-[900px] lg:ml-[3vw] xl:ml-[7vw]">
          {/* Eyebrow */}
          <motion.div
            className="section-kicker"
            initial={false}
            animate={{ opacity: motionReady ? 1 : 0.92, x: motionReady ? 0 : -6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease }}
          >
            IA por dentro, resultado por fora
          </motion.div>

          {/* H1 — stable aria-label for screen readers. */}
          <h1
            id="hero-heading"
            aria-label="O time de IA da sua empresa para atender, organizar, operar e vender."
            className="mt-6 font-display text-hero font-bold text-cream text-balance"
            style={{ lineHeight: '0.98' }}
          >
            <motion.span
              aria-hidden
              className="block"
              initial={false}
              animate={{ opacity: motionReady ? 1 : 0.92, y: motionReady ? 0 : 6 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.02 : 0 }}
            >
              O time de IA
            </motion.span>

            <motion.span
              aria-hidden
              className="block"
              initial={false}
              animate={{ opacity: motionReady ? 1 : 0.92, y: motionReady ? 0 : 6 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.04 : 0 }}
            >
              da sua empresa
            </motion.span>

            <motion.span
              aria-hidden
              className="block text-gold-gradient"
              initial={false}
              animate={{ opacity: motionReady ? 1 : 0.92, y: motionReady ? 0 : 6 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.06 : 0 }}
            >
              {'para\u00A0'}
              <WordRotator
                words={['atender', 'organizar', 'operar', 'vender']}
                enabled={motionReady}
                className="text-gold-gradient"
              />
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={false}
            animate={{ opacity: motionReady ? 1 : 0.9, y: motionReady ? 0 : 5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.06 : 0 }}
            className="mt-5 max-w-[52ch] text-lead text-steel text-pretty"
          >
            Diagnóstico primeiro, solução depois: o time entra pelo que o seu negócio mais precisa otimizar, estruturar ou organizar com IA. E o mapa é seu, mesmo que a gente não feche.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={false}
            animate={{ opacity: motionReady ? 1 : 0.9, y: motionReady ? 0 : 5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.08 : 0 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton
              href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
              variant="prism"
              size="xl"
              external
              eventName="whatsapp_diagnostico"
            >
              Quero meu diagnóstico
            </CtaButton>
            <CtaButton href="#processo" variant="outline" size="xl" eventName="nav_ancora_processo">
              Ver como funciona
            </CtaButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-7 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-cream/10 sm:block"
      >
        <span className="block h-5 w-px animate-[scroll-cue_1.8s_cubic-bezier(0.16,1,0.3,1)_infinite] bg-gold" />
      </div>

      {/* Gold hairline at section bottom */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)' }}
      />
    </section>
  );
}
