export const ASSETS = {
  hero: {
    desktop: '/assets/identidade/fundo-site-0-desktop.webp',
    // Desktop image on mobile: 1717x916 at object-cover gives ~1.86x retina density,
    // much sharper than the 900x480 landscape crop. object-[64%_center] frames the shield.
    mobile: '/assets/identidade/fundo-site-0-desktop.webp',
    width: 1717,
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
      src: '/assets/identidade/perfil-luiz.webp',
      width: 720,
      height: 793,
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
      width: 175,
      height: 200,
    },
    {
      name: 'Ohana',
      src: '/assets/cases/ohana.webp',
      width: 332,
      height: 136,
    },
    {
      name: 'Mimo Power',
      src: '/assets/cases/mimo-power.webp',
      width: 578,
      height: 200,
    },
  ],
} as const;
