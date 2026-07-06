export const SITE = {
  name: 'Impulso X Intelligence',
  shortName: 'Impulso X',
  tagline: 'Inteligência que atende, qualifica e faz seu cliente voltar.',
  url: 'https://www.impulsox.com.br',
  whatsappE164: '5511939505573',
  whatsappDisplay: '(11) 93950-5573',
  whatsappSecondaryE164: '551151410914',
  whatsappSecondaryDisplay: '(11) 5141-0914',
  instagram: 'https://www.instagram.com/impulsoxbr',
  tiktok: 'https://www.tiktok.com/@impulsoxbr',
  cnpj: '33.753.890/0001-61',
};

export const WHATSAPP_MESSAGES = {
  diagnostic:
    'Olá! Quero o diagnóstico gratuito do meu funil de WhatsApp/Google com a Impulso X.',
  solutions: 'Olá! Quero entender como o agente de IA da Impulso X funciona na minha operação.',
};

export const WHATSAPP_URL = (message?: string, phoneE164: string = SITE.whatsappE164) => {
  const base = `https://wa.me/${phoneE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
