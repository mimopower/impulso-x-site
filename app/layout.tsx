import type { Metadata, Viewport } from 'next';
import { Manrope, Rajdhani } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

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
    default: `${SITE.shortName} | Sites, automações e marca para empresas em crescimento`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    'A Impulso X cria sites, automações, identidade e estratégia digital para empresas que querem organizar a presença online e vender com mais clareza.',
  keywords: [
    'sites para empresas',
    'automação empresarial',
    'IA aplicada',
    'branding',
    'estratégia digital',
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
    title: 'Impulso X | Sites, automações e marca para empresas em crescimento',
    description:
      'Estratégia, design, IA e automação para organizar sua presença digital e reduzir tarefas manuais.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Impulso X Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impulso X | Sites, automações e marca para empresas em crescimento',
    description:
      'Estratégia, design, IA e automação para organizar sua presença digital e reduzir tarefas manuais.',
    images: ['/og-image.png'],
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
    <html lang="pt-BR" className={`${rajdhani.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/identidade/fundo-site-0-desktop.webp"
          media="(min-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/identidade/fundo-site-0-desktop.webp"
          media="(max-width: 767px)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/assets/identidade/marca-completa.webp`,
              sameAs: [SITE.instagram, SITE.tiktok],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: `+${SITE.whatsappE164}`,
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
      </head>
      <body className="bg-ink text-cream antialiased">
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
      </body>
    </html>
  );
}
