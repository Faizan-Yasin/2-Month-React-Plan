import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'
import { UserProvider } from '../context/UserContext'
import { NotificationProvider } from '../context/NotificationContext'

const AppProviders = ({ children }) => {
  return (
    <div>
      <ThemeProvider>
        <LanguageProvider>
          <UserProvider>
            <NotificationProvider>
              {children}
            </NotificationProvider>
          </UserProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
}

export default AppProviders
