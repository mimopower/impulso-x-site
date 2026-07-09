import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';

export function BlogCta() {
  return (
    <aside
      className="my-10 rounded-card border border-gold/30 bg-gradient-to-b from-gold/[0.06] to-transparent p-6 md:p-8"
      aria-label="Chamada para diagnóstico gratuito"
    >
      <h3 className="font-display text-2xl font-bold leading-tight text-cream md:text-3xl">
        Quer saber onde a IA cabe na sua empresa?
      </h3>
      <p className="mt-3 max-w-prose font-sans text-base leading-[1.55] text-steel text-pretty">
        Nosso diagnóstico gratuito mapeia o gargalo prioritário do seu negócio em 30 minutos.
      </p>
      <div className="mt-5">
        <CtaButton
          href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
          variant="primary"
          size="lg"
          external
          eventName="whatsapp_diagnostico_blog"
        >
          Quero o diagnóstico gratuito
        </CtaButton>
      </div>
    </aside>
  );
}
