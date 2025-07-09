import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardTab from './CardTab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardTab />
  </StrictMode>,
)
