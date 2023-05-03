import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import  LanguageDetector  from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "ru"],
    backend: {
      loadPath: "/assets/i18n/{{lng}}.json",
    },
    detection: {
      order: [ "sessionStorage", "cookie",  "htmlTag"],
      caches: ["cookie"]
    },
    fallbackLng: "en",
  })

export default i18n
