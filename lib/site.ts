export const SITE = {
  name: 'Impulso X Intelligence',
  shortName: 'Impulso X',
  tagline: 'Inteligência que atende, qualifica e faz seu cliente voltar.',
  url: 'https://www.impulsox.com.br',
  whatsappE164: '5511939505573',
  whatsappDisplay: '(11) 93950-5573',
  instagram: 'https://www.instagram.com/impulsoxbr',
  tiktok: 'https://www.tiktok.com/@impulsoxbr',
  cnpj: '33.753.890/0001-61',
};

export const WHATSAPP_MESSAGES = {
  diagnostic:
    'Olá! Quero o diagnóstico gratuito da minha operação de atendimento e presença digital com a Impulso X.',
  solutions: 'Olá! Quero entender como a Impulso X pode instalar inteligência na minha operação.',
};

export const WHATSAPP_URL = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
