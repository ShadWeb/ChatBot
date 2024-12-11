import { useNavigate } from "react-router-dom"
import iconsend from "../assets/iconsend.svg"
import { useState } from "react";

export default function InStartChat() {
const navigate = useNavigate();
const [invalue ,setinvalue]=useState("");
const inputvluehandel = (e)=>{
setinvalue(e.target.value);
console.log(invalue);

}

const NewChatStartbtnsend = ()=>{
    if(invalue.length != 0){
      const text=invalue;
        navigate(`/ChatNew/${text}/${true}`);
    }
    
}

    
  return (
    <div className="absolute bottom-9 px-6 mt-9 w-full">
          <div className="flex items-center  p-4 rounded-lg shadow-md">  
                <input onChange={inputvluehandel} type="text" placeholder="Ask me anything..." className=" w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400" />  
                <button onClick={NewChatStartbtnsend} className="ml-2 flex items-center justify-center  rounded-full">  
                <img src={iconsend} alt="" />
                </button>  
         </div>
    </div>
  )
}
