export const SITE = {
  name: 'Impulso X Intelligence',
  shortName: 'Impulso X',
  tagline: 'O time de IA da sua empresa. IA por dentro, resultado por fora.',
  description:
    'A Impulso X é o time de IA da sua empresa: diagnóstico gratuito primeiro, e o time entra pelo que o negócio mais precisa — atendimento, operação interna, dados ou presença digital. IA por dentro, resultado por fora.',
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
    'Olá! Quero o diagnóstico gratuito da Impulso X para mapear o gargalo prioritário do meu negócio.',
  solutions:
    'Olá! Quero entender como a Impulso X entra como time de IA na minha empresa: atendimento, operação, dados e presença.',
};

export const WHATSAPP_URL = (message?: string, phoneE164: string = SITE.whatsappE164) => {
  const base = `https://wa.me/${phoneE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
