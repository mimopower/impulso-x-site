'use client';

import { ASSETS } from '@/lib/assets';
import { SectionReveal } from './section-reveal';
import { AssetImage } from './ui/asset-image';

const visibleClients = [
  ...ASSETS.clients,
  ...ASSETS.clients,
  ...ASSETS.clients,
] as const;

function ClientChip({
  client,
  readable,
}: {
  client: (typeof ASSETS.clients)[number];
  readable: boolean;
}) {
  const chipClass = 'chipClass' in client ? client.chipClass : '';
  const logoClass = 'logoClass' in client ? client.logoClass : '';

  return (
    <div className={`client-logo-chip ${chipClass}`} aria-hidden={readable ? undefined : true}>
      <AssetImage
        src={client.src}
        alt={readable ? client.name : ''}
        width={client.width}
        height={client.height}
        className={`client-logo-image h-full w-full object-contain ${logoClass}`}
        sizes="180px"
      />
    </div>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="section-shell-tight relative overflow-hidden bg-ink" aria-labelledby="clients-heading">
      <div className="gold-hairline absolute inset-x-0 top-0" />

      <div className="container-x relative">
        <SectionReveal className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="section-kicker">Clientes e parceiros</p>
              <span className="inline-flex items-center gap-2 rounded-control border border-gold/30 px-3 py-1 font-display text-xs font-bold uppercase text-cream">
                <span
                  className="gold-pulse-dot h-1.5 w-1.5 rounded-full bg-gold"
                  aria-hidden="true"
                />
                Desde 2020
              </span>
            </div>

            <h2 id="clients-heading" className="mt-5 max-w-[14ch] font-display text-display font-bold text-cream text-balance">
              Marcas e parceiros que já confiaram na Impulso X
            </h2>
          </div>

          <p className="max-w-prose font-sans text-lg leading-[1.5] text-steel text-pretty">
            Projetos, parcerias e entregas reais ajudam a tirar a Impulso X do campo da promessa e mostrar
            a consistência de quem já vem construindo no digital.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.12} className="mt-10">
          <div className="client-marquee" aria-label="Clientes da Impulso X">
            <div className="marquee-track">
              <div className="marquee-set">
                {visibleClients.map((client, index) => (
                  <ClientChip key={`${client.name}-a-${index}`} client={client} readable={index < ASSETS.clients.length} />
                ))}
              </div>
              <div className="marquee-set" aria-hidden="true">
                {visibleClients.map((client, index) => (
                  <ClientChip key={`${client.name}-b-${index}`} client={client} readable={false} />
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
