'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico gratuito',
    body: '30 minutos para mapear o gargalo prioritário: atendimento, operação, dados ou presença. Saímos com uma prioridade clara.',
  },
  {
    n: '02',
    title: 'Arquitetura e plano',
    body: 'Desenhamos a primeira entrega, o que depende dela e como as frentes se conectam depois. Sem projeto inchado.',
  },
  {
    n: '03',
    title: 'Primeira frente no ar',
    body: 'Construímos e testamos a primeira frente com a sua equipe. Resultado validado antes de seguir para a próxima.',
  },
  {
    n: '04',
    title: 'Validação e ajuste',
    body: 'Medimos o impacto real, ajustamos os gatilhos e garantimos que a operação confie no que está rodando.',
  },
  {
    n: '05',
    title: 'Expansão e governança',
    body: 'Ligamos as demais frentes, documentamos regras e mantemos o time de IA operando com segurança e clareza.',
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export function Process() {
  return (
    <section id="processo" className="section-shell-tight relative bg-ink2" aria-labelledby="process-heading">
      <GoldCircuitLines variant="process" />
      <div className="container-x">
        <SectionReveal className="max-w-3xl">
          <span className="section-kicker">Método</span>
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
      </div>
    </section>
  );
}
