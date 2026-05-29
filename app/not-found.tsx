import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SITE, WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from '@/components/ui/cta-button';

export default function NotFound() {
  return (
    <main id="main-content" className="relative grid min-h-[100dvh] place-items-center overflow-hidden bg-ink px-4 py-24">
      <picture aria-hidden className="absolute inset-0 block opacity-35">
        <source media="(max-width: 767px)" srcSet={ASSETS.heroAlt.mobile} />
        <img
          src={ASSETS.heroAlt.desktop}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </picture>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 58% 35%, rgba(201,162,39,0.14), transparent 36%), linear-gradient(110deg, rgba(13,13,13,0.98), rgba(13,13,13,0.78), rgba(13,13,13,0.96))',
        }}
      />

      <section className="container-x relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <a
            href="/"
            aria-label={`${SITE.shortName} - voltar ao início`}
            className="mx-auto inline-flex items-center gap-3"
          >
            <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-[7px] border border-gold/25 bg-ink p-1">
              <Image
                src={ASSETS.mark.src}
                alt=""
                width={ASSETS.mark.width}
                height={ASSETS.mark.height}
                priority
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-left">
              <span className="block font-display text-2xl font-bold text-cream">Impulso X</span>
              <span className="mt-1 block text-sm text-gold">Intelligence</span>
            </span>
          </a>

          <p className="mt-14 font-display text-sm font-bold uppercase tracking-[0.08em] text-gold">Erro 404</p>
          <h1 className="mx-auto mt-5 max-w-[10ch] font-display text-display font-bold text-cream text-balance">
            Esta página saiu da rota.
          </h1>
          <p className="mx-auto mt-7 max-w-[48ch] font-sans text-lead text-steel text-pretty">
            Volte para a Impulso X e encontre o caminho mais claro para o próximo passo.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="/" variant="primary" size="xl">
              Voltar ao início
            </CtaButton>
            <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="outline" size="xl" external>
              Falar no WhatsApp
            </CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
