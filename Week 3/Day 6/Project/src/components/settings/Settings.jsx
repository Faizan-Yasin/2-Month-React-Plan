import React from 'react'
import { useNotification } from '../../context/NotificationContext'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'

const Settings = () => {

  const { addNotification } = useNotification()
  const { theme, toggleTheme } = useTheme()
  const { locale, toggleLanguage, t } = useLanguage()

  function handleSave() {

    addNotification("Settings Saved");

  }

  return (
    <div className='max-w-xl space-y-8'>
      <h1 className='text-3xl font-bold'>{t("settings")}</h1>

      <div className='space-y-3'>
        <h2 className='text-lg font-semibold'>{t("theme")}</h2>
        <button onClick={toggleTheme}
          className={`cursor-pointer w-16 h-8 rounded-full transition-all duration-300 relative
        ${theme === "light"
              ? "bg-gray-300"
              : "bg-blue-600"
            }`}>
          <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-all duration-300
            ${theme === "dark"
              ? "translate-x-8"
              : ""
            }`} />
        </button>
      </div>

      <div className='space-y-3'>
        <h2 className='text-lg font-semibold'>{t("language")}</h2>
        <button onClick={toggleLanguage}
          className='cursor-pointer px-5 py-3 rounded-lg bg-green-600 text-white'>
          {locale === "en" ? "English" : "اردو"}
        </button>
      </div>

      <button onClick={handleSave}
        className='cursor-pointer px-6 py-3 rounded-lg bg-black text-white'
      >{t("save")}</button>

    </div>
  )
}

export default Settings
