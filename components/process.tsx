'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico grátis',
    body: 'Mapa de um gargalo ponta-a-ponta, contexto do negócio e plano de 7 dias. O mapa é seu, mesmo sem fechar.',
  },
  {
    n: '02',
    title: 'Call de diagnóstico',
    body: 'Conversa curta para confirmar a dor, o impacto e a prioridade — sem pitch de pacote.',
  },
  {
    n: '03',
    title: 'Orçamento escopado',
    body: 'Depois da call, você recebe uma proposta para UMA primeira entrega: a que resolve o gargalo priorizado.',
  },
  {
    n: '04',
    title: 'Construir & validar',
    body: 'Escopo produtizado, teste assistido e aprovação humana. Nada entra em produção sem validar.',
  },
  {
    n: '05',
    title: 'Operar & expandir',
    body: 'Relatório mensal de valor, ajuste fino e expansão por ciclo — só depois de medir.',
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export function Process() {
  return (
    <section id="processo" className="section-shell-tight relative bg-ink2" aria-labelledby="process-heading">
      <GoldCircuitLines variant="process" />
      <div className="container-x">
        <SectionReveal className="max-w-3xl">
          <span className="section-kicker">Como funciona</span>
          <h2
            id="process-heading"
            className="mt-6 font-display text-display font-bold text-cream text-balance"
          >
            Do diagnóstico à operação rodando
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-0 md:grid-cols-5">
          {steps.map((step) => (
            <motion.div
              key={step.n}
              className="relative border-l border-cream/12 first:border-l-0 md:border-l-0 md:border-t md:border-t-cream/12"
              transition={{ duration: 0.35, ease }}
            >
              <div
                aria-hidden
                className="absolute left-0 top-0 hidden h-[7px] w-[7px] -translate-x-[3.5px] -translate-y-[3.5px] rounded-full bg-gold md:block"
              />
              <div
                aria-hidden
                className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 to-transparent md:hidden"
              />

              <div className="pl-6 pr-4 pb-10 pt-8 md:pl-0 md:pr-5 md:pb-0 md:pt-8">
                <span
                  className="font-display text-sm font-bold text-gold tabular"
                  aria-label={`Passo ${step.n}`}
                >
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-cream md:text-2xl lg:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-[1.5] text-steel text-pretty">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 border-t border-cream/12 pt-6">
          <p className="font-sans text-sm uppercase tracking-[0.12em] text-steel/80">
            Metodologia: <span className="text-gold">Diagnosticar</span> → <span className="text-gold">Construir & Validar</span> → <span className="text-gold">Operar & Otimizar</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
