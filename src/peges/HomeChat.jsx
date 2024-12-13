import Hedermain from "../Components/Hedermain.jsx";
import SagestItem from "../components/SagestItem";
import iconsend from "../assets/iconsend.svg"
import { useState,useEffect } from "react";
import MessageList from "../components/MessageList";
import { useParams } from "react-router-dom";
import data from '../data.json';
function HomeChat() {
    let {id} =useParams()
    const [invalue ,setinvalue]=useState("");
    const [Sageshandler ,setSageshandler]=useState(true);
    const [messages, setMessages] = useState([]); 
  
    const handleSendMessage = async()=>{
        if(invalue.length !== 0){
        setSageshandler(false);
        const userMessage = { text: invalue, sender: 'user' };  
      setMessages((messages) => [...messages, userMessage]); 
      const aiResponse = await getAIResponse(invalue);  
      const botMessage = { text: aiResponse, sender: 'bot' };  
      setMessages((messages) => [...messages, botMessage]);  
        }
        setinvalue(''); 
    }

    const getAIResponse = async (message) => {  
        
        return new Promise((resolve) => {  
         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${message}`).then((res)=>res.json()).then((data)=>{
          let resalt =data[0]
            resalt.meanings.map((meaning) =>(
            resolve(meaning.definitions[0]?.definition)
          ) );
         }).catch(()=>{
          resolve('I cant help you, please enter the correct word!!')
         }) 
        });  
      }; 
      
    useEffect(() => {  
      if(id != 0 && id != undefined){
        setSageshandler(false);
        data.map((record)=>{
          if(record.id == id){
          const userMessage = { text: record.title, sender: 'user' };  
          setMessages((messages) => [...messages, userMessage]);  
          const  botMessage = { text: record.content, sender: 'bot' };  
          setMessages((messages) => [...messages, botMessage]);  }

        })} 
        id = ""
    }, [id]); 

  return (
    <>
    <div>
      <Hedermain  idpage={'homechat/'}/>
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
            <div className="overflow-y-auto ">
            <MessageList massages={messages}/>
            </div>

                <div className="fixed bottom-4  px-6 mt-7 w-full">
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
