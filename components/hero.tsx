'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const markY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[92dvh] items-center overflow-hidden pb-16 pt-32 md:min-h-[90dvh] md:pt-36"
      aria-labelledby="hero-heading"
    >
      <motion.picture aria-hidden className="absolute inset-0 block" style={{ y: backgroundY }}>
        <source media="(max-width: 767px)" srcSet={ASSETS.hero.mobile} />
        <img
          src={ASSETS.hero.desktop}
          alt=""
          fetchPriority="high"
          className="h-full w-full scale-[1.04] object-cover object-[64%_center] md:object-center"
        />
      </motion.picture>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.96)_0%,rgba(13,13,13,0.82)_42%,rgba(13,13,13,0.32)_100%)] md:bg-[linear-gradient(90deg,rgba(13,13,13,0.96)_0%,rgba(13,13,13,0.78)_45%,rgba(13,13,13,0.16)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        aria-hidden
        style={{ y: markY }}
        className="pointer-events-none absolute right-[-16%] top-[18%] hidden w-[48vw] max-w-[620px] opacity-[0.16] mix-blend-screen md:block"
      >
        <Image
          src={ASSETS.mark.src}
          alt=""
          width={ASSETS.mark.width}
          height={ASSETS.mark.height}
          priority
          className="animate-shield-breathe"
        />
      </motion.div>

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="section-kicker"
        >
          Crescer com clareza
        </motion.div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-[20ch] font-display text-hero font-bold text-cream text-balance"
        >
          <motion.span
            className="block text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Sites, automações
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          >
            <span className="text-gold">e marca</span> para empresas
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          >
            em crescimento.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
          className="mt-7 max-w-[58ch] text-lead text-steel text-pretty"
        >
          A Impulso X une estratégia, design, IA e automação para organizar sua presença digital,
          reduzir tarefas manuais e deixar sua empresa pronta para vender com mais clareza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1], delay: 0.78 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="primary" size="xl" external>
            Agendar diagnóstico
          </CtaButton>
          <CtaButton href="#servicos" variant="outline" size="xl">
            Ver soluções
          </CtaButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.02 }}
          className="mt-12 grid max-w-3xl grid-cols-1 gap-3 border-t border-cream/12 pt-5 text-sm text-steel sm:grid-cols-3"
        >
          <span>Presença digital clara</span>
          <span>Rotinas menos manuais</span>
          <span>Marca mais consistente</span>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
    </section>
  );
}
