'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { SectionReveal } from './section-reveal';
import { ASSETS } from '@/lib/assets';
import Image from 'next/image';

type Frente = {
  n: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  eventName: string;
};

const frentes: Frente[] = [
  {
    n: '01',
    title: 'Atendimento e vendas com IA',
    body: 'Resposta em segundos no WhatsApp, triagem e agenda — com a sua equipe assumindo na hora certa.',
    href: '#servicos',
    cta: 'Ver a frente de atendimento',
    eventName: 'ver_frente_atendimento',
  },
  {
    n: '02',
    title: 'Operação interna com IA',
    body: 'Orçamento, proposta e resumo de conversa saem em minutos — o processo para de morar na cabeça do dono.',
    href: '#servicos',
    cta: 'Ver a frente de operação',
    eventName: 'ver_frente_operacao',
  },
  {
    n: '03',
    title: 'Estrutura e dados',
    body: 'Leads, agenda e funil num painel só, no lugar de planilha solta e print de WhatsApp.',
    href: '#servicos',
    cta: 'Ver a frente de dados',
    eventName: 'ver_frente_dados',
  },
  {
    n: '04',
    title: 'Presença que converte',
    body: 'O cliente te encontra no Google e chega na conversa já com contexto e confiança.',
    href: '#servicos',
    cta: 'Ver a frente de presença',
    eventName: 'ver_frente_presenca',
  },
];

function FrenteCard({
  frente,
  index,
  className = '',
}: {
  frente: Frente;
  index: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.a
      href={frente.href}
      aria-label={`${frente.title}: ${frente.body} — ${frente.cta}`}
      data-event={frente.eventName}
      className={`interactive-card-glow group relative flex flex-col justify-between rounded-card border border-cream/12 bg-ink2/60 p-6 transition-colors duration-500 hover:border-gold/70 hover:bg-ink2 md:p-8 ${className}`}
      whileTap={prefersReduced ? undefined : { scale: 0.99 }}
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: index * 0.08 }}
    >
      <div>
        <span
          aria-hidden
          className="font-display text-xs font-bold tracking-[0.14em] text-gold tabular"
        >
          {frente.n}
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-cream md:text-3xl">
          {frente.title}
        </h3>
        <p className="mt-3 max-w-[40ch] font-sans text-base leading-[1.5] text-steel text-pretty">
          {frente.body}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
        {frente.cta}
        <span aria-hidden>→</span>
      </span>
    </motion.a>
  );
}

export function OfferSnapshot() {
  return (
    <section
      id="snapshot"
      className="section-shell-tight relative overflow-hidden bg-ink"
      aria-labelledby="offer-snapshot-heading"
    >
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />

      <div className="container-x relative">
        <SectionReveal className="max-w-3xl">
          <p className="section-kicker">O que fazemos</p>
          <h2
            id="offer-snapshot-heading"
            className="mt-6 max-w-[22ch] font-display text-display font-bold text-cream text-balance"
          >
            Quatro frentes. Uma equipe só sua.
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-[1.55] text-steel text-pretty">
            A gente entra pelo que mais dói hoje. E expande para o resto amanhã.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <FrenteCard frente={frentes[0]} index={0} className="sm:row-span-2" />
          <FrenteCard frente={frentes[1]} index={1} />
          <div className="relative hidden overflow-hidden rounded-card border border-cream/12 bg-ink2/40 sm:block">
            <Image
              src={ASSETS.mark.src}
              alt=""
              width={ASSETS.mark.width}
              height={ASSETS.mark.height}
              className="pointer-events-none absolute inset-0 m-auto w-3/4 select-none opacity-[0.06]"
            />
          </div>
          <FrenteCard frente={frentes[2]} index={2} />
          <FrenteCard frente={frentes[3]} index={3} />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-cream/12 pt-8 md:flex-row md:items-center">
          <p className="max-w-[46ch] font-sans text-base leading-[1.55] text-steel text-pretty">
            O diagnóstico gratuito define por qual frente o time entra.
          </p>
          <span className="section-kicker m-0">Diagnóstico gratuito</span>
        </div>
      </div>
    </section>
  );
}
