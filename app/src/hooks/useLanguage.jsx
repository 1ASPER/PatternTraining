import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const useLanguage = () => {
  return useContext(LanguageContext);
};

export default useLanguage;