import { useState } from 'react'
import { createRoot } from 'react-dom/client' 
import './App.css'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeUi from './views/HomeUi'
import LoginUi from './views/LoginUi'
import ContactUi from './views/ContactUi'
import AboutUi from './views/AboutUi'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeUi />} />
        <Route path="/login" element={<LoginUi />} />
        <Route path="/contact" element={<ContactUi />} />
        <Route path="/about" element={<AboutUi />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
