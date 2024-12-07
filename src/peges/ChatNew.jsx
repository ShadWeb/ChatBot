import Hedermain from "../Components/Hedermain";
import iconsend from "../assets/iconsend.svg"
export default function ChatNew() {
  return (
    <div>
    <Hedermain/>
    <main className="flex flex-col justify-between">
    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit minima necessitatibus, voluptatem cum ipsa accusamus consectetur cumque blanditiis ad rem est! Alias aperiam ipsa ullam, natus reprehenderit rem quasi.</div>
    <div>
    
    </div>
    </main>
    <div className="px-6 mt-auto">
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
