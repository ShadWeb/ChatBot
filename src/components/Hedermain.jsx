import { useNavigate } from 'react-router-dom'
import iconchat from '../assets/chaticon.svg'
import iconhamber from '../assets/Hamburger menu 3.svg'
import iconexport from '../assets/Iconexport.svg'
import { useState } from 'react'
import ExportModal from './modal/ExportModal'
import PropTypes from 'prop-types';
function Hedermain({idpage}) {
  const [modalvisibel, setmodavisible] = useState(false);
  const Closehandelmodal =()=> setmodavisible(false);
const navigate = useNavigate();
const hamberhandler =()=>{
  navigate(`/seting/${idpage}`);
}


  return (
    <nav className='flex  py-6 px-4 justify-between border-b '>
        <div className='flex gap-3'>
        <button onClick={hamberhandler}><img src={iconhamber} alt="" /></button> 
        <div className='flex items-center gap-4'><img src={iconchat} alt="" /> <span className='font-semibold text-xl
        '>GPT 4o</span></div>
        </div>
       
         <button onClick={()=>setmodavisible(true)}><img src={iconexport} alt="" /></button>

      <ExportModal onClose={Closehandelmodal} visible={modalvisibel}/>


    </nav>
  )
}
Hedermain.propTypes ={
    idpage:PropTypes.node,
}
export default Hedermain