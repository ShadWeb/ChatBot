import iconarrleft from "../assets/Iconarleft.svg"
import iconright from "../assets/Icon Right.svg"
import iconavata from "../assets/Avatarsuser.svg"
import iconaros from "../assets/iconaros.svg"
import { useState } from "react"
import AccountModal from "../Components/AccountModal"
import ThemeModal from "../Components/ThemeModal"
import StorageModal from "../Components/StorageModal"
import { useNavigate, useParams } from "react-router-dom"
export default function AiSetingPorofile() {
const [Accountmodalhandel ,setAccountmodal]=useState(false)
const Closehandelmodal =()=> setAccountmodal(false);
const [Themehandelmodal ,setThemehandelmodal]=useState(false)
const CloseThemehandelmodal =()=> setThemehandelmodal(false);
const [Storagehandelmodal ,setStoragehandelmodal]=useState(false)
const CloseStoragehandelmodal =()=> setStoragehandelmodal(false);
const {idpage} = useParams();
const navigate = useNavigate();

  return (
    <div>

       <AccountModal visible={Accountmodalhandel} onClose={Closehandelmodal} />
        <ThemeModal onClose={CloseThemehandelmodal} visible={Themehandelmodal}/>
        <StorageModal onClose={CloseStoragehandelmodal} visible={Storagehandelmodal}/>


        <div className="flex items-center justify-between py-3 px-4 ">
            <div className="flex items-center gap-3">
                <img onClick={()=> navigate(`/${idpage}/`)} src={iconarrleft} alt="" />
                <h2 className="font-semibold text-xl">Profile & Settings</h2>
            </div>
            <img src={iconright} alt="" />
        </div>


        <div className="w-full flex justify-center items-center mt-[64px]">
            <div className="flex flex-col items-center gap-6">
                <img src={iconavata} alt="" />
                <h1 className="font-bold text-2xl">Reza Alavi</h1>
            </div>
        </div>

        <div className="mt-12">
            <div onClick={()=>setAccountmodal(true)} className="flex items-center justify-between border-b p-6">
                <h2 className="font-medium text-lg">Email</h2>
                <div className="flex ">
                <span className="font-normal text-base text-[#01CD98]">r.alava@gmail.com</span> 
                <img src={iconaros} alt="" />
                </div>
            </div>
            <div onClick={()=>setThemehandelmodal(true)} className="flex items-center justify-between border-b p-6">
                <h2 className="font-medium text-lg">Theme</h2>
                <div className="flex ">
                <span className="font-normal text-base ">System default</span> 
                <img src={iconaros} alt="" />
                </div>
            </div>
            <div onClick={()=>setStoragehandelmodal(true)} className="flex items-center justify-between border-b p-6">
                <h2 className="font-medium text-lg">Data & storage</h2>
                <div className="flex ">
                <span className="font-normal text-base ">28% Used</span> 
                <img src={iconaros} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between border-b p-6">
                <h2 className="font-medium text-lg">Change password</h2>
                <div className="flex ">
                <img src={iconaros} alt="" />
                </div>
            </div>
            <div className="flex items-start justify-between  p-6">
          
                <div className="flex flex-col ">
                <h2 className="font-medium text-lg">Send feedback</h2>
                <span className="font-normal text-sm ">Chatbot AI can make mistakes. Consider checking important information and send us your feedback</span>
                </div>
                <img src={iconaros} alt="" />
               
            </div>
           
        </div>

        <div className="flex flex-col items-center mt-[88px]">
            <h2 className="font-normal text-sm text-[#616161]">Chat Bot AI - Version 2.0.5</h2>
            <div>
                <span className="font-normal text-sm text-[#616161] px-4 border-r border-[#616161]">Terms of use</span>
                <span className="font-normal text-sm text-[#616161] px-4">Privacy policy</span>
            </div>
        </div>



    </div>
  )
}
