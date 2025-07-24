import React from "react";
import { useTranslation } from "react-i18next";
import uzb from "../assets/uzb.png"; // O'zbekiston bayrog'i
import ru from "../assets/rus.webp"; // Rossiya bayrog'i

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Globe icon */}

      {/* O'zbekcha */}
      <button
        onClick={() => changeLanguage("uz")}
        className={`px-3 py-1 rounded-md flex items-center gap-2 hover:bg-blue-100 transition ${
          i18n.language === "uz" ? "bg-blue-200 font-semibold" : "bg-gray-100"
        }`}
      >
        <img src={uzb} alt="O'zbekcha" className="w-5 h-5 rounded-sm" />
        <span>UZ</span>
      </button>

      {/* Ruscha */}
      <button
        onClick={() => changeLanguage("ru")}
        className={`px-3 py-1 rounded-md flex items-center gap-2 hover:bg-gray-100 transition ${
          i18n.language === "ru" ? "bg-gray-300 font-semibold" : "bg-gray-100"
        }`}
      >
        <img src={ru} alt="Русский" className="w-5 h-5 rounded-sm" />
        <span>RU</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
