'use client';

import { motion } from 'framer-motion';
import { FadeUpBlock } from './ui/animated-text';
import { EASE_OUT_EXPO } from '@/lib/motion';

const items = [
  { title: 'Estrutura personalizada', meta: 'Nada de plano genérico' },
  { title: 'IA aplicada na prática', meta: 'Não é demo, é operação' },
  { title: 'Design premium', meta: 'Marca que sustenta o preço' },
  { title: 'Estratégia integrada', meta: 'Tecnologia + marketing num plano só' },
  { title: 'Foco em resultado', meta: 'Métrica que importa, não vaidade' },
  { title: 'Operação escalável', meta: 'Pronta pra dobrar o tamanho' },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-section"
      aria-labelledby="differentials-heading"
    >
      <div className="container-x">
        <FadeUpBlock className="max-w-4xl">
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
            Diferenciais
          </span>
          <h2
            id="differentials-heading"
            className="mt-6 font-display font-extrabold uppercase text-cream text-display track-tight-caps text-balance"
          >
            Por que somos diferentes
            <span className="block text-gold">de uma agência tradicional.</span>
          </h2>
        </FadeUpBlock>

        <ul className="mt-16 border-t border-grafite/50">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: i * 0.05 }}
              className="group relative border-b border-grafite/50 cursor-default overflow-hidden"
            >
              {/* Hover sweep */}
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out-expo bg-gradient-to-r from-gold/[0.06] via-gold/[0.03] to-transparent"
              />

              <div className="relative flex items-center justify-between gap-6 py-7 md:py-10 px-1">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-display text-gold/60 text-sm tracking-[0.25em] tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="font-display font-bold text-cream uppercase tracking-wide text-2xl md:text-4xl group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-5">
                  <span className="hidden md:inline text-mist text-sm tracking-wide max-w-[24ch] text-right">
                    {item.meta}
                  </span>
                  <span
                    aria-hidden
                    className="inline-block text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out-expo text-xl"
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
