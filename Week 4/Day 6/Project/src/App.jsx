import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify';
import "./styles/toast.css";
import { useTheme } from './hooks/useTheme';

const App = () => {

  const { theme } = useTheme()

  return (
    <div className={`${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"} min-h-screen`}>
      <AppRoutes />
      <ToastContainer
        className="custom-toast-container" />
    </div>
  )
}

export default App
