import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PeageLogin from "./peges/PeageLogin"

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='*' element={<PeageLogin/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
