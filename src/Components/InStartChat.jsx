import iconsend from "../assets/iconsend.svg"

export default function InStartChat() {
  return (
    <div className="px-6 mt-9">
          <div className="flex items-center p-4 rounded-lg shadow-md">  
                <input type="text" placeholder="Ask me anything..." className="flex-grow p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400" />  
                <button className="ml-2 flex items-center justify-center  rounded-full">  
                <img src={iconsend} alt="" />
                </button>  
         </div>
    </div>
  )
}
