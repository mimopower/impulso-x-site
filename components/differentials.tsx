import { SectionReveal } from './section-reveal';

const changes = [
  'Menos tarefas soltas.',
  'Uma marca mais consistente.',
  'Atendimento mais rápido.',
  'Canais digitais mais claros.',
];

export function Differentials() {
  return (
    <section id="diferenciais" className="section-shell bg-ink" aria-labelledby="differentials-heading">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <span className="section-kicker">Na prática</span>
            <h2 id="differentials-heading" className="mt-6 max-w-[11ch] font-display text-display font-bold text-cream text-balance">
              O que muda na prática
            </h2>
          </SectionReveal>

          <div className="border-y border-cream/12">
            {changes.map((change, index) => (
              <div
                key={change}
                className="group grid gap-4 border-b border-cream/12 py-6 last:border-b-0 sm:grid-cols-[72px_1fr] sm:items-center"
              >
                <span className="font-display text-sm font-bold text-gold tabular">0{index + 1}</span>
                <p className="font-display text-3xl font-semibold text-cream transition-colors duration-300 group-hover:text-gold md:text-5xl">
                  {change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
