import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { SectionReveal } from './section-reveal';
import { AgentChat } from './ui/agent-chat';

type Step = { n: string; title: string; body: string };

const steps: Step[] = [
  {
    n: '01',
    title: 'Diagnóstico gratuito',
    body: 'Em 30 minutos a gente mapeia onde a IA devolve mais resultado hoje: atendimento, operação, dados ou presença.',
  },
  {
    n: '02',
    title: 'Primeira entrega escopada',
    body: 'Escolhemos uma frente para começar. Construímos, testamos e validamos o resultado antes de seguir em frente.',
  },
  {
    n: '03',
    title: 'Expande para o resto',
    body: 'Com a primeira frente rodando, ligamos as demais áreas: agentes, painéis, automações e presença, sempre na ordem certa.',
  },
];

const moments = [
  {
    n: '01',
    title: 'Lead chama',
    body: 'A conversa entra pelo canal que o cliente usa e já cai num fluxo orientado pela sua operação.',
  },
  {
    n: '02',
    title: 'Agente qualifica',
    body: 'O agente coleta contexto, entende a demanda e separa o que precisa de atenção humana.',
  },
  {
    n: '03',
    title: 'Agenda ou transfere',
    body: 'Quando a conversa pede decisão, a equipe recebe o contexto para continuar sem recomeçar do zero.',
  },
  {
    n: '04',
    title: 'Follow-up registrado',
    body: 'O próximo contato fica organizado para acompanhamento, recompra e evolução do atendimento.',
  },
] as const;

const messages = [
  { from: 'lead', text: 'Olá, queria entender melhor como funciona.' },
  { from: 'agent', text: 'Claro. Antes de seguir, me conta qual serviço você procura e para quando precisa?' },
  { from: 'lead', text: 'Preciso de orçamento e queria falar com alguém ainda hoje.' },
  { from: 'agent', text: 'Perfeito. Vou organizar essas informações e acionar a equipe com o contexto.' },
] as const;

export function Operation() {
  return (
    <section
      id="operacao"
      className="section-shell-wide relative overflow-hidden bg-ink2"
      aria-labelledby="operation-heading"
    >
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />

      <Image
        src={ASSETS.mark.src}
        alt=""
        width={ASSETS.mark.width}
        height={ASSETS.mark.height}
        className="pointer-events-none absolute -right-24 top-16 hidden w-[460px] select-none lg:block"
        style={{ opacity: 0.04 }}
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <SectionReveal>
            <p className="section-kicker">Como trabalhamos</p>
            <h2
              id="operation-heading"
              className="mt-6 max-w-[18ch] font-display text-display font-bold text-cream text-balance"
            >
              Como o time de IA entra na sua empresa
            </h2>
            <p className="mt-6 max-w-prose font-sans text-lg leading-[1.55] text-steel text-pretty">
              Diagnóstico primeiro. Depois construímos na ordem que faz sentido para você.
            </p>

            <ul className="mt-8" aria-label="Etapas de entrada do time de IA">
              {steps.map((step) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[2.4rem_1fr] items-start gap-4 border-b border-cream/12 py-5 last:border-b-0"
                >
                  <span className="font-display text-sm font-bold text-gold tabular" aria-hidden>
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-snug text-steel text-pretty">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButton
                href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
                variant="primary"
                size="xl"
                external
                eventName="whatsapp_diagnostico"
              >
                Quero o diagnóstico gratuito
              </CtaButton>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="agent-showcase" aria-label="Exemplo de atendimento inteligente em operação multicanal">
              <div aria-hidden className="agent-showcase__glow" />
              <div className="agent-console">
                <div className="agent-console__header">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.08em] text-gold">
                      Fluxo inteligente
                    </p>
                    <p className="mt-1 text-sm text-steel">Atendimento onde o seu cliente fala</p>
                    <p className="mt-0.5 text-xs text-steel/70">WhatsApp ou Telegram, à escolha do cliente</p>
                  </div>
                  <span className="agent-status">
                    <span aria-hidden className="agent-status__dot" />
                    Ativo
                  </span>
                </div>

                <AgentChat messages={messages} />

                <ol className="agent-flow" aria-label="Momentos do fluxo operacional">
                  {moments.map((moment) => (
                    <li key={moment.n} className="agent-flow__item">
                      <span className="agent-flow__number" aria-hidden>
                        {moment.n}
                      </span>
                      <div>
                        <h3 className="agent-flow__title">{moment.title}</h3>
                        <p className="agent-flow__body">{moment.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="mt-3 text-right font-sans text-xs text-steel/70">Exemplo: o agente em operação</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
