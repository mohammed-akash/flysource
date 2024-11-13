import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next with LanguageDetector
i18n
    .use(LanguageDetector) // Detect language from browser settings
    .use(initReactI18next) // Integrate with React
    .init({
        debug: true,
        fallbackLng: 'en', // Default language if detection fails
        resources: {
            en: {
                translation: {
                    landingH2: 'EASY & FAST SOURCING',
                },
            },
            // Add other languages as needed
            es: {
                translation: {
                    landingH2: 'SOURCING FÁCIL Y RÁPIDO',
                },
            },
        },
    });

export default i18n;
