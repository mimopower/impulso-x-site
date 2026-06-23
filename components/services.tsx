import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

const primarySolutions = [
  {
    n: '01',
    title: 'Sites e presença digital',
    body: 'Páginas que explicam sua oferta e facilitam o próximo contato.',
  },
  {
    n: '02',
    title: 'Automação & IA aplicada',
    body: 'Fluxos que tiram tarefas repetitivas do manual.',
  },
  {
    n: '03',
    title: 'Marca, identidade e estratégia',
    body: 'Identidade e direção para transmitir confiança antes da primeira conversa.',
  },
] as const;

const complementarySolutions = [
  {
    n: '04',
    title: 'Agente de IA no WhatsApp',
    body: 'Atendimento automático que responde, encaminha e transfere a conversa para uma pessoa quando necessário.',
  },
  {
    n: '05',
    title: 'Google Meu Negócio e SEO local',
    body: 'Presença fortalecida no Google e no Maps para buscas da sua região.',
  },
  {
    n: '06',
    title: 'Conteúdo para redes',
    body: 'Criação e organização de conteúdo para sua marca manter consistência.',
  },
  {
    n: '07',
    title: 'Estratégia de marketing e campanhas',
    body: 'Direção para campanhas e ações de marketing conectadas aos objetivos da empresa.',
  },
] as const;

function ServiceSweep() {
  return <span aria-hidden className="service-hover-sweep" />;
}

export function Services() {
  return (
    <section id="servicos" className="section-shell-tight relative overflow-hidden bg-ink2" aria-labelledby="services-heading">
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />
      <GoldCircuitLines variant="services" />

      <Image
        src={ASSETS.mark.src}
        alt=""
        width={ASSETS.mark.width}
        height={ASSETS.mark.height}
        className="pointer-events-none absolute -right-32 top-8 hidden w-[500px] select-none lg:block"
        style={{ opacity: 0.05 }}
      />

      <div className="container-x relative">
        <SectionReveal className="max-w-5xl">
          <h2
            id="services-heading"
            className="max-w-[18ch] font-display text-display font-bold text-cream text-balance"
          >
            Soluções para organizar e acelerar sua presença digital
          </h2>
        </SectionReveal>

        <div className="mt-12">
          {primarySolutions.map((solution) => (
            <article
              key={solution.n}
              className="service-item group relative grid grid-cols-[60px_1fr] gap-6 border-t border-cream/12 py-9 last:border-b last:border-b-cream/12 md:grid-cols-[96px_1fr_1.2fr] md:gap-10 md:py-11"
            >
              <ServiceSweep />
              <span
                className="relative z-10 font-display text-4xl font-bold leading-none text-transparent md:text-5xl select-none"
                style={{ color: 'rgba(216,184,77,0.5)', WebkitTextStroke: '1px rgba(216,184,77,0.92)' }}
                aria-hidden
              >
                {solution.n}
              </span>
              <h3 className="service-item-title relative z-10 self-center font-display text-2xl font-bold text-cream md:text-3xl">
                {solution.title}
              </h3>
              <p className="relative z-10 col-span-2 font-sans text-base leading-[1.55] text-steel text-pretty md:col-span-1 md:self-center">
                {solution.body}
              </p>
            </article>
          ))}
        </div>

        <SectionReveal delay={0.08} className="mt-16 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="section-kicker">Também podemos integrar</p>
          <p className="max-w-prose font-sans text-lg leading-[1.55] text-steel text-pretty">
            Soluções complementares entram no projeto conforme a necessidade e o momento da sua empresa.
          </p>
        </SectionReveal>

        <div className="mt-8 grid border-y border-cream/12 lg:grid-cols-2">
          {complementarySolutions.map((solution) => (
            <article
              key={solution.n}
              className="service-capability service-item group relative grid grid-cols-[52px_1fr] gap-x-5 gap-y-4 border-b border-cream/12 py-8 last:border-b-0 lg:min-h-[190px] lg:grid-cols-[62px_1fr] lg:px-8 lg:py-9"
            >
              <ServiceSweep />
              <span
                className="relative z-10 font-display text-3xl font-bold leading-none text-transparent select-none"
                style={{ color: 'rgba(216,184,77,0.5)', WebkitTextStroke: '1px rgba(216,184,77,0.92)' }}
                aria-hidden
              >
                {solution.n}
              </span>
              <h3 className="service-item-title relative z-10 font-display text-xl font-bold leading-tight text-cream md:text-2xl">
                {solution.title}
              </h3>
              <p className="relative z-10 col-start-2 font-sans text-base leading-[1.55] text-steel text-pretty">
                {solution.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
