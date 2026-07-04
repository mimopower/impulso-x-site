export const ASSETS = {
  hero: {
    desktop: '/assets/identidade/fundo-site-0-sem-escudo-desktop.webp',
    mobile: '/assets/identidade/fundo-site-0-sem-escudo-mobile.webp',
    width: 1716,
    height: 916,
  },
  heroAlt: {
    desktop: '/assets/identidade/fundo-site-1-desktop.webp',
    mobile: '/assets/identidade/fundo-site-1-desktop.webp',
    width: 1717,
    height: 916,
  },
  mark: {
    src: '/assets/identidade/marca-escudo.webp',
    width: 760,
    height: 760,
  },
  markVideo: {
    desktop: {
      webm: '/assets/identidade/video-escudo-desktop-v1.webm',
      mp4: '/assets/identidade/video-escudo-desktop-v1.mp4',
      poster: '/assets/identidade/video-escudo-poster-desktop-v1.webp',
      width: 720,
      height: 1000,
    },
    mobile: {
      webm: '/assets/identidade/video-escudo-mobile-v1.webm',
      mp4: '/assets/identidade/video-escudo-mobile-v1.mp4',
      poster: '/assets/identidade/video-escudo-poster-mobile-v1.webp',
      width: 480,
      height: 666,
    },
  },
  wordmark: {
    src: '/assets/identidade/marca-completa.webp',
    width: 760,
    height: 760,
  },
  logo: {
    src: '/assets/identidade/logo-institucional.webp',
    width: 720,
    height: 720,
  },
  office: {
    src: '/assets/identidade/escritorio.webp',
    width: 1400,
    height: 1120,
  },
  founders: {
    luiz: {
      src: '/assets/identidade/perfil-luiz-v3.webp',
      width: 960,
      height: 1200,
    },
    karina: {
      src: '/assets/identidade/perfil-karina.webp',
      width: 720,
      height: 1080,
    },
  },
  mockups: {
    macbook: {
      src: '/assets/identidade/mockup-macbook.webp',
      width: 1180,
      height: 787,
    },
    iphone: {
      src: '/assets/identidade/mockup-iphone.webp',
      width: 760,
      height: 1140,
    },
    ipad: {
      src: '/assets/identidade/mockup-ipad.webp',
      width: 980,
      height: 735,
    },
    redes: {
      src: '/assets/identidade/redes.webp',
      width: 960,
      height: 640,
    },
    temas: {
      src: '/assets/identidade/temas.webp',
      width: 760,
      height: 760,
    },
    icones: {
      src: '/assets/identidade/icones.webp',
      width: 960,
      height: 640,
    },
  },
  clients: [
    {
      name: 'Jamil — Treinamento Personalizado',
      src: '/assets/cases/jamil.webp',
      width: 193,
      height: 220,
    },
    {
      name: 'Ohana',
      src: '/assets/cases/ohana-v2.webp',
      width: 588,
      height: 315,
    },
    {
      name: 'Casa das Magnólias',
      src: '/assets/cases/casamagnolia.webp',
      width: 792,
      height: 1441,
      chipClass: 'client-logo-chip--highlight client-logo-chip--seal',
      logoClass: 'client-logo-image--pink-seal',
    },
    {
      name: 'Mimo Power',
      src: '/assets/cases/mimo-power.webp',
      width: 635,
      height: 220,
    },
    {
      name: 'Minas Eventos — Foodtruck e Barracas',
      src: '/assets/cases/minas-eventos.webp',
      width: 288,
      height: 220,
    },
    {
      name: 'Vivian Bustamante',
      src: '/assets/cases/vivian.webp',
      width: 992,
      height: 743,
      chipClass: 'client-logo-chip--highlight client-logo-chip--wide-pink',
      logoClass: 'client-logo-image--pink-wide',
    },
  ],
} as const;
