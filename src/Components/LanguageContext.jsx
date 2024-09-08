import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }) {
  // Check localStorage for stored language preference
  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en'; // Default to English if not set
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === 'en' ? 'ar' : 'en';
      localStorage.setItem('language', newLanguage); // Save to localStorage
      return newLanguage;
    });
  };

  // If the language is updated, save the new language in localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}