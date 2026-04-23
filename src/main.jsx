import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Routes.jsx'
import { RouterProvider } from 'react-router/dom'
import InstalledAppsProvider from './context/InstalledAppsProvider.jsx'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppsProvider >
      <RouterProvider router={router} />
      <ToastContainer/>
    </InstalledAppsProvider>
  </StrictMode>,
)
