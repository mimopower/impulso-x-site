import type { Metadata, Viewport } from 'next';
import { Manrope, Rajdhani } from 'next/font/google';
import { AnalyticsEvents } from '@/components/ui/analytics-events';
import { SITE } from '@/lib/site';
import './globals.css';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/assets/identidade/marca-completa.webp`,
  taxID: SITE.cnpj,
  sameAs: [SITE.instagram, SITE.tiktok],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${SITE.whatsappE164}`,
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Time de IA Impulso X',
    itemListElement: [
      'Diagnóstico gratuito do gargalo prioritário',
      'Atendimento e vendas com IA',
      'Operação interna com IA',
      'Estrutura e dados',
      'Presença que converte',
      'Agentes no WhatsApp e Telegram',
      'Painel administrativo sob medida',
      'CRM e funil comercial',
      'Dashboards e relatórios de valor',
      'Governança e segurança de IA',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
};

const ogImage = '/og-image-ai-first.png';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} | ${SITE.tagline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    'time de IA para PMEs',
    'IA por dentro resultado por fora',
    'agente de IA para atendimento',
    'agente de IA no WhatsApp',
    'agente de IA no Telegram',
    'operação inteligente com IA',
    'presença digital para PMEs',
    'painel administrativo sob medida',
    'CRM para PMEs',
    'qualificação de leads com IA',
    'recompra automatizada',
    'governança de IA',
    'Impulso X',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: `Impulso X | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Impulso X Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Impulso X | ${SITE.tagline}`,
    description: SITE.description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${rajdhani.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/identidade/fundo-site-0-sem-escudo-desktop.webp"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/identidade/fundo-site-0-sem-escudo-mobile.webp"
          media="(max-width: 767px)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          defer
          src="/umami/script.js"
          data-website-id="7d787043-4a49-4609-ae5b-dda8e1261a8d"
          data-host-url="https://www.impulsox.com.br/umami"
        />
      </head>
      <body className="bg-ink text-cream antialiased">
        <AnalyticsEvents />
        <div id="site-shell">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
          >
            Pular para o conteúdo
          </a>

          {/* Scroll progress — gold left-edge bar (CSS scroll-driven, progressive) */}
          <div aria-hidden className="scroll-line" />

          {/* Film grain */}
          <div aria-hidden className="grain">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <filter id="noise-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise-filter)" />
            </svg>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
