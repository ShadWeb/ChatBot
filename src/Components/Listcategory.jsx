import iconchat from '../assets/Vectorchat.svg'
import icoarchived from '../assets/archived.svg'
import iconimages from '../assets/images.svg'
import Cardhistory from './Cardhistory'
export default function Listcategory() {




    
  return (
    <div className='flex flex-col gap-6 px-2'>
        <div className='overflow-x-scroll flex gap-4 '>
            <button className='flex items-center w-[122px] text-white bg-[#051320] rounded-full py-3 px-6 gap-2'>
                <img src={iconchat} alt="" />
                <span>Chats</span>
            </button>
            <button className='flex items-center text-[#616161] border border-[#EBEDEC] rounded-full py-3 px-6 gap-2 w-[122px]'>
                <img src={icoarchived} alt="" />
                <span>Archived</span>
            </button>
            <button className='flex items-center text-[#616161] border border-[#EBEDEC]  rounded-full py-3 px-6 gap-2 w-[122px]'>
                <img src={iconimages} alt="" />
                <span>Images</span>
            </button>
        </div>
        <div className='flex flex-wrap justify-center  gap-4'>
         <Cardhistory/>
         <Cardhistory/>
         <Cardhistory/>
         <Cardhistory/>
        </div>
    </div>
  )
}
