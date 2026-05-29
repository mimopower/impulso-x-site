import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SectionReveal } from './section-reveal';

const pillars = [
  {
    n: '01',
    title: 'Sites e presença digital',
    body: 'Páginas que explicam sua oferta, fortalecem sua marca e facilitam o contato de quem já está pronto para conversar.',
  },
  {
    n: '02',
    title: 'Automação e IA aplicada',
    body: 'Fluxos para responder leads, organizar rotinas e tirar do manual tarefas que consomem tempo todos os dias.',
  },
  {
    n: '03',
    title: 'Marca, conteúdo e estratégia',
    body: 'Identidade, comunicação e direcionamento para sua empresa transmitir mais confiança antes mesmo da primeira conversa.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="section-shell relative overflow-hidden bg-ink2" aria-labelledby="services-heading">
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />
      <Image
        src={ASSETS.mark.src}
        alt=""
        width={ASSETS.mark.width}
        height={ASSETS.mark.height}
        className="pointer-events-none absolute -right-40 top-16 hidden w-[520px] opacity-[0.055] mix-blend-screen lg:block"
      />

      <div className="container-x relative">
        <SectionReveal className="max-w-3xl">
          <span className="section-kicker">Soluções</span>
          <h2 id="services-heading" className="mt-6 font-display text-display font-bold text-cream text-balance">
            O que a Impulso X organiza
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-steel text-pretty">
            Três frentes que se conectam sem confundir o cliente: presença, rotina e posicionamento.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.n} className="metal-panel group min-h-[310px] p-6 transition-transform duration-500 ease-out-expo hover:-translate-y-1 md:p-8">
              <div className="flex items-center justify-between border-b border-cream/10 pb-5">
                <span className="font-display text-sm font-bold text-gold tabular">{pillar.n}</span>
                <span className="h-2 w-2 rounded-[2px] bg-gold/80" aria-hidden />
              </div>
              <h3 className="mt-8 max-w-[12ch] font-display text-3xl font-bold text-cream md:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-steel text-pretty">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
