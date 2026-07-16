import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import { EmployeeProvider } from '../context/EmployeeContext'
import { ThemeProvider } from '@/context/ThemeContext'

const AppProvider = ({ children }) => {
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <EmployeeProvider>
                        <ThemeProvider>
                            {children}
                        </ThemeProvider>
                    </EmployeeProvider>
                </AuthProvider>

            </BrowserRouter>
        </div>
    )
}

export default AppProvider
