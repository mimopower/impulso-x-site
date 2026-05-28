'use client';

import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';
import { EASE_OUT_EXPO } from '@/lib/motion';

const currentYear = new Date().getFullYear();

const links = [
  { label: 'Diagnóstico', href: '#problema' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#processo' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Cases', href: '#cases' },
];

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-grafite/30" aria-label="Rodapé">
      {/* Gold hairline gradient */}
      <div className="hairline-gold" aria-hidden />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          className="grid md:grid-cols-12 gap-12 py-16 md:py-20"
        >
          {/* Brand block */}
          <div className="md:col-span-5">
            <a
              href="#top"
              aria-label={`${SITE.name} — Voltar ao topo`}
              className="inline-block group"
            >
              <span className="font-display font-extrabold uppercase text-cream text-2xl tracking-tight group-hover:text-gold transition-colors duration-400 ease-out-expo">
                Impulso X
              </span>
              <span className="font-display font-light text-gold/70 text-2xl tracking-tight ml-1.5">
                Intelligence
              </span>
            </a>

            <p className="mt-5 text-mist text-sm leading-relaxed max-w-[38ch] text-pretty">
              {SITE.tagline}
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Impulso X"
                className="group flex items-center gap-2 text-mist text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 ease-out-expo"
              >
                <span className="inline-block w-4 h-px bg-current transition-transform duration-300 ease-out-expo group-hover:w-6" />
                Instagram
              </a>
              <span className="h-3 w-px bg-grafite" aria-hidden />
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Impulso X"
                className="group flex items-center gap-2 text-mist text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 ease-out-expo"
              >
                <span className="inline-block w-4 h-px bg-current transition-transform duration-300 ease-out-expo group-hover:w-6" />
                TikTok
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-display font-medium mb-6">
              Navegação
            </p>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group flex items-center gap-3 text-mist text-sm hover:text-cream transition-colors duration-300 ease-out-expo"
                    >
                      <span
                        aria-hidden
                        className="inline-block h-px w-4 bg-grafite group-hover:w-6 group-hover:bg-gold/60 transition-all duration-400 ease-out-expo"
                      />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 font-display font-medium mb-6">
              Contato
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${SITE.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Impulso X"
                className="group flex flex-col gap-0.5"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-mist/60">WhatsApp</span>
                <span className="text-cream text-sm font-display tracking-wide group-hover:text-gold transition-colors duration-300 ease-out-expo">
                  {SITE.whatsappDisplay}
                </span>
              </a>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-mist/60">Localização</span>
                <span className="text-cream text-sm font-display tracking-wide">
                  São Paulo, BR
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-grafite/30 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-mist/50 text-xs tracking-wide">
            © {currentYear} Impulso X Intelligence. Todos os direitos reservados.
          </p>
          <p className="text-mist/30 text-xs tracking-wide">
            Operação escalável. Resultado real.
          </p>
        </div>
      </div>
    </footer>
  );
}
