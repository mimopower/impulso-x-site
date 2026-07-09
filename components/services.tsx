import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

type Frente = {
  n: string;
  title: string;
  body: string;
  chips: string[];
};

const frentes: Frente[] = [
  {
    n: 'A',
    title: 'Atendimento e vendas com IA',
    body: 'Agente no canal do cliente que responde na hora, qualifica e agenda. A equipe entra só onde a máquina ainda não resolve.',
    chips: ['Agente WhatsApp/Telegram', 'Qualificação', 'Agendamento', 'Handoff humano', 'Follow-up', 'Recompra'],
  },
  {
    n: 'B',
    title: 'Operação interna com IA',
    body: 'Copilotos e automações que tiram da equipe as tarefas repetitivas que roubam tempo de venda e atendimento.',
    chips: ['Copilotos', 'Automações', 'Fluxos de aprovação', 'Relatórios', 'Integrações'],
  },
  {
    n: 'C',
    title: 'Estrutura e dados',
    body: 'CRM, painéis e dashboards conectados para você parar de operar no escuro e decidir com clareza.',
    chips: ['CRM', 'Painel administrativo', 'Dashboards', 'Funil comercial', 'Base de conhecimento'],
  },
  {
    n: 'D',
    title: 'Presença que converte',
    body: 'Site, Google Meu Negócio, copy e marca que alimentam o funil e geram confiança antes da conversa.',
    chips: ['Site/Landing', 'Google Meu Negócio', 'SEO local', 'Copy comercial', 'Marca'],
  },
];

function FrenteBlock({ frente, index }: { frente: Frente; index: number }) {
  return (
    <article
      key={frente.n}
      className="service-item group relative rounded-card border border-cream/12 bg-ink/60 p-6 transition-colors duration-500 hover:border-cream/25 hover:bg-ink md:p-8"
    >
      <span aria-hidden className="font-display text-xs font-bold tracking-[0.14em] text-gold">
        FRENTE {frente.n}
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-cream md:text-3xl">
        {frente.title}
      </h3>
      <p className="mt-3 font-sans text-base leading-[1.55] text-steel text-pretty">
        {frente.body}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {frente.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-cream/12 bg-cream/[0.04] px-3 py-1.5 font-sans text-xs font-medium text-steel"
          >
            {chip}
          </li>
        ))}
      </ul>
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
          <p className="section-kicker">Serviços</p>
          <h2
            id="services-heading"
            className="mt-6 max-w-[18ch] font-display text-display font-bold text-cream text-balance"
          >
            Quatro frentes de atuação
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-[1.55] text-steel text-pretty">
            Escolhemos a primeira junto com você no diagnóstico. Depois expandimos para as demais na ordem certa.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {frentes.map((frente, index) => (
            <FrenteBlock key={frente.n} frente={frente} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
