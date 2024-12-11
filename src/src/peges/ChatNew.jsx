import ChatUser from "../Components/ChatUser";
import Hedermain from "../Components/Hedermain";
import MassegeBot from "../Components/MassegeBot";
import iconsend from "../assets/iconsend.svg";
import {useParams} from 'react-router-dom';
import data from '../data.json';
import { useState,useEffect } from "react";

export default function ChatNew() {
  const { text, New } = useParams();  
  const [Chathandel, setChathandle] = useState(false);  

gg(text)
  async function gg(inputtext) {
    
    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: `${inputtext}`,
        source: "auto",
        target: "en",
      }),
      headers: { "Content-Type": "application/json" },
    });
    
    console.log(await res.json());
  



  }

  useEffect(() => {  
    if (New === "true") {  
      setChathandle(true);  
    }  
  }, [New]);  

  if (Chathandel) {
    return (
      <div>
      <Hedermain idpage={'ChatNew'}/>
      <main className="flex flex-col justify-between">
        
          <div>
            <ChatUser textuser={text}/>
          </div>

            <div>
              <MassegeBot />

          </div>
    
      </main>
          <div className="px-6 absolute bottom-8 w-full">
                <div className="flex items-center p-4 rounded-lg shadow-md">  
                      <input  type="text" placeholder="Ask me anything..." className="flex-grow p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400" />  
                      <button   className="ml-2 flex items-center justify-center  rounded-full">  
                      <img src={iconsend} alt="" />
                      </button>  
              </div>
          </div>
    </div>
    )
  }else{
    return (

        <div>
        <Hedermain idpage={'ChatNew'}/>

          {
            data.map( (record)=>{
              if(record.id == text){
                  return(
                  <main  key={record.id} className="flex flex-col justify-between">
                    <div>
                        <ChatUser textuser={record.title}/>
                      </div>
            
                        <div>
                          <MassegeBot massege={record.content} />
            
                      </div>
                      </main>
                  )
              }})
              }

            <div className="px-6 absolute bottom-8 w-full">
                  <div className="flex items-center p-4 rounded-lg shadow-md">  
                        <input   type="text" placeholder="Ask me anything..." className="flex-grow p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400" />  
                        <button   className="ml-2 flex items-center justify-center  rounded-full">  
                        <img src={iconsend} alt="" />
                    
                        </button>  
                </div>
            </div>
        </div>
    )
  }
  
  
 
}
