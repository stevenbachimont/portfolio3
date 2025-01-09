// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./translations/en.json";
import frTranslations from "./translations/fr.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations
            },
            fr: {
                translation: frTranslations
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
        },
        react: {
            useSuspense: false
        }
    });

i18n.on('languageChanged', (lng) => {
    console.log('Langue changée vers:', lng);
});

export default i18n;