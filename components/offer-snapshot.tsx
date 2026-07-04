'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { SectionReveal } from './section-reveal';

type Layer = {
  n: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};

// Camada 1 = âncora/herói — renderizada com peso visual dominante (bloco destacado,
// borda dourada, maior área/copy). Camadas 2 e 3 são subordinadas, lidas como
// "profundidade que cresce ao redor do agente" — nunca como 3 cards de igual peso.
const layers: Layer[] = [
  {
    n: '01',
    title: 'Agente de IA',
    body: 'Atende, qualifica e agenda no WhatsApp ou Telegram. Passa para a equipe na hora certa.',
    href: '#operacao',
    cta: 'Ver o agente em operação',
  },
  {
    n: '02',
    title: 'Presença que converte',
    body: 'Site, GMN e marca que alimenta o agente e gera confiança antes da conversa.',
    href: '#servicos',
    cta: 'Ver presença que converte',
  },
  {
    n: '03',
    title: 'Operação inteligente',
    body: 'Painel, CRM e automações que crescem conforme a sua operação precisa.',
    href: '#servicos',
    cta: 'Ver operação inteligente',
  },
];

function LayerBlock({ layer, dominant }: { layer: Layer; dominant?: boolean }) {
  const prefersReduced = useReducedMotion();
  const common =
    'interactive-card-glow group relative flex flex-col justify-between border transition-colors duration-500';

  if (dominant) {
    return (
      <motion.a
        href={layer.href}
        aria-label={`${layer.title}: ${layer.body} — ${layer.cta}`}
        className={`${common} h-full overflow-hidden rounded-card-lg border-gold/40 bg-gradient-to-b from-gold/[0.06] to-transparent p-8 md:p-10 hover:border-gold/70`}
        whileTap={prefersReduced ? undefined : { scale: 0.99 }}
        initial={false}
        animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      >
        {/* Marca d'água preenche o respiro vertical do card âncora sem competir com o texto */}
        <Image
          src={ASSETS.mark.src}
          alt=""
          aria-hidden
          width={ASSETS.mark.width}
          height={ASSETS.mark.height}
          className="pointer-events-none absolute -bottom-14 -right-12 w-[240px] select-none md:w-[300px]"
          style={{ opacity: 0.05 }}
        />

        <div className="relative z-[1]">
          <span
            aria-hidden
            className="font-display text-sm font-bold tracking-[0.14em] text-gold"
          >
            CAMADA {layer.n} · ÂNCORA
          </span>
          <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-cream md:text-4xl">
            {layer.title}
          </h3>
          <p className="mt-4 max-w-[42ch] font-sans text-lg leading-[1.5] text-steel text-pretty">
            {layer.body}
          </p>
        </div>

        <div className="relative z-[1] mt-8 flex flex-col items-start gap-5">
          <span className="agent-status">
            <span aria-hidden className="agent-status__dot" />
            Ativo no WhatsApp e Telegram
          </span>
          <span className={`inline-flex items-center gap-2 font-display text-sm font-semibold text-gold transition-transform duration-300 ease-out-expo ${prefersReduced ? '' : 'group-hover:translate-x-1'}`}>
            {layer.cta}
            <span aria-hidden className="text-gold">→</span>
          </span>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={layer.href}
      aria-label={`${layer.title}: ${layer.body} — ${layer.cta}`}
      className={`${common} rounded-card border-cream/12 bg-ink2/60 p-6 hover:border-cream/30 hover:bg-ink2`}
      whileTap={prefersReduced ? undefined : { scale: 0.99 }}
      initial={false}
      animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
    >
      <div className="flex items-baseline gap-3">
        <span aria-hidden className="font-display text-xs font-bold text-gold tabular">
          {layer.n}
        </span>
        <h3 className="font-display text-xl font-bold leading-tight text-cream md:text-2xl">
          {layer.title}
        </h3>
      </div>
      <p className="mt-3 font-sans text-base leading-[1.5] text-steel text-pretty">
        {layer.body}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium text-steel transition-colors duration-300 group-hover:text-cream">
        {layer.cta}
        <span aria-hidden className="text-gold/80">→</span>
      </span>
    </motion.a>
  );
}

export function OfferSnapshot() {
  const prefersReduced = useReducedMotion();
  const [camada1, camada2, camada3] = layers;

  return (
    <section
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
            Atendimento inteligente no centro. Tudo mais ao redor.
          </h2>
        </SectionReveal>

        {/* Hierarquia: Camada 1 dominante (coluna maior, bloco âncora dourado);
            Camadas 2 e 3 subordinadas, empilhadas como profundidade que cresce. */}
        <div
          className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr]"
          // stagger container — animações só transform/opacity (fallback visível)
        >
          {/* Camada 1 — âncora */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0 }}
            className="lg:row-span-2"
          >
            <LayerBlock layer={camada1} dominant />
          </motion.div>

          {/* Camada 2 — subordinada */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.08 }}
          >
            <LayerBlock layer={camada2} />
          </motion.div>

          {/* Camada 3 — subordinada */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.16 }}
          >
            <LayerBlock layer={camada3} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
