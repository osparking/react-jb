import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContext from './week1/react_context/AppContext'
import UseRefEx from './week2/UseRefEx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppContext /> */}
    <UseRefEx />
  </StrictMode>
)
