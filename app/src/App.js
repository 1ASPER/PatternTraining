import UserPanelContainer from "./components/UserPanel/UserPanelContainer";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { LikesProvider } from "./context/LikesContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LikesProvider>
          <div className="layout">
            <UserPanelContainer />
          </div>
        </LikesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;