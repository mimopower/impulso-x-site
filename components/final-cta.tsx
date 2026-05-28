'use client';

import { motion } from 'framer-motion';
import { CtaButton } from './ui/cta-button';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { WHATSAPP_URL } from '@/lib/site';

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative bg-ink overflow-hidden"
      aria-labelledby="cta-heading"
      style={{ paddingBlock: 'clamp(7rem, 14vw, 14rem)' }}
    >
      {/* Deep ambient glow — climax of the page */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 50% 50%, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0.04) 45%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 50% 80%, rgba(212,175,55,0.09) 0%, transparent 60%)
          `,
        }}
      />

      {/* Horizontal scan lines — cinematic framing */}
      {[
        { top: '18%', delay: 0.3, opacity: 0.5 },
        { top: '82%', delay: 0.5, opacity: 0.3 },
      ].map((line, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: line.opacity }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: EASE_OUT_EXPO, delay: line.delay }}
          className="absolute inset-x-0 h-px origin-center"
          style={{
            top: line.top,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 25%, rgba(212,175,55,0.5) 50%, rgba(212,175,55,0.35) 75%, transparent 100%)',
          }}
        />
      ))}

      {/* Corner accent marks */}
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: EASE_OUT_EXPO }}
          className="absolute w-12 h-12 pointer-events-none"
          style={pos as React.CSSProperties}
        >
          <div
            className="absolute"
            style={{
              top: pos.top === 0 ? 24 : 'auto',
              bottom: pos.bottom === 0 ? 24 : 'auto',
              left: pos.left === 0 ? 24 : 'auto',
              right: pos.right === 0 ? 24 : 'auto',
              width: 20,
              height: 20,
              borderTop: pos.top === 0 ? '1px solid rgba(212,175,55,0.35)' : undefined,
              borderBottom: pos.bottom === 0 ? '1px solid rgba(212,175,55,0.35)' : undefined,
              borderLeft: pos.left === 0 ? '1px solid rgba(212,175,55,0.35)' : undefined,
              borderRight: pos.right === 0 ? '1px solid rgba(212,175,55,0.35)' : undefined,
            }}
          />
        </motion.div>
      ))}

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="block h-px w-12 bg-gold/50" />
          <span className="text-[11px] text-gold tracking-[0.35em] uppercase font-display font-medium">
            Próximo passo
          </span>
          <span className="block h-px w-12 bg-gold/50" />
        </motion.div>

        {/* Headline — viewport-scale typography */}
        <h2
          id="cta-heading"
          className="font-display font-extrabold uppercase text-cream track-tight-caps text-balance"
          style={{ fontSize: 'clamp(2.6rem, 7.5vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.03em' }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.95, ease: EASE_OUT_EXPO, delay: 0.1 }}
          >
            Sua empresa está
          </motion.span>
          <motion.span
            className="block text-gold"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.95, ease: EASE_OUT_EXPO, delay: 0.22 }}
          >
            pronta para evoluir?
          </motion.span>
        </h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.4 }}
          className="mt-8 md:mt-10 text-mist text-lead max-w-[52ch] text-pretty"
        >
          Diagnóstico estratégico gratuito. Em 7 dias você sabe exatamente
          o que está travando o crescimento — e o caminho pra destravar.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.58 }}
          className="mt-12 md:mt-14"
        >
          <CtaButton
            href={WHATSAPP_URL(
              'Olá! Quero agendar um diagnóstico estratégico gratuito com a Impulso X.'
            )}
            variant="primary"
            size="xl"
            external
          >
            Agendar diagnóstico
          </CtaButton>
        </motion.div>

        {/* Signal strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.8 }}
          className="mt-14 flex items-center gap-6 text-mist text-xs tracking-[0.2em] uppercase"
        >
          <span>Sem compromisso</span>
          <span className="h-px w-6 bg-grafite" />
          <span>Resposta em até 24h</span>
          <span className="h-px w-6 bg-grafite" />
          <span>100% remoto</span>
        </motion.div>
      </div>
    </section>
  );
}
