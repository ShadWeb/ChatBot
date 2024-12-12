import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PeageLogin from "./peges/PeageLogin"
import Home from './peges/Home'
import HomeChat from './peges/HomeChat'
import Seting from './peges/Seting'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='*' element={<PeageLogin/>}/>
     <Route path='/home/' element={<Home/>}/>
     <Route path='/homechat/:id' element={<HomeChat/>}/>
     <Route path='/homechat/' element={<HomeChat/>}/>
     <Route path='/seting/:idpage' element={<Seting/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
