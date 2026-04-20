import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomePage from './pages/homePage/HomePage.jsx'
import Apps from './pages/apps/Apps.jsx'
import InstalledApps from './pages/installedApps/InstalledApps.jsx'
import RootLayout from './layout/RootLayout.jsx'
import NotFoundPage from './pages/notFoundPage/NotFoundPage.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/apps',
        element: <Apps/>
      },
      {
        path: '/InstalledApps',
        element: <InstalledApps/>
      }
    ],
    errorElement: <NotFoundPage/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
