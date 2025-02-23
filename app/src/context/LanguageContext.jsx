import { createContext, useState, useContext } from "react";
import en from "../translations/en.json";
import ru from "../translations/ru.json";


const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translations = { en, ru };
  const toggleLanguage = () => setLanguage(language === "en" ? "ru" : "en");

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};