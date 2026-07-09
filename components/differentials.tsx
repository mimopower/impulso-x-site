'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from './section-reveal';

const changes = [
  'Menos tarefa repetitiva para a equipe.',
  'Resposta rápida nos canais do cliente.',
  'Decisões com dados em vez de memória.',
  'Presença que gera confiança antes da conversa.',
];

const ease = [0.23, 1, 0.32, 1] as const;

export function Differentials() {
  return (
    <section id="diferenciais" className="section-shell-tight bg-ink" aria-labelledby="differentials-heading">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionReveal>
            {/* No eyebrow — budget used at Hero, Process, and CTA only */}
            <h2
              id="differentials-heading"
              className="max-w-[11ch] font-display text-display font-bold text-cream text-balance"
            >
              O que muda na prática
            </h2>
          </SectionReveal>

          {/* Numbered large-type list — different family from services editorial list */}
          <div className="border-y border-cream/12">
            {changes.map((change, i) => (
              <motion.div
                key={change}
                className="group flex items-center gap-5 border-b border-cream/12 py-7 last:border-b-0"
                transition={{ duration: 0.3, ease }}
              >
                <span className="w-10 flex-shrink-0 font-display text-sm font-bold text-gold tabular">
                  0{i + 1}
                </span>
                <p className="font-display text-3xl font-semibold text-cream transition-colors duration-300 group-hover:text-gold md:text-[2.6rem] md:leading-none">
                  {change}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
