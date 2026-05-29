'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { WordRotator } from './ui/word-rotator';
import { LogoShine } from './ui/logo-shine';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Parallax — only compositor props (transform/opacity)
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '10%']);

  // Shield: starts centered (y = -50% of own height from top:50%) and drifts up on scroll
  const shieldY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ['-50%', '-50%'] : ['-50%', '-58%'],
  );
  const shieldOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[calc(100dvh-28px)] items-center overflow-hidden pb-16 pt-32 md:pt-36"
      aria-labelledby="hero-heading"
    >
      {/* Background with parallax */}
      <motion.picture aria-hidden className="absolute inset-0 block" style={{ y: bgY }}>
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
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.84) 38%, rgba(13,13,13,0.28) 70%, rgba(13,13,13,0.10) 100%)',
        }}
      />

      {/* Bottom fade into next section */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* Shield watermark — mobile only. Subtle brand presence where the
          desktop shield is hidden. Low opacity so it never competes with text. */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 block select-none md:hidden"
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

      {/* Gold ambient glow behind shield — desktop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-2%] top-[50%] hidden md:block"
        style={{
          width: 'clamp(360px, 42vw, 560px)',
          transform: 'translateY(-50%)',
          aspectRatio: '1',
          background:
            'radial-gradient(ellipse 58% 58% at 55% 48%, rgba(201,162,39,0.16) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Shield — desktop only. Width clamped so it never overwhelms the hero
          at laptop sizes. Centered vertically via y:-50% (from top:50%). */}
      <motion.div
        aria-hidden
        style={{ y: shieldY, opacity: shieldOpacity }}
        className="pointer-events-none absolute right-[-2%] top-[50%] hidden select-none md:block will-change-transform"
      >
        {/* Inner: handles logo-zoom + clips LogoShine sweep to shield bounds */}
        <div
          className="relative overflow-hidden"
          style={{
            width: 'clamp(360px, 42vw, 560px)',
            aspectRatio: '1 / 1',
            animation: 'logo-zoom 14s ease-in-out infinite',
          }}
        >
          <Image
            src={ASSETS.mark.src}
            alt=""
            width={ASSETS.mark.width}
            height={ASSETS.mark.height}
            priority
            className="h-auto w-full"
            style={{ opacity: 0.45 }}
          />
          <LogoShine variant="full" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-x relative z-10">
        <div className="max-w-[900px] lg:ml-[3vw] xl:ml-[7vw]">
          {/* Eyebrow — visible by default (opacity 0.92), enhances to 1.0 on mount.
              Emil: content must be visible even before motion fires. */}
          <motion.div
            className="section-kicker"
            initial={{ opacity: 0.92, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.46, ease, delay: 0.08 }}
          >
            Crescer com clareza
          </motion.div>

          {/* H1 — stable aria-label for screen readers; visual word rotates.
              Emil: stagger 60-80ms between lines; only opacity+transform animated. */}
          <h1
            id="hero-heading"
            aria-label="Sites, automações, marca e IA para empresas que crescem com clareza."
            className="mt-6 font-display text-hero font-bold text-cream text-balance"
            style={{ lineHeight: '0.98' }}
          >
            {/* Line 1: service pillar rotates. rotator is aria-hidden; H1 has stable aria-label. */}
            <motion.span
              aria-hidden
              className="block text-gold"
              initial={{ opacity: 0.92, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, ease, delay: 0.13 }}
            >
              <WordRotator
                words={['Sites', 'Automações', 'Marca', 'IA']}
                startDelay={1200}
              />
            </motion.span>

            {/* Lines 2-3: fixed — stagger 70ms apart */}
            {[
              { text: 'para empresas que', delay: 0.20 },
              { text: 'crescem com clareza.', delay: 0.27 },
            ].map(({ text, delay }) => (
              <motion.span
                aria-hidden
                key={text}
                className="block"
                initial={{ opacity: 0.92, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, ease, delay }}
              >
                {text}
              </motion.span>
            ))}
          </h1>

          {/* Subtexto — max ~20 words (taste-skill hero rule) */}
          <motion.p
            initial={{ opacity: 0.9, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease, delay: 0.36 }}
            className="mt-5 max-w-[52ch] text-lead text-steel text-pretty"
          >
            A Impulso X une estratégia, design, IA e automação para organizar sua
            presença digital, reduzir tarefas manuais e deixar sua empresa pronta
            para vender com mais clareza.
          </motion.p>

          {/* CTAs — 4th and final hero element */}
          <motion.div
            initial={{ opacity: 0.9, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease, delay: 0.44 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="primary" size="xl" external>
              Agendar diagnóstico
            </CtaButton>
            <CtaButton href="#servicos" variant="outline" size="xl">
              Ver soluções
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
