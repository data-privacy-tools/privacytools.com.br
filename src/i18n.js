import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import pt_BR from './locales/ptBR'
import en from './locales/en'

i18n
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            ...pt_BR,
            ...en
        },
        fallbackLng: "pt_BR",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
