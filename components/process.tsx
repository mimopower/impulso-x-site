'use client';

import { motion } from 'framer-motion';
import { FadeUpBlock } from './ui/animated-text';
import { EASE_OUT_EXPO } from '@/lib/motion';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'Mapeamos operação, gargalos, canais e dados. Em 7 dias você sabe exatamente o que está travando o crescimento.',
  },
  {
    n: '02',
    title: 'Estratégia',
    body: 'Definimos as frentes que destravam mais em menos tempo — sem plano genérico, sem buzzword.',
  },
  {
    n: '03',
    title: 'Implementação',
    body: 'Executamos junto com seu time: site, automações, IA, branding — tudo conectado.',
  },
  {
    n: '04',
    title: 'Evolução',
    body: 'Operação medida, ajustada e escalada. Crescimento vira processo, não sorte.',
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative bg-ink2 py-section overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-grafite to-transparent" />

      <div className="container-x">
        <FadeUpBlock>
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
            Como funciona
          </span>
          <h2
            id="process-heading"
            className="mt-6 font-display font-extrabold uppercase text-cream text-display track-tight-caps text-balance max-w-4xl"
          >
            Quatro passos, um caminho.
          </h2>
        </FadeUpBlock>

        <div className="mt-20 relative">
          {/* Connector line — desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.2 }}
            className="hidden md:block absolute top-[2.25rem] left-0 right-0 h-px origin-left bg-gradient-to-r from-gold/20 via-gold to-gold/20"
          />

          <ol className="grid md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.3 + i * 0.12 }}
                className="relative"
              >
                {/* Node */}
                <div className="relative z-10 flex items-center gap-4 md:block">
                  <span
                    aria-hidden
                    className="md:absolute md:left-0 md:top-0 inline-flex items-center justify-center w-[3rem] h-[3rem] md:w-[3rem] md:h-[3rem] rounded-full bg-ink2 border border-gold text-gold font-display font-bold text-sm tracking-wider"
                  >
                    {s.n}
                  </span>
                  <h3 className="md:mt-10 font-display font-bold text-cream uppercase tracking-wide text-xl md:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 md:mt-5 text-mist text-sm md:text-base leading-relaxed text-pretty">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
