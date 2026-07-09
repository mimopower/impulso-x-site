import { SectionReveal } from './section-reveal';

const items = [
  'A IA rascunha, classifica e resume. Quem aprova preço, contrato e situação sensível é gente.',
  'LGPD desde o início: acordo de tratamento de dados antes de qualquer trabalho em produção.',
  'Sem caixa-preta: regras de uso e runbook documentados ficam com você.',
  'O diagnóstico é seu: fica com tudo que mapeamos, mesmo que não feche.',
];

export function Governance() {
  return (
    <section id="governanca" className="relative bg-ink py-16 md:py-20" aria-labelledby="governance-heading">
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />
      <div className="container-x">
        <SectionReveal className="max-w-3xl">
          <p className="section-kicker">Confiança</p>
          <h2
            id="governance-heading"
            className="mt-4 font-display text-3xl font-bold text-cream text-balance md:text-4xl"
          >
            Regras claras, sem caixa-preta
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-0 divide-y divide-cream/12 border-y border-cream/12 md:grid-cols-2 md:divide-x md:divide-y-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 py-6 md:p-6"
            >
              <span
                aria-hidden
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold"
              />
              <p className="font-sans text-base leading-[1.6] text-steel text-pretty">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
