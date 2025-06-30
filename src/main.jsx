import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './Main-layout/MainLayout.jsx'
import { RouterProvider } from 'react-router'
import route from './Routes/public-route/route.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}>
        <MainLayout />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
