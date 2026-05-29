import { ASSETS } from '@/lib/assets';
import { AssetImage } from './ui/asset-image';
import { SectionReveal } from './section-reveal';

const pains = [
  'O lead chega, mas a resposta demora.',
  'Tarefas simples continuam manuais.',
  'O site não explica bem o valor da empresa.',
  'A marca aparece diferente em cada canal.',
];

export function Problem() {
  return (
    <section id="problema" className="section-shell bg-ink" aria-labelledby="problem-heading">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <SectionReveal>
            <span className="section-kicker">O problema</span>
            <h2 id="problem-heading" className="mt-6 max-w-[12ch] font-display text-display font-bold text-cream text-balance">
              Quando a empresa cresce, o improviso custa caro.
            </h2>
            <p className="mt-7 max-w-prose text-lead text-steel text-pretty">
              A maioria das empresas não trava por falta de esforço. Trava porque site, atendimento,
              marca e processos foram montados aos poucos, sem uma estrutura comum.
            </p>
          </SectionReveal>

          <SectionReveal className="relative">
            <div className="image-frame relative aspect-[5/4] overflow-hidden">
              <AssetImage
                src={ASSETS.office.src}
                alt="Ambiente de trabalho visual da Impulso X em tom escuro e dourado"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.05),rgba(13,13,13,0.72))]" />
              <p className="absolute bottom-5 left-5 max-w-[24ch] font-display text-2xl font-semibold text-cream">
                Estrutura antes de escala.
              </p>
            </div>
          </SectionReveal>
        </div>

        <ul className="mt-14 grid gap-3 md:grid-cols-4">
          {pains.map((pain, index) => (
            <li key={pain} className="metal-panel min-h-[132px] p-5">
              <span className="font-display text-sm font-bold text-gold tabular">0{index + 1}</span>
              <p className="mt-5 text-base font-medium leading-relaxed text-cream">{pain}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
