import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import Router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
