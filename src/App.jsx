import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PeageLogin from "./peges/PeageLogin"
import Home from './peges/Home'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='*' element={<PeageLogin/>}/>
     <Route path='/home/' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
