import Image from 'next/image';
import { ASSETS } from '@/lib/assets';
import { SITE, WHATSAPP_MESSAGES, WHATSAPP_URL } from '@/lib/site';
import { LogoShine } from './ui/logo-shine';

const currentYear = new Date().getFullYear();

const links = [
  { label: 'Agente', href: '#agente' },
  { label: 'Soluções', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Fundadores', href: '#fundadores' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink" aria-label="Rodapé">
      <div className="container-x">
        <div className="grid gap-12 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <a href="#top" aria-label={`${SITE.name} - voltar ao topo`} className="inline-flex items-center gap-4">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-[7px] border border-gold/20 bg-ink p-1.5">
                <Image
                  src={ASSETS.mark.src}
                  alt=""
                  width={ASSETS.mark.width}
                  height={ASSETS.mark.height}
                  className="h-full w-full object-contain"
                />
                <LogoShine variant="subtle" />
              </span>
              <span>
                <span className="block font-display text-2xl font-bold text-cream">Impulso X</span>
                <span className="mt-1 block text-sm text-gold">Intelligence</span>
              </span>
            </a>
            <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-steel text-pretty">{SITE.tagline}</p>
          </div>

          <nav className="md:col-span-3 md:col-start-7" aria-label="Links do rodapé">
            <p className="font-display text-sm font-bold text-gold">Navegação</p>
            <ul className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-steel transition-colors duration-300 hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:col-start-10">
            <p className="font-display text-sm font-bold text-gold">Contato</p>
            <div className="mt-5 flex flex-col gap-4 text-sm">
              <a
                href={WHATSAPP_URL(WHATSAPP_MESSAGES.diagnostic)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel transition-colors duration-300 hover:text-cream"
              >
                WhatsApp: {SITE.whatsappDisplay}
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel transition-colors duration-300 hover:text-cream"
              >
                Instagram
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel transition-colors duration-300 hover:text-cream"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-cream/10 py-6 text-xs text-steel/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Impulso X Intelligence. Todos os direitos reservados.</p>
          <p>CNPJ {SITE.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
