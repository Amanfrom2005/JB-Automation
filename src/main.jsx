import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FormspreeProvider } from '@formspree/react'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FormspreeProvider project="mwpnwyqp">
      <ToastContainer position="top-center" autoClose={4000} closeOnClick pauseOnHover />
      <App />
    </FormspreeProvider>
  </BrowserRouter>,
)
