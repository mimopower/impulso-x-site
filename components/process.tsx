'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'Mapeamos sua operação, seus canais de entrada e onde o cliente esfria.',
  },
  {
    n: '02',
    title: 'Desenho da operação',
    body: 'Definimos a frente prioritária: atendimento, presença, marca, conteúdo, dados ou recompra.',
  },
  {
    n: '03',
    title: 'Implantação',
    body: 'Colocamos a inteligência no ar com fluxos claros, handoff humano e pontos de conversão.',
  },
  {
    n: '04',
    title: 'Evolução',
    body: 'Acompanhamos dados, follow-ups e oportunidades para manter o cliente voltando.',
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export function Process() {
  return (
    <section id="processo" className="section-shell-tight relative bg-ink2" aria-labelledby="process-heading">
      <GoldCircuitLines variant="process" />
      <div className="container-x">
        <SectionReveal className="max-w-3xl">
          {/* Eyebrow #2 of 3 allowed on page */}
          <span className="section-kicker">Método</span>
          <h2
            id="process-heading"
            className="mt-6 font-display text-display font-bold text-cream text-balance"
          >
            Do diagnóstico à operação rodando
          </h2>
        </SectionReveal>

        {/* Steps — open layout, NO metal-panel cards (taste-skill ban: identical card grid).
            Remotion philosophy: each step enters with a deliberate delay sequence (60ms stagger).
            Desktop: horizontal 4-col. Mobile: stacked. */}
        <div className="mt-12 grid gap-0 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative border-l border-cream/12 first:border-l-0 md:border-l-0 md:border-t md:border-t-cream/12"
              transition={{ duration: 0.35, ease }}
            >
              {/* Gold node at top of each step (desktop) — on the border line */}
              <div
                aria-hidden
                className="absolute left-0 top-0 hidden h-[7px] w-[7px] -translate-x-[3.5px] -translate-y-[3.5px] rounded-full bg-gold md:block"
              />
              {/* Vertical step connector (mobile, left border) */}
              <div
                aria-hidden
                className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 to-transparent md:hidden"
              />

              <div className="pl-6 pr-4 pb-10 pt-8 md:pl-0 md:pr-6 md:pb-0 md:pt-8">
                <span
                  className="font-display text-sm font-bold text-gold tabular"
                  aria-label={`Passo ${step.n}`}
                >
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-cream md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-[1.5] text-steel text-pretty">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
