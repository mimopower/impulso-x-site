'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { AssetImage } from './ui/asset-image';
import { SectionReveal } from './section-reveal';

const examples = [
  {
    label: 'Exemplo de solução',
    title: 'Site que explica a oferta',
    body: 'Uma página clara, visualmente forte e pronta para receber tráfego de campanhas, redes sociais ou indicação.',
    image: ASSETS.mockups.macbook,
    alt: 'Aplicação visual da marca Impulso X em notebook',
    className: 'lg:col-span-7',
  },
  {
    label: 'Modelo de aplicação',
    title: 'Atendimento conectado',
    body: 'Formulários, WhatsApp e automações para reduzir demora na primeira resposta.',
    image: ASSETS.mockups.iphone,
    alt: 'Aplicação visual da marca Impulso X em celular',
    className: 'lg:col-span-5',
  },
  {
    label: 'Possibilidade de projeto',
    title: 'Marca consistente nos canais',
    body: 'Identidade, temas e formatos visuais para a empresa parecer a mesma em cada ponto de contato.',
    image: ASSETS.mockups.ipad,
    alt: 'Aplicação visual da marca Impulso X em tablet',
    className: 'lg:col-span-5',
  },
  {
    label: 'Exemplo de solução',
    title: 'Conteúdo mais organizado',
    body: 'Templates e direção visual para redes, propostas e comunicações comerciais.',
    image: ASSETS.mockups.redes,
    alt: 'Peças visuais de redes sociais com identidade Impulso X',
    className: 'lg:col-span-7',
  },
] as const;

const ease = [0.23, 1, 0.32, 1] as const;

export function Cases() {
  return (
    <section id="exemplos" className="section-shell relative overflow-hidden bg-ink" aria-labelledby="examples-heading">
      {/* Shield watermark — brand atmosphere. Same technique as services but at lower opacity. */}
      <Image
        src={ASSETS.mark.src}
        alt=""
        width={ASSETS.mark.width}
        height={ASSETS.mark.height}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[420px] -translate-x-1/2 -translate-y-1/2 select-none"
        style={{ opacity: 0.03 }}
      />

      <div className="container-x relative">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            {/* No eyebrow here — eyebrow budget exhausted */}
            <h2
              id="examples-heading"
              className="max-w-[12ch] font-display text-display font-bold text-cream text-balance"
            >
              O que pode ser construído
            </h2>
          </div>
          <p className="max-w-prose font-sans text-lg leading-relaxed text-steel text-pretty">
            Estes são exemplos de aplicação da identidade e do tipo de entrega que a Impulso X pode montar.
            Não são projetos reais publicados; são possibilidades de projeto.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {examples.map((example, i) => (
            <motion.article
              key={example.title}
              className={`metal-panel overflow-hidden ${example.className}`}
              transition={{ duration: 0.4, ease }}
            >
              <div className="relative overflow-hidden border-b border-cream/10 bg-ink" style={{ aspectRatio: '16/10' }}>
                <AssetImage
                  src={example.image.src}
                  alt={example.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out-expo hover:scale-[1.025]"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.05),rgba(13,13,13,0.38))]" />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-display text-sm font-bold text-gold">{example.label}</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-cream">{example.title}</h3>
                <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-steel text-pretty">
                  {example.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
