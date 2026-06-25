import { SectionReveal } from './section-reveal';

const faqs = [
  {
    question: 'A IA substitui meu atendimento humano?',
    answer:
      'Não. O agente organiza a primeira conversa e chama sua equipe quando a situação pede decisão humana.',
  },
  {
    question: 'Quando o agente transfere para uma pessoa?',
    answer:
      'As regras de handoff são configuradas com você. A transferência pode acontecer por tipo de pedido, dúvida sensível, intenção de compra ou qualquer limite definido no projeto.',
  },
  {
    question: 'Preciso trocar meu número ou canal de atendimento?',
    answer:
      'Não. O agente roda no WhatsApp ou Telegram, à sua escolha, sem trocar o número que você já usa — a implantação respeita sua rotina e reduz fricção para equipe e clientes.',
  },
  {
    question: 'Funciona no meu segmento?',
    answer:
      'Funciona melhor quando a empresa recebe muitas conversas pelo WhatsApp, Instagram, Google ou outros canais e tem triagem repetitiva. Adaptamos o fluxo ao canal que sua operação já usa.',
  },
  {
    question: 'A Impulso X só faz o agente de atendimento?',
    answer:
      'Não. O agente é a âncora, mas a operação inteligente se constrói ao redor dele: presença que converte, marca, conteúdo e dados para recompra — em 3 camadas que crescem conforme a sua empresa precisa.',
  },
  {
    question: 'O painel e o CRM são sob medida?',
    answer:
      'Sim. O escopo sai no diagnóstico — começamos pelo mínimo (painel operacional essencial) e expandimos conforme a operação cresce. Sem preço fechado no site: o tamanho da entrega depende da sua dor.',
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="section-shell-tight bg-ink" aria-labelledby="faq-heading">
      <div className="container-x">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <h2
              id="faq-heading"
              className="max-w-[11ch] font-display text-display font-bold text-cream text-balance"
            >
              Dúvidas antes do diagnóstico
            </h2>
            <p className="mt-5 max-w-prose font-sans text-lg leading-[1.5] text-steel text-pretty">
              A conversa começa simples: entendemos o funil, definimos limites do agente e mostramos
              como ele entraria na sua rotina.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} className="faq-item" open={index === 0}>
                <summary className="faq-summary">
                  <span className="faq-number" aria-hidden>
                    0{index + 1}
                  </span>
                  <span>{item.question}</span>
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
