// src/i18.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import uz from './uz.json'
import ru from './ru.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
    },
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
