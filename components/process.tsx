import { SectionReveal } from './section-reveal';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'Entendemos a empresa, a oferta, os canais atuais e os pontos que mais geram retrabalho.',
  },
  {
    n: '02',
    title: 'Plano',
    body: 'Organizamos prioridades e definimos o que precisa ser criado, ajustado ou automatizado primeiro.',
  },
  {
    n: '03',
    title: 'Execução',
    body: 'Construímos site, identidade, materiais e fluxos de automação com acompanhamento próximo.',
  },
  {
    n: '04',
    title: 'Ajuste',
    body: 'Revisamos o que foi entregue, melhoramos a experiência e deixamos o próximo passo claro.',
  },
];

export function Process() {
  return (
    <section id="processo" className="section-shell bg-ink2" aria-labelledby="process-heading">
      <div className="container-x">
        <SectionReveal className="max-w-3xl">
          <span className="section-kicker">Método</span>
          <h2 id="process-heading" className="mt-6 font-display text-display font-bold text-cream text-balance">
            Como tiramos a ideia do papel
          </h2>
        </SectionReveal>

        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="metal-panel min-h-[260px] p-6">
              <span className="font-display text-sm font-bold text-gold tabular">{step.n}</span>
              <h3 className="mt-8 font-display text-3xl font-bold text-cream">{step.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-steel text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
