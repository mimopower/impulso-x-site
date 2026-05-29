'use client';

import { motion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

const ease = [0.23, 1, 0.32, 1] as const;

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-ink py-[clamp(6rem,12vw,13rem)]"
      aria-labelledby="cta-heading"
    >
      {/* Background image for cinematic atmosphere */}
      <picture aria-hidden className="absolute inset-0 block opacity-30">
        <source media="(max-width: 767px)" srcSet={ASSETS.heroAlt.mobile} />
        <img src={ASSETS.heroAlt.desktop} alt="" className="h-full w-full object-cover object-center" loading="lazy" />
      </picture>

      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(13,13,13,0.96), rgba(13,13,13,0.62), rgba(13,13,13,0.96))' }}
      />

      {/* Gold bloom — pulsing radial glow (Emil: animation serves storytelling, not decoration) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            width: 'min(600px, 80vw)',
            height: 'min(600px, 80vw)',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.16) 0%, rgba(201,162,39,0.04) 45%, transparent 70%)',
            animation: 'gold-pulse 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Gold circuit lines — brand signature */}
      <GoldCircuitLines variant="cta" />

      {/* Gold hairline at top */}
      <div className="gold-hairline absolute inset-x-0 top-0" aria-hidden />

      {/* Corner marks — cinematic framing */}
      {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
        <div
          key={corner}
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: corner.startsWith('t') ? 28 : 'auto',
            bottom: corner.startsWith('b') ? 28 : 'auto',
            left: corner.endsWith('l') ? 28 : 'auto',
            right: corner.endsWith('r') ? 28 : 'auto',
            width: 18,
            height: 18,
            borderTop: corner.startsWith('t') ? '1px solid rgba(201,162,39,0.3)' : undefined,
            borderBottom: corner.startsWith('b') ? '1px solid rgba(201,162,39,0.3)' : undefined,
            borderLeft: corner.endsWith('l') ? '1px solid rgba(201,162,39,0.3)' : undefined,
            borderRight: corner.endsWith('r') ? '1px solid rgba(201,162,39,0.3)' : undefined,
          }}
        />
      ))}

      <div className="container-x relative z-10 text-center">
        {/* Eyebrow #3 — the final allowed eyebrow on this page */}
        <div className="section-kicker justify-center before:hidden">
          Próximo passo
        </div>

        <h2
          id="cta-heading"
          className="mx-auto mt-6 max-w-[13ch] font-display text-display font-bold text-cream text-balance"
        >
          Vamos organizar o próximo passo da sua empresa?
        </h2>

        <p className="mx-auto mt-5 max-w-[46ch] font-sans text-lead text-steel text-pretty">
          Conversa direta, sem compromisso. Você traz o momento da empresa e nós ajudamos a enxergar o caminho.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="primary" size="xl" external>
            Agendar diagnóstico
          </CtaButton>
          <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.solutions)} variant="outline" size="xl" external>
            Conhecer soluções
          </CtaButton>
        </div>

        <p className="mt-4 font-sans text-sm text-steel/60">
          Sem compromisso
        </p>
      </div>
    </section>
  );
}
