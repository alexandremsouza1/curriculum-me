import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import ptCommon from './translations/pt/common.json';
import enCommon from './translations/en/common.json';

i18n
  // Detect language from URL query parameter, localStorage, or default to PT
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Default language
    fallbackLng: 'pt',
    
    // Supported languages
    supportedLngs: ['pt', 'en'],
    
    // Language detection order
    detection: {
      // Check URL query parameter first: ?lang=EN
      order: ['querystring', 'localStorage', 'navigator', 'fallback'],
      // Query parameter to look for
      lookupQuerystring: 'lang',
      // Cache the detected language
      caches: ['localStorage'],
    },
    
    // Translation resources
    resources: {
      pt: {
        common: ptCommon,
      },
      en: {
        common: enCommon,
      },
    },
    
    // Namespace configuration
    ns: ['common'],
    defaultNS: 'common',
    
    // Interpolation options
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // React options
    react: {
      useSuspense: false, // Disable suspense for better compatibility
    },
  });

export default i18n;