import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// json
import eng from "./eng.json";
import esp from "./esp.json";

export const languageResources = {
  en: {
    translation: eng,
  },
  es: {
    translation: esp,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: languageResources,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  compatibilityJSON: "v3",
});

export default i18n;
