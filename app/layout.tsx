import type { Metadata, Viewport } from 'next';
import { Manrope, Rajdhani } from 'next/font/google';
import { IntroReveal } from '@/components/intro-reveal';
import { INTRO_DESKTOP_TOTAL_MS, INTRO_MOBILE_TOTAL_MS } from '@/lib/intro-timeline';
import { SITE } from '@/lib/site';
import './globals.css';

const introGateScript = `(function(){
  var root=document.documentElement;
  var release=function(){
    root.removeAttribute('data-intro');
    var shell=document.getElementById('site-shell');
    if(shell) shell.inert=false;
  };
  try {
    var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var seen=sessionStorage.getItem('ix_intro_seen')==='1';
    var forced=new URLSearchParams(window.location.search).get('intro')==='1';
    if(forced){
      try { sessionStorage.removeItem('ix_intro_seen'); } catch(error) {}
    }
    if(!reduced&&(!seen||forced)){
      root.dataset.intro='play';
      window.setTimeout(function(){
        release();
        window.dispatchEvent(new Event('ix:intro-complete'));
      },window.matchMedia('(max-width: 767px)').matches?${INTRO_MOBILE_TOTAL_MS}:${INTRO_DESKTOP_TOTAL_MS});
    }
  } catch(error) {
    release();
  }
  window.addEventListener('pageshow',function(event){
    if(event.persisted) release();
  });
})();`;

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
    name: 'Soluções Impulso X',
    itemListElement: [
      'Agente de IA no WhatsApp ou Telegram com handoff humano',
      'Diagnóstico do funil de atendimento',
      'Presença digital que converte',
      'Painel administrativo sob medida',
      'CRM e funil comercial',
      'Dashboards e relatórios de valor',
      'Automações e integrações',
      'Marca e identidade',
      'Conteúdo para redes',
      'Google Meu Negócio e SEO local',
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
    default: `${SITE.shortName} | Inteligência que atende, qualifica e faz seu cliente voltar`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    'A Impulso X instala um agente de IA no seu WhatsApp ou Telegram para responder na hora, qualificar e agendar — e transferir para um humano quando precisa. Você para de perder cliente e de depender de você mesmo para responder tudo.',
  keywords: [
    'operação inteligente para PMEs',
    'atendimento automatizado com IA',
    'agente de IA para atendimento',
    'agente de IA no WhatsApp',
    'agente de IA no Telegram',
    'presença digital para PMEs',
    'painel administrativo sob medida',
    'CRM para PMEs',
    'qualificação de leads',
    'recompra',
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
    title: 'Impulso X | Inteligência que atende, qualifica e faz seu cliente voltar',
    description:
      'A Impulso X instala um agente de IA no seu WhatsApp ou Telegram para responder na hora, qualificar e agendar — e transferir para um humano quando precisa. Você para de perder cliente e de depender de você mesmo para responder tudo.',
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
    title: 'Impulso X | Inteligência que atende, qualifica e faz seu cliente voltar',
    description:
      'A Impulso X instala um agente de IA no seu WhatsApp ou Telegram para responder na hora, qualificar e agendar — e transferir para um humano quando precisa. Você para de perder cliente e de depender de você mesmo para responder tudo.',
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
        <script id="ix-intro-gate" dangerouslySetInnerHTML={{ __html: introGateScript }} />
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
      </head>
      <body className="bg-ink text-cream antialiased">
        <IntroReveal />
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
