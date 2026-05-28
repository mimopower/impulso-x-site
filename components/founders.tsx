'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeUpBlock } from './ui/animated-text';
import { EASE_OUT_EXPO } from '@/lib/motion';

const founders = [
  {
    initials: 'LO',
    name: 'Luiz Otávio',
    role: 'Estratégia & Tecnologia',
    bio: 'Arquiteto de operações digitais. Conecta inteligência artificial, automação e estrutura de crescimento numa só camada operacional.',
    skills: ['Arquitetura de sistemas', 'IA aplicada', 'Growth ops'],
    side: 'left' as const,
  },
  {
    initials: 'K',
    name: 'Karina',
    role: 'Design & Posicionamento',
    bio: 'Constrói marcas que sustentam o preço. Design com intenção estratégica — identidade visual, voz e presença digital coesas.',
    skills: ['Branding premium', 'UI/UX estratégico', 'Conteúdo de autoridade'],
    side: 'right' as const,
  },
];

function FounderCard({ f, i }: { f: (typeof founders)[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const glowX = useTransform(mouseX, [0, 1], ['-20%', '120%']);
  const glowY = useTransform(mouseY, [0, 1], ['-20%', '120%']);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  const isLeft = f.side === 'left';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay: i * 0.12 }}
      className="group relative flex flex-col border-t border-grafite/50 pt-10 pb-14 md:py-14 overflow-hidden"
    >
      {/* Mouse-tracked glow */}
      <motion.div
        aria-hidden
        style={{
          left: glowX,
          top: glowY,
          background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
        className="pointer-events-none absolute w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* Typographic portrait */}
      <div className="relative overflow-hidden leading-none mb-8 md:mb-10">
        <motion.span
          aria-hidden
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.0, ease: EASE_OUT_EXPO, delay: 0.2 + i * 0.1 }}
          className="block font-display font-extrabold text-transparent select-none"
          style={{
            fontSize: 'clamp(7rem, 22vw, 20rem)',
            lineHeight: 0.82,
            WebkitTextStroke: '1px rgba(212,175,55,0.25)',
            letterSpacing: '-0.04em',
          }}
        >
          {f.initials}
        </motion.span>

        {/* Gold fill on hover — clip overlay */}
        <motion.span
          aria-hidden
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileHover={{ clipPath: 'inset(0 0% 0 0)' }}
          className="absolute inset-0 block font-display font-extrabold pointer-events-none"
          style={{
            fontSize: 'clamp(7rem, 22vw, 20rem)',
            lineHeight: 0.82,
            letterSpacing: '-0.04em',
            WebkitTextStroke: '1px rgba(212,175,55,0.6)',
            color: 'transparent',
            transition: 'clip-path 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {f.initials}
        </motion.span>
      </div>

      {/* Meta */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-cream uppercase tracking-wide text-2xl md:text-3xl group-hover:text-gold transition-colors duration-500 ease-out-expo">
            {f.name}
          </h3>
          <p className="mt-1 text-gold/80 text-sm tracking-[0.2em] uppercase font-display font-medium">
            {f.role}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {f.skills.map((s) => (
            <span
              key={s}
              className="text-[10px] tracking-[0.18em] uppercase text-mist border border-grafite/70 px-2.5 py-1 group-hover:border-gold-dim/60 group-hover:text-cream transition-all duration-500"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 text-mist text-sm md:text-base leading-relaxed max-w-[52ch] text-pretty">
        {f.bio}
      </p>

      {/* Photo slot — ready for when images arrive */}
      <div
        aria-hidden
        className="hidden"
        data-photo-slot={`founder-${f.initials.toLowerCase()}`}
      />
    </motion.div>
  );
}

export function Founders() {
  return (
    <section
      id="fundadores"
      className="relative py-section overflow-hidden"
      aria-labelledby="founders-heading"
    >
      {/* Ambient horizontal scan line */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
        className="absolute top-1/2 inset-x-0 h-px origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 40%, rgba(212,175,55,0.08) 60%, transparent 100%)',
        }}
      />

      <div className="container-x relative">
        <FadeUpBlock className="max-w-2xl mb-16 md:mb-20">
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase font-display font-medium">
            Quem faz
          </span>
          <h2
            id="founders-heading"
            className="mt-6 font-display font-extrabold uppercase text-cream text-display track-tight-caps text-balance"
          >
            As pessoas por trás
            <span className="block text-gold">da operação.</span>
          </h2>
        </FadeUpBlock>

        <div className="grid md:grid-cols-2 gap-0 md:gap-16">
          {founders.map((f, i) => (
            <FounderCard key={f.initials} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
