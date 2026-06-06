import { createContext, useContext, useEffect, useState } from "react";
import { CONTENT } from "../data/content.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pl");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = CONTENT[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
