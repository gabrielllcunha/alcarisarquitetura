export const SITE = {
  name: 'ALCARIS',
  suffix: 'Arquitetura',
  fullName: 'ALCARIS Arquitetura',
  url: 'https://alcarisarquitetura.vercel.app',
  founder: 'Alan Carlos',
  whatsapp: {
    number: '5545998022377',
    display: '45 99802-2377',
  },
  social: {
    instagram: 'https://www.instagram.com/alcarisarquitetura/',
  },
  email: 'ac.arquitetosassociados@gmail.com',
  location: {
    city: 'Toledo',
    region: 'PR',
    regionName: 'Paraná',
    country: 'BR',
    countryName: 'Brasil',
  },
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
  { href: '#about', labelKey: 'nav.about' },
  { href: '#services', labelKey: 'nav.services' },
  { href: '#portfolio', labelKey: 'nav.portfolio' },
  { href: '#process', labelKey: 'nav.process' },
  { href: '#contact', labelKey: 'nav.contact' },
];

export const ABOUT_HIGHLIGHTS = [
  { value: '50+', labelKey: 'about.highlights.projects' },
];

export const SERVICE_IDS = ['architectural', 'interiors', 'furniture', 'consulting'];

export const PROCESS_STEPS = [
  { step: '01', id: 'survey' },
  { step: '02', id: 'briefing' },
  { step: '03', id: 'preliminary' },
  { step: '04', id: 'schematic' },
  { step: '05', id: 'executive' },
  { step: '06', id: 'advisory' },
];

export const getWhatsAppUrl = (message) => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${text}`;
};
