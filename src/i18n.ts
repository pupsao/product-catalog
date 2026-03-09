import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en/translation.json';
import uk from './assets/locales/uk/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
