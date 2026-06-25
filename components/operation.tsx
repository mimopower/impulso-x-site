import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { SectionReveal } from './section-reveal';

const frontes = [
  {
    title: 'Atendimento inteligente',
    body: 'Responde nos canais que sua operação usa, qualifica e aciona a equipe.',
  },
  {
    title: 'Presença que converte',
    body: 'Site, landing e Google Meu Negócio.',
  },
  {
    title: 'Marca e identidade',
    body: 'Confiança antes da primeira conversa.',
  },
  {
    title: 'Conteúdo e redes',
    body: 'Consistência de presença.',
  },
  {
    title: 'Dados e recompra',
    body: 'Relatórios, follow-up e recompra.',
  },
] as const;

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
      {/* Âncora de compatibilidade — preserva links #agente já compartilhados (invisível). */}
      <span id="agente" className="sr-only" aria-hidden="true" />

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
            <p className="section-kicker">O que instalamos na sua operação</p>
            <h2
              id="operation-heading"
              className="mt-6 max-w-[18ch] font-display text-display font-bold text-cream text-balance"
            >
              Inteligência aplicada em cada ponto da sua operação.
            </h2>
            <p className="mt-6 max-w-prose font-sans text-lg leading-[1.55] text-steel text-pretty">
              Do primeiro contato à recompra: atendimento que responde onde o seu cliente fala,
              presença que converte, marca consistente, conteúdo e dados que mantêm o cliente voltando.
            </p>

            <ul className="mt-8 border-y border-cream/12" aria-label="Frentes da operação">
              {frontes.map((frente, index) => (
                <li
                  key={frente.title}
                  className="grid grid-cols-[2.8rem_1fr] items-center gap-4 border-b border-cream/12 py-4 last:border-b-0"
                >
                  <span className="font-display text-sm font-bold text-gold tabular" aria-hidden>
                    0{index + 1}
                  </span>
                  <span className="font-display text-xl font-semibold leading-tight text-cream">
                    {frente.title}
                    <span className="block font-sans text-sm font-normal leading-snug text-steel">
                      {frente.body}
                    </span>
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
            <div className="agent-showcase" aria-label="Exemplo de atendimento inteligente em operação multicanal">
              <div aria-hidden className="agent-showcase__glow" />
              <div className="agent-console">
                <div className="agent-console__header">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.08em] text-gold">
                      Fluxo inteligente
                    </p>
                    <p className="mt-1 text-sm text-steel">Atendimento onde o seu cliente fala</p>
                    <p className="mt-0.5 text-xs text-steel/70">Canais como WhatsApp, Instagram e Telegram</p>
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

                <p className="mt-3 text-right font-sans text-xs text-steel/70">Exemplo: atendimento inteligente</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
