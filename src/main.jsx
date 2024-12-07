import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PeageLogin from './peges/PeageLogin.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Chatmain from './peges/Chatmain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<PeageLogin/>}/>
      <Route path='/app' element={<App/>}/>
      <Route path='/Chatmain' element={<Chatmain/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
