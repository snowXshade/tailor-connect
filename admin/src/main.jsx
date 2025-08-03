import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import AdmincontextProvider from './context/AdminContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import TailorContextProvider from './context/TailorContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdmincontextProvider>
      <TailorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </TailorContextProvider>
    </AdmincontextProvider>
  </BrowserRouter>,
)
