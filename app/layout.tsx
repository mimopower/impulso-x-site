import type { Metadata, Viewport } from 'next';
import { Sora, Inter } from 'next/font/google';
import { SITE } from '@/lib/site';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'Unimos IA, automação, branding e estratégia para estruturar operações mais eficientes, modernas e preparadas para crescer com consistência.',
  keywords: [
    'agência digital',
    'inteligência artificial',
    'automação',
    'branding',
    'estratégia digital',
    'PME',
    'crescimento',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      'Inteligência aplicada, automação real e design premium para empresas que crescem com estrutura.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      'Inteligência aplicada, automação real e design premium para empresas que crescem com estrutura.',
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <head>
        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/logo.png`,
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
      <body className="bg-ink text-cream antialiased overflow-x-hidden">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-wide"
        >
          Pular para o conteúdo
        </a>

        {/* Grain overlay — fixed, non-interactive */}
        <div
          aria-hidden
          className="grain pointer-events-none select-none fixed inset-0 z-[90]"
          style={{ opacity: 0.045 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)" />
          </svg>
        </div>

        {children}
      </body>
    </html>
  );
}
