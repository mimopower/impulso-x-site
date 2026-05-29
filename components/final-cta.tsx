import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-[clamp(6rem,12vw,13rem)]" aria-labelledby="cta-heading">
      <picture aria-hidden className="absolute inset-0 block opacity-35">
        <source media="(max-width: 767px)" srcSet={ASSETS.heroAlt.mobile} />
        <img src={ASSETS.heroAlt.desktop} alt="" className="h-full w-full object-cover object-center" loading="lazy" />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.96),rgba(13,13,13,0.62),rgba(13,13,13,0.96))]" aria-hidden />
      <div className="gold-hairline absolute inset-x-0 top-0" aria-hidden />

      <div className="container-x relative z-10 text-center">
        <p className="section-kicker justify-center before:hidden">Próximo passo</p>
        <h2 id="cta-heading" className="mx-auto mt-6 max-w-[12ch] font-display text-display font-bold text-cream text-balance">
          Vamos organizar o próximo passo da sua empresa?
        </h2>
        <p className="mx-auto mt-7 max-w-[46ch] text-lead text-steel text-pretty">
          Conversa direta, sem compromisso. Você traz o momento da empresa e nós ajudamos a enxergar o caminho.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="primary" size="xl" external>
            Agendar diagnóstico
          </CtaButton>
          <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.solutions)} variant="outline" size="xl" external>
            Conhecer soluções
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
