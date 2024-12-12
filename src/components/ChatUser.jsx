import avatauserinchat from "../assets/Avatarsuser.svg"
import iconedit from "../assets/edit.svg"
import iconcopy from "../assets/copy.svg"
import PropTypes from 'prop-types';
export default function ChatUser({textuser}) {
  return (
    <div>
      <div className="flex flex-col items-start gap-4 p-6 border-b">
        <h2 className="font-semibold text-base flex gap-3">
            <img className="w-6 h-6" src={avatauserinchat} alt="" />You</h2>
            <p className="font-normal text-base text-[#01CD98]">{textuser} </p>
            <div className="flex items-center gap-6">
                <button  className="flex gap-2 items-center font-medium text-sm text-[#616161]"><img src={iconedit} alt="" />Edit</button>
                <button onClick={()=>{navigator.clipboard.writeText(textuser)}} className="flex gap-2 items-center font-medium text-sm text-[#616161]"><img src={iconcopy} alt="" />Copy</button>
            </div>
      </div>
    </div>
  )
}
ChatUser.propTypes ={
    textuser:PropTypes.string,
    
}