import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { SectionReveal } from './section-reveal';

const capabilities = [
  'Primeira resposta automatizada',
  'Qualificação do lead',
  'Agendamento do próximo passo',
  'Follow-up programado',
  'Handoff humano',
  'Registro para acompanhamento',
] as const;

const moments = [
  {
    n: '01',
    title: 'Lead chama',
    body: 'A conversa entra pelo WhatsApp e já cai em um fluxo orientado pela sua operação.',
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

export function Agent() {
  return (
    <section id="agente" className="section-shell-wide relative overflow-hidden bg-ink2" aria-labelledby="agent-heading">
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
            <p className="section-kicker">O produto-âncora</p>
            <h2
              id="agent-heading"
              className="mt-6 max-w-[18ch] font-display text-display font-bold text-cream text-balance"
            >
              Um agente que organiza a conversa, qualifica o lead e chama sua equipe quando importa.
            </h2>
            <p className="mt-6 max-w-prose font-sans text-lg leading-[1.55] text-steel text-pretty">
              Ele organiza a primeira conversa, entende a demanda, coleta informações importantes,
              agenda o próximo passo e transfere para uma pessoa quando a conversa pede decisão humana.
            </p>

            <ul className="mt-8 border-y border-cream/12" aria-label="Capacidades do agente">
              {capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="grid grid-cols-[2.8rem_1fr] items-center gap-4 border-b border-cream/12 py-4 last:border-b-0"
                >
                  <span className="font-display text-sm font-bold text-gold tabular" aria-hidden>
                    0{index + 1}
                  </span>
                  <span className="font-display text-xl font-semibold leading-tight text-cream">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButton href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)} variant="primary" size="xl" external>
                Quero meu diagnóstico
              </CtaButton>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="agent-showcase" aria-label="Fluxo operacional do agente de IA no WhatsApp">
              <div aria-hidden className="agent-showcase__glow" />
              <div className="agent-console">
                <div className="agent-console__header">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.08em] text-gold">
                      Fluxo inteligente
                    </p>
                    <p className="mt-1 text-sm text-steel">WhatsApp conectado à operação</p>
                  </div>
                  <span className="agent-status">
                    <span aria-hidden className="agent-status__dot" />
                    Ativo
                  </span>
                </div>

                <div className="agent-chat" aria-label="Exemplo ilustrativo de conversa do agente">
                  {messages.map((message) => (
                    <p
                      key={message.text}
                      className={`agent-chat__bubble agent-chat__bubble--${message.from}`}
                    >
                      {message.text}
                    </p>
                  ))}
                  <p className="agent-handoff">
                    <span aria-hidden className="agent-handoff__pulse" />
                    Transferindo para a equipe
                  </p>
                </div>

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
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
