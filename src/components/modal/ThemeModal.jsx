import iconaros from "./assets/iconaros.svg"
import PropTypes from 'prop-types';

function ThemeModal({visible,onClose }) {
    if(!visible) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-end " >
<div className="w-full bg-white p-8 flex flex-col gap-6 rounded-t-3xl ">
        <div className="flex items-center justify-between" >
            <h2 className="font-medium text-lg">System default</h2>
            <img src={iconaros} alt="" />
        </div>
        <span className="border w-full"></span>
        <div className="flex items-center justify-between" >
            <h2 className="font-medium text-lg ">Light mode</h2>
            <img src={iconaros} alt="" />
        </div>
        <span className="border w-full"></span>
        <div className="flex items-center justify-between" >
            <h2 className="font-medium text-lg ">Dark mode</h2>
            <img src={iconaros} alt="" />
        </div>
        
      
    </div>  


</div>
  )
}
ThemeModal.propTypes ={
    visible:PropTypes.bool,
    onClose:PropTypes.any
}
export default ThemeModal