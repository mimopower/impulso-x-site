'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ASSETS } from '@/lib/assets';
import { AssetImage } from './ui/asset-image';
import { SectionReveal } from './section-reveal';

const founders = [
  {
    name: 'Luiz Otávio',
    role: 'Tecnologia, IA e operação',
    image: ASSETS.founders.luiz,
    alt: 'Retrato de Luiz Otávio, cofundador da Impulso X',
    // Retrato de estúdio já graduado — só um toque leve para casar com a paleta escura
    photoClass: 'object-[50%_30%] saturate-[0.92] contrast-[1.04]',
    side: 'left' as const,
    manifesto: [
      'Sou Luiz Otávio, engenheiro por formação e apaixonado por tecnologia, estratégia e soluções inteligentes. Sempre busquei unir inovação e criatividade para transformar ideias em experiências reais e negócios mais eficientes.',
      'Na Impulso X, meu foco é conectar inteligência artificial, operação e atendimento para ajudar empresas a organizar conversas, qualificar oportunidades e crescer com mais clareza.',
      'Acredito que tecnologia deve ir além do moderno: ela precisa gerar resultado, simplificar processos e criar impacto real.',
    ],
  },
  {
    name: 'Karina',
    role: 'Criatividade, marca e comunicação',
    image: ASSETS.founders.karina,
    alt: 'Retrato de Karina, cofundadora da Impulso X',
    // Desaturate Karina's bright background to fit the dark palette (Emil: CSS filters, not heavy edits)
    photoClass: 'object-[50%_24%] saturate-[0.72] contrast-[1.08]',
    side: 'right' as const,
    manifesto: [
      'Sou Karina, cofundadora da Impulso X e apaixonada por criatividade, comunicação e experiências que conectam marcas e pessoas de forma verdadeira.',
      'Atuo diretamente na parte criativa, no marketing e na construção da identidade da marca, buscando unir estratégia, inovação e autenticidade em cada projeto desenvolvido.',
      'Acredito que uma empresa vai muito além de vender serviços. Ela precisa transmitir confiança, proximidade e gerar experiências marcantes para seus clientes.',
      'Na Impulso X, meu propósito é transformar ideias em conexões reais, criando soluções visuais e estratégicas que fortaleçam empresas e impulsionem seu crescimento no ambiente digital.',
    ],
  },
];

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isRight = founder.side === 'right';

  // Parallax only on large screens — avoids jarring on touch devices
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsLargeScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const enableParallax = isLargeScreen && !prefersReduced;

  // Subtle parallax on photo — Emil: only transform/opacity, hardware-accelerated
  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? ['-3%', '3%'] : ['0%', '0%'],
  );

  return (
    <article
      ref={ref}
      className={`grid gap-0 border-t border-cream/12 lg:grid-cols-12 ${isRight ? 'lg:[&_.founder-photo]:order-last' : ''}`}
    >
      {/* Photo — taller aspect ratio for cinematic presence */}
      <div className="founder-photo lg:col-span-5">
        <div className="image-frame relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <motion.div
            className="absolute inset-0"
            style={{ y: photoY, willChange: enableParallax ? 'transform' : 'auto' }}
          >
            <AssetImage
              src={founder.image.src}
              alt={founder.alt}
              fill
              className={`object-cover scale-[1.08] ${founder.photoClass}`}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </motion.div>
          {/* Bottom gradient for name overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0)_42%,rgba(13,13,13,0.82)_100%)]" />
          {/* Name overlay on photo */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-display text-3xl font-bold text-cream">{founder.name}</p>
            <p className="mt-1 text-sm font-medium text-gold tracking-wide">{founder.role}</p>
          </div>
        </div>
      </div>

      {/* Manifesto text */}
      <div className="flex flex-col justify-center px-0 py-8 lg:col-span-7 lg:px-12 lg:py-12">
        {/* Name repeated as display heading — separate from photo for readers without images */}
        <h3 className="font-display text-title font-bold text-cream">{founder.name}</h3>
        <div className="mt-5 space-y-3.5 font-sans text-base leading-[1.5] text-steel md:text-lg">
          {founder.manifesto.map((paragraph) => (
            <p key={paragraph} className="max-w-prose text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Founders() {
  return (
    <section id="fundadores" className="section-shell overflow-hidden bg-ink2" aria-labelledby="founders-heading">
      <div className="container-x">
        <SectionReveal className="max-w-4xl">
          {/* No eyebrow — the photos communicate who this section is about */}
          <h2 id="founders-heading" className="font-display text-display font-bold text-cream text-balance">
            Tecnologia e criatividade, lado a lado.
          </h2>
          <p className="mt-5 max-w-prose font-sans text-lg leading-[1.5] text-steel text-pretty">
            A Impulso X é o time de IA das PMEs: raciocínio técnico, visão de marca e cuidado na execução, do diagnóstico à operação.
          </p>
        </SectionReveal>

        <div className="mt-12 flex flex-col gap-0">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
