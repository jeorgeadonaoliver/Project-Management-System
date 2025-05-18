import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import  ModalProviders from "./context/modal-provider"

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <QueryClientProvider client={new QueryClient()}>
      <ModalProviders>
        <App />
      </ModalProviders>
    </QueryClientProvider>
  </StrictMode>
)
