import iconchat from '../assets/chaticon.svg'
import iconhamber from '../assets/Hamburger menu 3.svg'
import iconexport from '../assets/Iconexport.svg'
function Hedermain() {
  return (
    <nav className='flex py-6 px-4 justify-between border-b '>
        <div className='flex gap-3'>
        <button><img src={iconhamber} alt="" /></button> 
        <div className='flex items-center gap-4'><img src={iconchat} alt="" /> <span className='font-semibold text-xl
        '>GPT 4o</span></div>
        </div>
       
         <button><img src={iconexport} alt="" /></button>
    </nav>
  )
}

export default Hedermain
