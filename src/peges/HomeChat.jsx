import Hedermain from "../Components/Hedermain";
import SagestItem from "../components/SagestItem";
import iconsend from "../assets/iconsend.svg"
import { useState } from "react";
import MessageList from "../components/MessageList";

function HomeChat() {
  
    const [invalue ,setinvalue]=useState("");
    const [Sageshandler ,setSageshandler]=useState(true);
    const [messages, setMessages] = useState([]); 
   
    
    const handleSendMessage = async()=>{
        if(invalue.length != 0){
        setSageshandler(false);
        const userMessage = { text: invalue, sender: 'user' };  
      setMessages((messages) => [...messages, userMessage]);  

      // Simulate an AI response  
      const aiResponse = await getAIResponse(invalue);  
      const botMessage = { text: aiResponse, sender: 'bot' };  
      setMessages((messages) => [...messages, botMessage]);  
        }
        setinvalue(''); 
    }

    const getAIResponse = async (message) => {  
        // Mock response for demonstration purpose  
        return new Promise((resolve) => {  
          setTimeout(() => {  
            resolve(`You said: ${message}`);  
          }, 1000);  
        });  
      }; 

  return (
    <>
    <div>
         <Hedermain idpage={'homechat'}/>
         {Sageshandler && (  
                <div className="flex flex-col justify-center items-center pt-12 gap-8">  
                    <h2 className="font-semibold text-base">How can I help you, my friend? 😊️</h2>  
                    <div className="flex flex-col gap-4 px-4 mb-">  
                        <SagestItem Title="Brainstorm names" description="for my fantasy football team with a frog theme" />  
                        <SagestItem Title="Suggest some codenames" description="for a project introducing flexible work arrangements" />  
                        <SagestItem Title="Write a SQL query" description="that adds a 'status' column to an 'orders' table" />  
                        <SagestItem Title="Explain why popcorn pops" description="to a kid who loves watching it in the microwave" />  
                    </div>  
                </div>  
            )} 
            
                <MessageList massages={messages}/>
    
   










                <div className="absolute bottom-7 px-6 mt-9 w-full">
                    <div className="flex items-center  p-4 rounded-lg shadow-md">  
                            <input  value={invalue}   onKeyDown={(e) => {  
                                                if (e.key === 'Enter') {  
                                                    handleSendMessage();  
                                                }  
                                                }}  onChange={(e)=>setinvalue(e.target.value)} type="text" placeholder="Ask me anything..." className=" w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400" />  
                            <button      onClick={handleSendMessage} className="ml-2 flex items-center justify-center  rounded-full">  
                            <img src={iconsend} alt="" />
                            </button>  
                    </div>
                </div>


    </div>
    </>
  )
}

export default HomeChat
