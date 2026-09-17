import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './week1/Callback'
import UseMemoShop from './week1/UseMemoJB'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseMemoShop />
  </StrictMode>
)
