import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FirstSteps from './FirstSteps.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstSteps />
  </StrictMode>,
)
