'use client';

import { motion } from 'framer-motion';
import { FadeUpBlock } from './ui/animated-text';
import { EASE_OUT_EXPO } from '@/lib/motion';

const services = [
  {
    n: '01',
    title: 'Sites Inteligentes',
    body: 'Sites estratégicos pensados pra posicionamento e conversão — não brochura digital.',
    tags: ['Posicionamento', 'Conversão', 'Performance'],
    span: 'feature',
  },
  {
    n: '02',
    title: 'Automação & IA',
    body: 'Automação de processos e IA aplicada na operação que já existe.',
    tags: ['Workflows', 'Agentes IA', 'Integrações'],
  },
  {
    n: '03',
    title: 'Branding & Presença',
    body: 'Identidade, voz e presença digital coesas que constroem autoridade.',
    tags: ['Identidade', 'Conteúdo', 'Autoridade'],
  },
  {
    n: '04',
    title: 'Estrutura de Crescimento',
    body: 'Tecnologia + marketing + inteligência operacional integrados num só plano.',
    tags: ['Estratégia', 'Stack', 'Dados'],
  },
] as const;

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-section"
      aria-labelledby="services-heading"
    >
      <div className="container-x">
        <FadeUpBlock className="max-w-4xl">
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
            O que fazemos
          </span>
          <h2
            id="services-heading"
            className="mt-6 font-display font-extrabold uppercase text-cream text-display track-tight-caps text-balance"
          >
            Quatro frentes integradas
            <span className="block text-mist font-normal normal-case tracking-normal text-[0.6em] mt-3">
              cada uma resolve uma camada — juntas, transformam a operação.
            </span>
          </h2>
        </FadeUpBlock>

        {/* Bento grid: first card spans 2 cols on desktop */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const featured = 'span' in s && s.span === 'feature';
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: i * 0.08 }}
                className={`group relative border border-grafite/60 bg-ink hover:border-gold/60 hover:-translate-y-1 transition-all duration-500 ease-out-expo p-7 md:p-9 overflow-hidden ${
                  featured ? 'md:col-span-2 md:row-span-2 md:p-12' : ''
                }`}
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)',
                  }}
                />

                <div className="relative flex flex-col h-full">
                  <span
                    className={`font-display font-extrabold text-transparent tracking-tighter ${
                      featured ? 'text-7xl md:text-8xl' : 'text-5xl md:text-6xl'
                    }`}
                    style={{ WebkitTextStroke: '1px var(--gold-dim)' }}
                  >
                    {s.n}
                  </span>

                  <h3
                    className={`mt-6 font-display font-bold text-cream uppercase tracking-wide ${
                      featured ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`mt-4 text-mist text-pretty ${
                      featured ? 'text-lg md:text-xl max-w-prose' : 'text-base'
                    }`}
                  >
                    {s.body}
                  </p>

                  <div className="mt-auto pt-8 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.2em] uppercase text-mist border border-grafite/60 px-2.5 py-1 group-hover:border-gold-dim/70 group-hover:text-cream transition-colors duration-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
