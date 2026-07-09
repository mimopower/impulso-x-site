import { SectionReveal } from './section-reveal';
import { ShieldCheck, Users, ScrollText, GitBranch, CalendarCheck } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Dados do cliente isolados',
    body: 'Memória, prompts e conversas são separados por cliente. Nada vaza de uma empresa para outra.',
  },
  {
    icon: Users,
    title: 'Handoff humano configurado',
    body: 'O agente sabe quando parar e chamar a equipe. A decisão final sempre pode ser humana.',
  },
  {
    icon: ScrollText,
    title: 'Logs e auditoria',
    body: 'Registramos interações para rastreabilidade, melhoria contínua e conformidade com as regras do negócio.',
  },
  {
    icon: GitBranch,
    title: 'Prompts versionados',
    body: 'Alterações em comportamento do agente são testadas antes de entrarem em produção.',
  },
  {
    icon: CalendarCheck,
    title: 'Revisão periódica',
    body: 'Revisamos métricas, exceções e riscos periodicamente para manter a operação alinhada.',
  },
];

export function Governance() {
  return (
    <section id="governanca" className="section-shell-tight relative bg-ink" aria-labelledby="governance-heading">
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />
      <div className="container-x">
        <SectionReveal className="max-w-3xl">
          <p className="section-kicker">Segurança</p>
          <h2
            id="governance-heading"
            className="mt-6 font-display text-display font-bold text-cream text-balance"
          >
            Governança e segurança de IA
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-[1.55] text-steel text-pretty">
            Agentes só geram resultado se operarem com controle. Mantemos regras claras, dados isolados e revisão constante.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-card border border-cream/12 bg-ink2/60 p-6 transition-colors duration-300 hover:border-cream/25 md:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight text-cream md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-base leading-[1.55] text-steel text-pretty">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
