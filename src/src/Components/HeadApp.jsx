import { useNavigate } from 'react-router-dom'
import aroicon from  '../assets/Arrow - Right 3.svg'
import avaicon from  '../assets/Avatars.svg'
import chaticon from  '../assets/chat1.svg'
import plusicon from  '../assets/Plus.svg'

export default function HeadApp() {
    const navigate = useNavigate();
const Newtopichandler=()=>{
navigate('/Chatmain' );
}


  return (
    <header className='border-b '>
        <div className='flex justify-between items-center py-3 px-6'>
            <div className='flex justify-between items-center gap-6'>
                <img src={aroicon} alt="" />
                <h2 className='font-semibold text-xl text-[#051320]'>Back</h2>
            </div>
             <img src={avaicon} alt="" />
        </div>
        <div className='p-6'>
            <div className='flex flex-col'>
                <h1 className=' font-semibold text-3xl text=[#051320] '>Start a new chat   </h1>
                <span className='flex gap-3 items-center font-semibold text-3xl text=[#051320] '>With<img className='w-[40px] h-[40px]' src={chaticon} alt="" /></span> 
            </div>
            <div className='flex items-center gap-4 '>
                <h2 className='flex gap-3 items-center font-semibold text-3xl bg-gradient-to-r from-black to-teal-500 bg-clip-text text-transparent text-nowrap'>Chat bot AI</h2>
                <button onClick={Newtopichandler} className='flex items-center justify-center py-2 px-4 bg-[#01CD98] rounded-full text-nowrap text-white'>
                    <img src={plusicon} alt="" />New Topic
                </button>
            </div>
        </div>
    </header>
  )
}
