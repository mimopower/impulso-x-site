import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { CtaButton } from './ui/cta-button';
import { SectionReveal } from './section-reveal';
import { AgentChat } from './ui/agent-chat';

// 3 camadas AI-first — Camada 1 (agente) é a âncora/herói, com peso visual dominante.
// Camadas 2 e 3 se constroem ao redor dela, como profundidade subordinada — nunca
// como 3 itens de igual peso (cicatriz Realize: cardápio plano de agência).
type Layer = { n: string; title: string; body: string; anchor?: boolean };

const layers: Layer[] = [
  {
    n: '01',
    title: 'Atendimento inteligente',
    body: 'O agente de IA atende no WhatsApp ou Telegram, qualifica, agenda e faz follow-up — e passa para a equipe quando precisa.',
    anchor: true,
  },
  {
    n: '02',
    title: 'Presença que converte',
    body: 'Site, landing e GMN que geram confiança antes da conversa e alimentam o agente com leads mais qualificados.',
  },
  {
    n: '03',
    title: 'Operação inteligente',
    body: 'Painel sob medida, CRM/funil, dashboards de valor e automações — começando pelo mínimo e crescendo conforme a dor valida.',
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
            <p className="section-kicker">As 3 camadas da operação inteligente</p>
            <h2
              id="operation-heading"
              className="mt-6 max-w-[20ch] font-display text-display font-bold text-cream text-balance"
            >
              O agente é o coração. A operação se constrói ao redor dele.
            </h2>
            <p className="mt-6 max-w-prose font-sans text-lg leading-[1.55] text-steel text-pretty">
              Do primeiro contato à recompra: o agente de IA atende onde o seu cliente fala.
              Ao redor dele, presença que converte, marca consistente e dados que mantêm o cliente voltando.
            </p>

            {/* Camada 1 — bloco âncora destacado (borda dourada, maior área/copy) */}
            <ul className="mt-8" aria-label="Camadas da operação inteligente">
              {layers.map((layer) =>
                layer.anchor ? (
                  <li
                    key={layer.n}
                    className="premium-card-depth relative mb-4 rounded-card border border-gold/40 bg-gradient-to-b from-gold/[0.06] to-transparent p-6"
                  >
                    <span
                      aria-hidden
                      className="font-display text-xs font-bold tracking-[0.14em] text-gold"
                    >
                      CAMADA {layer.n} · ÂNCORA
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-cream md:text-3xl">
                      {layer.title}
                    </h3>
                    <p className="mt-2 max-w-[46ch] font-sans text-base leading-[1.5] text-steel text-pretty">
                      {layer.body}
                    </p>
                  </li>
                ) : (
                  <li
                    key={layer.n}
                    className="grid grid-cols-[2.4rem_1fr] items-start gap-4 border-b border-cream/12 py-5 last:border-b-0"
                  >
                    <span className="font-display text-sm font-bold text-gold tabular" aria-hidden>
                      {layer.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-tight text-cream">
                        {layer.title}
                      </h3>
                      <p className="mt-1.5 font-sans text-sm leading-snug text-steel text-pretty">
                        {layer.body}
                      </p>
                    </div>
                  </li>
                ),
              )}
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
