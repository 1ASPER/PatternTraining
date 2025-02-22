import React, { createContext, useState } from "react";
import en from "../translation/eng.json";
import ru from "../translation/ru.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translations = language === "en" ? en : ru;

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "ru" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};