import ChatUser from "../Components/ChatUser";
import Hedermain from "../Components/Hedermain";
import MassegeBot from "../Components/MassegeBot";
import iconsend from "../assets/iconsend.svg";
import {useParams} from 'react-router-dom';
import { useState } from "react";  

export default function ChatNew() {
  const {text} =useParams();
  const [data, setData] = useState(null); 
   getdata(text);
   async function getdata(value){
    
      if (value !== "") {  
        try {  
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${value}`);  
          const result = await response.json();  
          if (result && result.length > 0) {  
            setData(result[0]); // Update state with the first entry in the array  
            console.log(result[0]); // Log the fetched data  
          } else {  
            setData(null); // Reset data if nothing found  
            console.log("No data found.");  
          }  
        } catch (error) {  
          console.error("Error fetching data:", error);  
          setData(null); // Reset data on error  
        }  
      } 
    
  }
  console.log(data);
  
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
                      <button  className="ml-2 flex items-center justify-center  rounded-full">  
                      <img src={iconsend} alt="" />
                  
                      </button>  
              </div>
          </div>
    </div>
  )
}
