import React from "react";
import Button from "../Button";
import { useTheme } from "../../context/ThemeContext.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { useLikes } from "../../context/LikesContext.jsx";
import "./UserPanel.css";


const UserPanel = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, translations, toggleLanguage } = useLanguage();
  const { likes, addLike } = useLikes();

  return (
    <div className={`user-panel ${theme}`}>
      <h1>{translations[language].greeting}</h1>
      <p>{translations[language].likes}: {likes}</p>
      <div className="buttons">
        <Button onClick={addLike}>👍 {translations[language].like}</Button>
        <Button onClick={toggleTheme}>{translations[language].toggleTheme}</Button>
        <Button onClick={toggleLanguage}>{translations[language].switchLanguage}</Button>
      </div>
    </div>
    
  );
};

export default UserPanel;