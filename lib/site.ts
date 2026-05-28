export const SITE = {
  name: 'Impulso X Intelligence',
  shortName: 'Impulso X',
  tagline: 'Inteligência aplicada para empresas que crescem com estrutura.',
  url: 'https://www.impulsox.com.br',
  whatsappE164: '5511939505573',
  whatsappDisplay: '(11) 93950-5573',
  instagram: 'https://www.instagram.com/impulsoxbr',
  tiktok: 'https://www.tiktok.com/@impulsoxbr',
};

export const WHATSAPP_URL = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
