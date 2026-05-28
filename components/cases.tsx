'use client';

import { motion } from 'framer-motion';
import { FadeUpBlock } from './ui/animated-text';
import { EASE_OUT_EXPO } from '@/lib/motion';

export function Cases() {
  return (
    <section
      id="cases"
      className="relative bg-ink2 py-section overflow-hidden"
      aria-labelledby="cases-heading"
    >
      <div className="container-x">
        <FadeUpBlock>
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
            Cases
          </span>
          <h2
            id="cases-heading"
            className="mt-6 font-display font-extrabold uppercase text-cream text-display track-tight-caps text-balance max-w-4xl"
          >
            Operações que rodam.
          </h2>
        </FadeUpBlock>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          {/* Featured case */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
            className="lg:col-span-7 relative border border-grafite/60 bg-ink hover:border-gold/50 transition-colors duration-500 overflow-hidden"
          >
            {/* Abstract visual — geometric mock */}
            <div className="relative aspect-[16/10] bg-ink overflow-hidden">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,175,55,0.18) 0%, transparent 60%)' }} />
              {/* SVG grid pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-40" aria-hidden>
                <defs>
                  <pattern id="grid-mp" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#3A3A3A" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-mp)" />
              </svg>
              {/* Mock UI cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-[78%]">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] border border-grafite/80 bg-ink/70 backdrop-blur-sm flex flex-col p-3 gap-1.5"
                    >
                      <div className="h-1 w-6 bg-gold/70" />
                      <div className="h-1 w-12 bg-grafite" />
                      <div className="mt-auto h-2 w-8 bg-cream/30" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating tag */}
              <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/60 px-2.5 py-1 bg-ink/60 backdrop-blur">
                Em operação
              </span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-extrabold text-gold text-sm tracking-[0.25em] uppercase">
                  Mimo Power
                </span>
                <span className="h-px w-8 bg-grafite" />
                <span className="text-mist text-xs tracking-wider uppercase">Case principal</span>
              </div>
              <h3 className="font-display font-bold text-cream text-2xl md:text-3xl uppercase tracking-wide">
                Ecossistema digital completo
              </h3>
              <p className="mt-4 text-mist text-pretty max-w-prose">
                Loja, site institucional, 3 bots Telegram (Cléo, Loui, Ladeira),
                hub administrativo 360° e calendário editorial conectado.
                Tudo integrado num único stack operacional.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Site', 'Bots IA', 'Hub 360°', 'Branding', 'Automação'].map((t) => (
                  <span key={t} className="text-[10px] tracking-[0.2em] uppercase text-cream border border-grafite/60 px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Two stacked concept cases */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              {
                tag: 'Conceito',
                title: 'Automação Comercial',
                body: 'Funil + CRM + IA respondendo lead em segundos, 24/7.',
                tags: ['IA', 'Funil', 'Integração'],
              },
              {
                tag: 'Conceito',
                title: 'Dashboard Operacional',
                body: 'Métricas-chave consolidadas num só painel — decisão por dado, não achismo.',
                tags: ['Dados', 'BI', 'Tempo real'],
              },
            ].map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 + i * 0.1 }}
                className="group relative border border-grafite/60 bg-ink hover:border-gold/50 transition-colors duration-500 p-7 md:p-9 flex-1"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/50 px-2 py-0.5">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-cream text-xl md:text-2xl uppercase tracking-wide">
                  {c.title}
                </h3>
                <p className="mt-3 text-mist text-sm md:text-base text-pretty">
                  {c.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-[0.2em] uppercase text-mist border border-grafite/60 px-2 py-0.5 group-hover:border-gold-dim transition-colors duration-500">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
