import React, { createContext, useContext, useState } from 'react'
import { translations } from '../utils/i18n'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {

  const [locale, setLocal] = useState("en")

  function toggleLanguage() {
    setLocal(prev => prev === "en" ? "ur" : "en")
  }

  function t(key) {
    return translations[locale][key]
  }

  return (
    <div>
      <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </div>
  )
}

function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}

export { useLanguage, LanguageProvider }