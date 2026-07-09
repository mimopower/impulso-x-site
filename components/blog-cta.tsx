import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';

export function BlogCta() {
  return (
    <aside
      className="my-10 rounded-card border border-gold/30 bg-gradient-to-b from-gold/[0.06] to-transparent p-6 md:p-8"
      aria-label="Chamada para diagnóstico gratuito"
    >
      <p className="section-kicker">Diagnóstico gratuito</p>
      <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-cream md:text-3xl text-balance">
        Quer saber qual é o gargalo da sua operação?
      </h2>
      <p className="mt-3 max-w-[52ch] font-sans text-base leading-[1.6] text-steel text-pretty">
        O diagnóstico é gratuito — e o mapa fica com você, mesmo que a gente não feche.
      </p>
      <div className="mt-6">
        <CtaButton
          href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
          variant="primary"
          size="lg"
          external
          eventName="whatsapp_diagnostico_blog"
        >
          Quero meu diagnóstico
        </CtaButton>
      </div>
    </aside>
  );
}
