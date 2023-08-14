import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from "react-i18next";
import ConsultCopy from "./translations/consult";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    resources: { 
      en: { 
        ...ConsultCopy?.en
      }, 
      fr: { 
        ...ConsultCopy?.fr
      },
      pl: { 
        ...ConsultCopy?.pl
      },
      ja: { 
        ...ConsultCopy.ja
      }
    }
  });

export default i18n;


export function getLanguage() {
  return 'en' || window.navigator.language;
}