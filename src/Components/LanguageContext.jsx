import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
