import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewAppProvider from './providers/NewAppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewAppProvider>
      <App />
    </NewAppProvider>
  </StrictMode >,
)
