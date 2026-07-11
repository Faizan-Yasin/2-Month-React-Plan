import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { useUser } from '../../context/UserContext'

const Navbar = () => {

  const { theme, toggleTheme } = useTheme()
  const { locale, toggleLanguage, t } = useLanguage()
  const { user } = useUser()

  return (
    <div>
      <nav className='flex justify-between items-center p-4 shadow'>
        <h1 className='text-sm md:text-xl font-bold'>{t("welcome")} {" "} {user.name}</h1>
        <h1 className='text-sm md:text-2xl font-bold'>{t("dashboard")}</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded active:scale-95 cursor-pointer' onClick={toggleLanguage}>{locale === "en" ? "English" : "Urdu"}</button>
      </nav>
    </div>
  )
}

export default Navbar
