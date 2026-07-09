import { SectionReveal } from './section-reveal';

const faqs = [
  {
    question: 'A IA substitui meu atendimento humano?',
    answer:
      'Não. O agente organiza a primeira conversa e chama sua equipe quando a situação pede decisão humana.',
  },
  {
    question: 'Como vocês escolhem por qual frente começar?',
    answer:
      'Pelo diagnóstico gratuito. A gente mapeia onde a IA devolve mais resultado hoje — atendimento, operação, dados ou presença — e propõe uma primeira entrega pequena o suficiente para validar.',
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
      'Não. Atendimento é uma das quatro frentes do time de IA. Também atuamos em operação interna, estrutura, dados e presença que converte — sempre na ordem que faz sentido para o seu negócio.',
  },
  {
    question: 'E se eu precisar de mais de uma frente ao mesmo tempo?',
    answer:
      'Começamos por uma. Com a primeira validada, expandimos para as demais na ordem certa — sem nunca abandonar a operação que já está rodando.',
  },
  {
    question: 'Preciso entender de tecnologia?',
    answer:
      'Não. O time cuida da parte técnica, você decide o negócio. Tudo é documentado em um runbook simples, e a equipe é treinada para operar junto com a IA.',
  },
  {
    question: 'E os meus dados e os dos meus clientes?',
    answer:
      'Nenhum dado sensível entra no diagnóstico. Antes de qualquer trabalho em produção, formalizamos o acordo de tratamento de dados (LGPD). E aprovação humana é obrigatória no que é sensível.',
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
              A conversa começa simples: entendemos o funil, definimos os limites do agente e mostramos
              como ele entraria na sua rotina.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} className="faq-item" open={index === 0}>
                <summary className="faq-summary">
                  <span className="faq-number" aria-hidden>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
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
