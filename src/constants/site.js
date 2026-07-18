export const SITE = {
  name: 'ALCARIS',
  suffix: 'Arquitetura',
  founder: 'Alan Carlos',
  whatsapp: {
    number: '5545998022377',
    display: '45 99802-2377',
  },
  social: {
    instagram: 'https://www.instagram.com/alcarisarquitetura/',
    facebook: 'https://www.facebook.com/alan.gomes.94695',
  },
  email: 'ac.arquitetosassociados@gmail.com',
};

export const BRAND = {
  logos: {
    horizontalTagline: `${process.env.PUBLIC_URL}/assets/brand/alcaris-logo-horizontal-tagline.svg`,
    wordmark: `${process.env.PUBLIC_URL}/assets/brand/alcaris-logo-wordmark.svg`,
    vertical: `${process.env.PUBLIC_URL}/assets/brand/alcaris-logo-vertical.svg`,
    badge: `${process.env.PUBLIC_URL}/assets/brand/alcaris-logo-badge.svg`,
  },
};

export const NAV_LINKS = [
  { href: '#sobre', labelKey: 'nav.about' },
  { href: '#servicos', labelKey: 'nav.services' },
  { href: '#portfolio', labelKey: 'nav.portfolio' },
  { href: '#processo', labelKey: 'nav.process' },
  { href: '#contato', labelKey: 'nav.contact' },
];

export const ABOUT_HIGHLIGHTS = [
  { value: '5+', labelKey: 'about.highlights.experience' },
  { value: '90+', labelKey: 'about.highlights.projects' },
  { value: '100%', labelKey: 'about.highlights.dedication' },
];

export const SERVICE_IDS = ['residential', 'commercial', 'interiors', 'consulting'];

export const PROCESS_STEPS = [
  { step: '01', id: 'briefing' },
  { step: '02', id: 'concept' },
  { step: '03', id: 'executive' },
  { step: '04', id: 'delivery' },
];

export const getWhatsAppUrl = (message) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${text}`;
};
