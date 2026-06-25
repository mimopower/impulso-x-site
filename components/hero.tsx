'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { useIntroReady } from './intro-reveal';
import { CtaButton } from './ui/cta-button';
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
          className="h-full w-full scale-[1.04] object-cover object-[64%_center] md:object-[60%_center]"
        />
      </motion.picture>

      {/* Overlay: heavy on left for text legibility, lighter right for shield */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(105deg, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.84) 38%, rgba(13,13,13,0.28) 70%, rgba(13,13,13,0.10) 100%)',
        }}
      />

      {/* Bottom fade into next section */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* Shield watermark — mobile only. Subtle brand presence where the
          desktop shield is hidden. Low opacity so it never competes with text. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-[4] block select-none md:hidden"
        style={{ width: '62vw', opacity: 0.07 }}
      >
        <Image
          src={ASSETS.mark.src}
          alt=""
          width={ASSETS.mark.width}
          height={ASSETS.mark.height}
          className="w-full h-auto"
        />
      </div>

      {/* Controlled gold aurora — replaces the previous static glow. */}
      <div aria-hidden className="hero-aurora pointer-events-none absolute right-[-6%] top-1/2 z-[1] hidden md:block" />

      {/* Content */}
      <div className="container-x relative z-10">
        <div className="max-w-[900px] lg:ml-[3vw] xl:ml-[7vw]">
          {/* Eyebrow — visible by default (opacity 0.92), enhances to 1.0 on mount.
              Emil: content must be visible even before motion fires. */}
          <motion.div
            className="section-kicker"
            initial={false}
            animate={{ opacity: motionReady ? 1 : 0.92, x: motionReady ? 0 : -6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease }}
          >
            Atendimento inteligente para PMEs
          </motion.div>

          {/* H1 — stable aria-label for screen readers; visual word rotates.
              Emil: stagger 60-80ms between lines; only opacity+transform animated. */}
          <h1
            id="hero-heading"
            aria-label="Inteligência que atende, qualifica e agenda no seu WhatsApp."
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
              Inteligência que
            </motion.span>

            <motion.span
              aria-hidden
              className="block"
              initial={false}
              animate={{ opacity: motionReady ? 1 : 0.92, y: motionReady ? 0 : 6 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.04 : 0 }}
            >
              <WordRotator
                words={['atende', 'qualifica', 'agenda', 'faz voltar']}
                enabled={motionReady}
                startDelay={900}
                className="text-gold-gradient"
              />
            </motion.span>

            <motion.span
              aria-hidden
              className="block"
              initial={false}
              animate={{ opacity: motionReady ? 1 : 0.92, y: motionReady ? 0 : 6 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.09 : 0 }}
            >
              no seu WhatsApp.
            </motion.span>
          </h1>

          {/* Subtexto — max ~20 words (taste-skill hero rule) */}
          <motion.p
            initial={false}
            animate={{ opacity: motionReady ? 1 : 0.9, y: motionReady ? 0 : 5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.06 : 0 }}
            className="mt-5 max-w-[52ch] text-lead text-steel text-pretty"
          >
            Instalamos um agente no seu WhatsApp para tirar dúvidas, qualificar pedidos,
            agendar conversas e acionar sua equipe quando precisar.
          </motion.p>

          {/* CTAs — 4th and final hero element */}
          <motion.div
            initial={false}
            animate={{ opacity: motionReady ? 1 : 0.9, y: motionReady ? 0 : 5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease, delay: motionReady ? 0.08 : 0 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="primary" size="xl" external>
              Quero meu diagnóstico
            </CtaButton>
            <CtaButton href="#agente" variant="outline" size="xl">
              Ver como funciona
            </CtaButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — subtle vertical pulse line */}
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
