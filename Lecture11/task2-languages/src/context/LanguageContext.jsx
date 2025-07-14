import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    title: "Welcome",
    button: "Click Me",
    language: "Language",
  },
  es: {
    title: "Bienvenido",
    button: "Haz clic",
    language: "Idioma",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  const text = translations[language];

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, text }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

// eslint-disable-next-line react-refresh/only-export-components
export { LanguageProvider, useLanguage };
