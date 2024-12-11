import Chatbotmassegeicon from "../assets/Chatbotmassege.svg";
import iconedit from "../assets/edit.svg"
import iconcopy from "../assets/copy.svg"
export default function MassegeBot({massege}) {
    
    
  return (
    <div className="flex py-6 px-6 flex-col gap-4">
      <div className="flex items-center gap-3">
      <img src={Chatbotmassegeicon} alt="" />
        <h2 className="font-semibold text-base">Chat Bot AI</h2>
        </div>
      <div><p className="font-normal text-sm"> {massege}</p></div>
      <div className="flex items-center gap-6">
                <span className="flex gap-2 items-center font-medium text-sm text-[#616161]"><img src={iconedit} alt="" />Edit</span>
                <span className="flex gap-2 items-center font-medium text-sm text-[#616161]"><img src={iconcopy} alt="" />Copy</span>
            </div>
    </div>
  )
}
