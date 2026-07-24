import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';

export const STORAGE_KEY = 'alcaris-language';

const normalizeLanguage = (language) => {
  if (!language) return 'pt';
  if (language.startsWith('en')) return 'en';
  if (language.startsWith('pt')) return 'pt';
  return 'pt';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: ptBR },
    },
    lng: undefined,
    fallbackLng: 'pt',
    supportedLngs: ['en', 'pt'],
    nonExplicitSupportedLngs: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
      convertDetectedLanguage: normalizeLanguage,
    },
  });

i18n.on('initialized', () => {
  const normalizedLanguage = normalizeLanguage(i18n.language);
  if (normalizedLanguage !== i18n.language) {
    i18n.changeLanguage(normalizedLanguage);
  }
});

const upsertMetaTag = (attribute, key, content) => {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const syncDocumentLanguage = (language) => {
  const normalizedLanguage = normalizeLanguage(language);
  const title = i18n.t('meta.title');
  const description = i18n.t('meta.description');

  document.documentElement.lang = normalizedLanguage === 'en' ? 'en' : 'pt-BR';
  document.title = title;

  upsertMetaTag('name', 'description', description);
  upsertMetaTag('property', 'og:title', title);
  upsertMetaTag('property', 'og:description', description);
  upsertMetaTag('property', 'og:locale', normalizedLanguage === 'en' ? 'en_US' : 'pt_BR');
  upsertMetaTag('name', 'twitter:title', title);
  upsertMetaTag('name', 'twitter:description', description);
};

i18n.on('languageChanged', syncDocumentLanguage);
syncDocumentLanguage(i18n.resolvedLanguage || i18n.language);

export default i18n;
