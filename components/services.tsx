import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SectionReveal } from './section-reveal';
import { GoldCircuitLines } from './ui/gold-circuit-lines';

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
] as const;

export function Services() {
  return (
    <section id="servicos" className="section-shell-tight relative overflow-hidden bg-ink2" aria-labelledby="services-heading">
      <div aria-hidden className="gold-hairline absolute inset-x-0 top-0" />
      <GoldCircuitLines variant="services" />

      {/* Escudo watermark — brand atmosphere behind section */}
      <Image
        src={ASSETS.mark.src}
        alt=""
        width={ASSETS.mark.width}
        height={ASSETS.mark.height}
        className="pointer-events-none absolute -right-32 top-8 hidden w-[500px] select-none lg:block"
        style={{ opacity: 0.05 }}
      />

      <div className="container-x relative">
        <SectionReveal className="max-w-3xl">
          {/* No eyebrow here — eyebrow budget used at Hero and Process only */}
          <h2
            id="services-heading"
            className="font-display text-display font-bold text-cream text-balance"
          >
            O que a Impulso X organiza
          </h2>
        </SectionReveal>

        {/* Editorial horizontal list — NOT 3 identical cards (taste-skill ban).
            Each pillar is a full-width row with large outline number.
            Emil: CSS clip-path for the hover sweep — no JS required per row. */}
        <div className="mt-16">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group relative grid grid-cols-[60px_1fr] gap-6 border-t border-cream/12 py-10 last:border-b last:border-b-cream/12 md:grid-cols-[96px_1fr_1.2fr] md:gap-10 md:py-12"
            >
              {/* Gold hover sweep — CSS only, hardware-accelerated via transform:scaleX */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                style={{
                  background: 'linear-gradient(90deg, rgba(201,162,39,0.05) 0%, transparent 100%)',
                }}
              />

              {/* Large outline number */}
              <span
                className="font-display text-4xl font-bold leading-none text-transparent md:text-5xl select-none"
                style={{ WebkitTextStroke: '1px rgba(201,162,39,0.38)' }}
                aria-hidden
              >
                {p.n}
              </span>

              {/* Title */}
              <h3 className="self-center font-display text-2xl font-bold text-cream transition-colors duration-300 group-hover:text-gold md:text-3xl">
                {p.title}
              </h3>

              {/* Body — only visible on desktop grid col 3 */}
              <p className="col-span-2 font-sans text-base leading-relaxed text-steel text-pretty md:col-span-1 md:self-center">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
