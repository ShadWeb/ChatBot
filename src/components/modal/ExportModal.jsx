import iconexport from "./assets/export.svg"
import iconexit from "./assets/Close.svg"
import PropTypes from 'prop-types';
function ExportModal({visible,onClose }) {
  if(!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  " >
        <div className="w-full bg-white p-8 flex flex-col gap-8 rounded-b-3xl  ">
            <div className="flex items-center gap-[105px]">
                <button onClick={onClose}>
                    <img src={iconexit} alt="" />
                </button>
                <h2 className="flex font-semibold text-xl"><img src={iconexport} alt="" />Export as PDF</h2>
            </div>
            <div className="flex flex-col gap-6 ">
            <p className="font-normal text-base">All your conversations with Chat Bot AI will be exported as PDF. Please choose a title for this file</p>


                <input className="w-full p-6 py-[9px] border rounded-2xl border-[#EBEDEC] " type="text" placeholder="Title"/>

                <button  className="font-semibold text-base w-full bg-black text-white py-[18px] px-6 rounded-full">Export</button>
            </div>
          
        </div>   


 </div>
  )
}
ExportModal.propTypes ={
    visible:PropTypes.bool,
    onClose:PropTypes.any
}
export default ExportModal
