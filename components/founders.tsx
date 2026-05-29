import { ASSETS } from '@/lib/assets';
import { AssetImage } from './ui/asset-image';
import { SectionReveal } from './section-reveal';

const founders = [
  {
    name: 'Luiz Otávio',
    role: 'Tecnologia, estratégia e automação',
    image: ASSETS.founders.luiz,
    alt: 'Retrato de Luiz Otávio, cofundador da Impulso X',
    manifesto: [
      'Sou Luiz Otávio, engenheiro por formação e apaixonado por tecnologia, estratégia e soluções inteligentes. Sempre busquei unir inovação e criatividade para transformar ideias em experiências reais e negócios mais eficientes.',
      'Na Impulso X, meu foco é desenvolver soluções que conectem automação, posicionamento digital e inteligência artificial para ajudar empresas a crescerem de forma mais estratégica e organizada.',
      'Acredito que tecnologia deve ir além do moderno: ela precisa gerar resultado, simplificar processos e criar impacto real.',
    ],
  },
  {
    name: 'Karina',
    role: 'Criatividade, marca e comunicação',
    image: ASSETS.founders.karina,
    alt: 'Retrato de Karina, cofundadora da Impulso X',
    manifesto: [
      'Sou Karina, cofundadora da Impulso X e apaixonada por criatividade, comunicação e experiências que conectam marcas e pessoas de forma verdadeira.',
      'Atuo diretamente na parte criativa, marketing e construção da identidade da marca, buscando unir estratégia, inovação e autenticidade em cada projeto desenvolvido.',
      'Acredito que uma empresa vai muito além de vender serviços. Ela precisa transmitir confiança, proximidade e gerar experiências marcantes para seus clientes.',
      'Na Impulso X, meu propósito é transformar ideias em conexões reais, criando soluções visuais e estratégicas que fortaleçam empresas e impulsionem seu crescimento no ambiente digital.',
    ],
  },
];

export function Founders() {
  return (
    <section id="fundadores" className="section-shell overflow-hidden bg-ink2" aria-labelledby="founders-heading">
      <div className="container-x">
        <SectionReveal className="max-w-4xl">
          <span className="section-kicker">Luiz e Karina</span>
          <h2 id="founders-heading" className="mt-6 font-display text-display font-bold text-cream text-balance">
            Tecnologia e criatividade, lado a lado.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-steel text-pretty">
            A Impulso X nasce da união entre raciocínio técnico, visão de marca e cuidado na execução.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-12">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className={`grid gap-8 border-t border-cream/12 pt-10 lg:grid-cols-12 lg:gap-12 ${
                index % 2 === 1 ? 'lg:[&_.founder-photo]:order-2' : ''
              }`}
            >
              <div className="founder-photo lg:col-span-5">
                <div className="image-frame relative aspect-[4/5] overflow-hidden">
                  <AssetImage
                    src={founder.image.src}
                    alt={founder.alt}
                    fill
                    className={`object-cover ${founder.name === 'Karina' ? 'object-[50%_34%] saturate-[0.82] contrast-[1.06]' : 'object-[50%_28%] saturate-[0.9] contrast-[1.08]'}`}
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0)_46%,rgba(13,13,13,0.64)_100%)]" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-display text-3xl font-bold text-cream">{founder.name}</p>
                    <p className="mt-1 text-sm font-medium text-gold">{founder.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="font-display text-sm font-bold text-gold tabular">0{index + 1}</p>
                <h3 className="mt-4 font-display text-title font-bold text-cream">{founder.name}</h3>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-steel md:text-lg">
                  {founder.manifesto.map((paragraph) => (
                    <p key={paragraph} className="max-w-prose text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
