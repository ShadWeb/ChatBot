import iconexit from "./assets/close.svg"
import PropTypes from 'prop-types';

function StorageModal({visible,onClose }) {
    if(!visible) return null;
  return (
    <div  className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-end  " >
  <div className="w-full bg-white p-8 flex flex-col gap-6 rounded-t-3xl ">
     <div className="flex gap-[105.5px]">
        <button onClick={onClose} ><img src={iconexit} alt="" /></button>
        <h2 className="text-center">Clear cache</h2>
     </div>
        <div className="flex  flex-col gap-8">
            <p className="text-center font-normal text-base ">You are requesting to delete a cache with a size of 238.05 mb. Are you sure about your request?</p>
            <div className="flex items-stretch justify-center gap-4">
                <button className="bg-[#7E77701F] w-full rounded-full py-[18px] px-6 font-semibold text-base ">
                    Cancel
                 </button>
                <button className="bg-black w-full text-white rounded-full py-[18px] px-6 font-semibold text-base ">
                Delete
                 </button>
            </div>
        </div>
      
    </div>  
</div>
  )
}
StorageModal.propTypes ={
    visible:PropTypes.bool,
    onClose:PropTypes.any
}
export default StorageModal
