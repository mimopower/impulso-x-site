import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';
import { CtaButton } from './ui/cta-button';

type Frente = {
  n: string;
  title: string;
  quote: string;
  chips: string[];
};

const frentes: Frente[] = [
  {
    n: '01',
    title: 'Atendimento e vendas com IA',
    quote: 'Parar de perder leads no WhatsApp: resposta rápida 24/7, triagem, agenda e acompanhamento — com humano assumindo na hora certa.',
    chips: ['Resposta em segundos, 24/7', 'Triagem de tema, data e orçamento', 'Acompanhamento de quem esfriou'],
  },
  {
    n: '02',
    title: 'Operação interna com IA',
    quote: 'A IA trabalhando por dentro da sua equipe: orçamento, proposta e resumo de conversa saem em minutos, não em horas.',
    chips: ['Orçamento e proposta em minutos', 'Resumo pronto de cada conversa', 'IA rascunha, você só aprova'],
  },
  {
    n: '03',
    title: 'Estrutura e dados',
    quote: 'A operação num sistema, não em planilha solta e print de WhatsApp.',
    chips: ['Leads, agenda e status num painel só', 'Funil com score: quem priorizar hoje', 'Relatório mensal com resultado visível'],
  },
  {
    n: '04',
    title: 'Presença que converte',
    quote: 'O cliente te encontra no Google e chega na conversa já vendo prova e contexto.',
    chips: ['Google Meu Negócio completo', 'Portfólio e provas organizados', 'Landing que alimenta o atendimento'],
  },
];

function FrenteBlock({ frente, index }: { frente: Frente; index: number }) {
  return (
    <article className="service-item group relative rounded-card border border-cream/12 bg-ink/60 p-6 transition-colors duration-500 hover:border-cream/25 hover:bg-ink md:p-8">
      <div className="grid gap-6 md:grid-cols-[4rem_1fr]">
        <span aria-hidden className="font-display text-4xl font-bold leading-none text-gold/30 transition-colors group-hover:text-gold/50 md:text-5xl">
          {frente.n}
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold leading-tight text-cream md:text-3xl">
            {frente.title}
          </h3>
          <p className="mt-3 font-sans text-lg leading-[1.55] text-cream text-pretty">
            “{frente.quote}”
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {frente.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-cream/15 bg-cream/[0.04] px-3 py-1.5 font-sans text-xs font-medium text-steel transition-colors hover:border-gold/40 hover:text-cream"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
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
        <SectionReveal className="max-w-4xl">
          <p className="section-kicker">O que o time faz</p>
          <h2
            id="services-heading"
            className="mt-6 max-w-[18ch] font-display text-display font-bold text-cream text-balance"
          >
            As 4 frentes do time de IA
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-[1.55] text-steel text-pretty">
            Cada frente resolve uma dor concreta. A ordem é definida no diagnóstico.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5">
          {frentes.map((frente, index) => (
            <FrenteBlock key={frente.n} frente={frente} index={index} />
          ))}
        </div>

        <div className="mt-12 rounded-card border border-gold/20 bg-gradient-to-b from-gold/[0.05] to-transparent p-8 md:p-10">
          <p className="max-w-[52ch] font-sans text-lg leading-[1.55] text-cream text-pretty">
            O diagnóstico gratuito mostra por qual dessas frentes faz sentido começar.
          </p>
          <div className="mt-6">
            <CtaButton
              href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
              variant="primary"
              size="xl"
              external
              eventName="whatsapp_diagnostico"
            >
              Quero meu diagnóstico
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
