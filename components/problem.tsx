'use client';

import { motion } from 'framer-motion';
import { FadeUpBlock } from './ui/animated-text';
import { EASE_OUT_EXPO } from '@/lib/motion';

const pains = [
  { title: 'Atendimento lento', detail: 'Lead chega quente, esfria antes de virar venda.' },
  { title: 'Leads perdidos', detail: 'Sem rastreio do que entrou, do que evoluiu, do que sumiu.' },
  { title: 'Processos manuais', detail: 'Time fazendo o que sistema devia fazer.' },
  { title: 'Falta de organização', detail: 'Decisão por achismo porque o dado não está consolidado.' },
  { title: 'Marketing sem estrutura', detail: 'Anúncio rodando, conteúdo postado, mas sem funil.' },
  { title: 'Operação desatualizada', detail: 'Ferramentas, fluxos e cargos defasados pro tamanho atual.' },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="relative bg-ink2 py-section overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* Top gradient mask */}
      <div aria-hidden className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-ink to-transparent" />

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-y-12 gap-x-12">
          <div className="md:col-span-5">
            <FadeUpBlock>
              <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
                Diagnóstico
              </span>
              <h2
                id="problem-heading"
                className="mt-6 font-display font-extrabold uppercase text-cream text-display track-tight-caps text-balance"
              >
                Sua empresa está crescendo…
                <span className="block text-gold">mas a operação acompanha?</span>
              </h2>
              <p className="mt-8 text-mist text-lead max-w-prose text-pretty">
                Quase toda PME que cresce rápido bate no mesmo teto:
                operação manual demais, marketing solto, decisão sem dado.
                Antes de vender mais, é preciso estruturar o que sustenta a venda.
              </p>
            </FadeUpBlock>
          </div>

          <div className="md:col-span-7 md:pl-8 md:border-l md:border-grafite/40">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {pains.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: i * 0.06 }}
                  className="group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-2 block w-2 h-2 border border-gold bg-transparent group-hover:bg-gold transition-colors duration-300"
                    />
                    <div className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                      <h3 className="font-display font-semibold text-cream tracking-wide uppercase text-base">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-mist text-sm leading-relaxed">
                        {p.detail}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
