import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"
import spanishTranslation from "../locales/es/translation.json";
import englishTranslation from "../locales/en/translation.json";

i18next
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
    fallbackLng:"en",
    resources: {
        es: {
            translation:spanishTranslation
        },
        en: {
            translation:englishTranslation
        }
    }
} );