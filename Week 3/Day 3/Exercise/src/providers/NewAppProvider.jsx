import React from 'react'
import { ThemeProvider } from '../context/ThemeContext.jsx'
import { UserProvider } from '../context/UserContext.jsx'
import { AppProvider } from '../context/AppContext.jsx'
import { NotificationProvider } from '../context/NotificationContext.jsx'

const NewAppProvider = ({ children }) => {
    return (
        <div>
            <UserProvider>
                <ThemeProvider>
                    <NotificationProvider>
                        {/* <AppProvider> */}
                        {children}
                        {/* </AppProvider> */}
                    </NotificationProvider>
                </ThemeProvider>
            </UserProvider>
        </div>
    )
}

export default NewAppProvider
