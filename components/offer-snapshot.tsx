'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { SectionReveal } from './section-reveal';

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
    n: 'A',
    title: 'Atendimento e vendas com IA',
    body: 'Agente no WhatsApp/Telegram que responde na hora, qualifica e agenda. Handoff limpo para a sua equipe.',
    href: '#operacao',
    cta: 'Ver atendimento',
    eventName: 'ver_frente_atendimento',
  },
  {
    n: 'B',
    title: 'Operação interna com IA',
    body: 'Copilotos e automações que eliminam tarefas repetitivas da equipe: follow-up, cadastros, relatórios e fluxos.',
    href: '#servicos',
    cta: 'Ver operação',
    eventName: 'ver_frente_operacao',
  },
  {
    n: 'C',
    title: 'Estrutura e dados',
    body: 'CRM, painel e dashboards conectados para você tomar decisão com clareza em vez de operar no escuro.',
    href: '#servicos',
    cta: 'Ver dados',
    eventName: 'ver_frente_dados',
  },
  {
    n: 'D',
    title: 'Presença que converte',
    body: 'Site, Google Meu Negócio, copy e marca que alimentam o funil e geram confiança antes da conversa.',
    href: '#servicos',
    cta: 'Ver presença',
    eventName: 'ver_frente_presenca',
  },
];

function FrenteCard({ layer, index }: { layer: Frente; index: number }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.a
      href={layer.href}
      aria-label={`${layer.title}: ${layer.body} — ${layer.cta}`}
      data-event={layer.eventName}
      className="interactive-card-glow group relative flex flex-col justify-between rounded-card border border-cream/12 bg-ink2/60 p-6 transition-colors duration-500 hover:border-cream/30 hover:bg-ink2 md:p-8"
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
          {layer.n}
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-cream md:text-3xl">
          {layer.title}
        </h3>
        <p className="mt-3 max-w-[40ch] font-sans text-base leading-[1.5] text-steel text-pretty">
          {layer.body}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
        {layer.cta}
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {frentes.map((layer, index) => (
            <FrenteCard key={layer.n} layer={layer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
