'use client';

import { motion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { AssetImage } from './ui/asset-image';
import { SectionReveal } from './section-reveal';

const pains = [
  'O lead chega, mas a resposta demora.',
  'Tarefas simples continuam manuais.',
  'O site não explica bem o valor da empresa.',
  'A marca aparece diferente em cada canal.',
];

const ease = [0.23, 1, 0.32, 1] as const;

export function Problem() {
  return (
    <section id="problema" className="section-shell bg-ink" aria-labelledby="problem-heading">
      <div className="container-x">
        {/* Header + office photo — split layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <SectionReveal>
            {/* No eyebrow — headline speaks for itself. Eyebrow budget used elsewhere. */}
            <h2
              id="problem-heading"
              className="max-w-[13ch] font-display text-display font-bold text-cream text-balance"
            >
              Quando a empresa cresce, o improviso custa caro.
            </h2>
            <p className="mt-5 max-w-prose text-lead text-steel text-pretty">
              A maioria das empresas não trava por falta de esforço. Trava porque site,
              atendimento, marca e processos foram montados aos poucos, sem uma estrutura comum.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="relative">
            <div className="image-frame relative aspect-[5/4] overflow-hidden">
              <AssetImage
                src={ASSETS.office.src}
                alt="Ambiente de trabalho visual da Impulso X em tom escuro e dourado"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.05),rgba(13,13,13,0.72))]" />
              <p className="absolute bottom-5 left-5 max-w-[22ch] font-display text-2xl font-semibold text-cream">
                Estrutura antes de escala.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* 4 pain points — open 2x2, large outline numbers. No metal-panel cards (banned). */}
        <div className="mt-12 grid grid-cols-2 border border-cream/10 md:grid-cols-4">
          {pains.map((pain, i) => (
            <motion.div
              key={pain}
              className="group flex flex-col gap-4 border-r border-cream/10 p-6 last:border-r-0 md:p-8"
              whileHover={{ backgroundColor: 'rgba(201,162,39,0.03)' }}
              transition={{ duration: 0.3, ease }}
            >
              {/* Outline number — Emil: nothing appears from nothing, scale(0.98) start */}
              <span
                className="font-display text-[3.5rem] font-bold leading-none text-transparent select-none"
                style={{ WebkitTextStroke: '1px rgba(201,162,39,0.35)' }}
                aria-hidden
              >
                0{i + 1}
              </span>
              <p className="font-sans text-base font-medium leading-snug text-steel group-hover:text-cream transition-colors duration-300 text-pretty">
                {pain}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
