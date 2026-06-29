import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

// 3 camadas âncoras — o Agente (01) é renderizado como bloco dominante (maior área,
// borda dourada, copy maior), nunca no mesmo template dos demais (cardápio plano = violação).
type PrimarySolution = { n: string; title: string; body: string; anchor?: boolean };

const primarySolutions: PrimarySolution[] = [
  {
    n: '01',
    title: 'Agente de IA',
    body: 'O agente de IA no WhatsApp ou Telegram: responde, qualifica, agenda e transfere para a equipe quando precisa.',
    anchor: true,
  },
  {
    n: '02',
    title: 'Presença que converte',
    body: 'Site, landing e Google Meu Negócio para o cliente confiar antes da conversa — e alimentar melhor o agente.',
  },
  {
    n: '03',
    title: 'Operação inteligente',
    body: 'Painel, CRM, dashboards e automações conforme a operação cresce — começando pelo essencial.',
  },
];

// "A operação inteligente por dentro" — camada 3 nomeada (mínimo-primeiro) + apoios
// de presença. Entram conforme a dor valida, nunca como menu no frio.
const complementarySolutions = [
  {
    n: '04',
    title: 'Painel administrativo sob medida',
    body: 'Visibilidade operacional mínima primeiro. Expande conforme a operação cresce.',
  },
  {
    n: '05',
    title: 'CRM e funil comercial',
    body: 'Registro e acompanhamento de leads desde o primeiro contato até a recompra.',
  },
  {
    n: '06',
    title: 'Dashboards e relatórios de valor',
    body: 'O que o agente respondeu, qualificou e agendou — em relatório mensal.',
  },
  {
    n: '07',
    title: 'Automações e integrações',
    body: 'Conectores aprovados. Integrações complexas viram projeto separado.',
  },
  {
    n: '08',
    title: 'Marca e identidade',
    body: 'Linguagem visual que comunica antes do agente falar.',
  },
  {
    n: '09',
    title: 'Conteúdo para redes',
    body: 'Conteúdo que alimenta o agente e os canais ao redor dele.',
  },
  {
    n: '10',
    title: 'Google Meu Negócio e SEO local',
    body: 'Presença que atrai o lead antes de chegar no WhatsApp.',
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
            Da primeira resposta à recompra
          </h2>
        </SectionReveal>

        <div className="mt-12">
          {primarySolutions.map((solution) =>
            solution.anchor ? (
              // Camada 1 — bloco âncora dominante (borda dourada, maior área/copy)
              <article
                key={solution.n}
                className="premium-card-depth service-item group relative mb-6 rounded-card border border-gold/40 bg-gradient-to-b from-gold/[0.06] to-transparent p-8 md:p-10"
              >
                <ServiceSweep />
                <div className="grid gap-6 md:grid-cols-[120px_1fr_1.4fr] md:items-center md:gap-10">
                  <span
                    className="relative z-10 font-display text-5xl font-bold leading-none text-transparent md:text-6xl select-none"
                    style={{ color: 'rgba(216,184,77,0.55)', WebkitTextStroke: '1px rgba(216,184,77,0.95)' }}
                    aria-hidden
                  >
                    {solution.n}
                  </span>
                  <h3 className="service-item-title relative z-10 self-center font-display text-3xl font-bold text-cream md:text-4xl">
                    {solution.title}
                    <span className="mt-1 block font-display text-xs font-bold tracking-[0.14em] text-gold">
                      CAMADA ÂNCORA
                    </span>
                  </h3>
                  <p className="relative z-10 col-span-2 font-sans text-lg leading-[1.55] text-steel text-pretty md:col-span-1 md:self-center">
                    {solution.body}
                  </p>
                </div>
              </article>
            ) : (
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
            ),
          )}
        </div>

        <SectionReveal delay={0.08} className="mt-16 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="section-kicker">A operação inteligente por dentro</p>
          <p className="max-w-prose font-sans text-lg leading-[1.55] text-steel text-pretty">
            A operação inteligente se constrói ao redor do agente, conforme a sua empresa cresce — começando pelo essencial.
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
