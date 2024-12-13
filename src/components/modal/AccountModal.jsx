import PropTypes from 'prop-types';
import iconaros from './assets/Iconaros.svg'
function AccountModal({visible,onClose }) {
    if(!visible) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-end  " >
    <div className="w-full bg-white p-8 flex flex-col gap-6 rounded-t-3xl ">
        <div className="flex items-center justify-between" >
            <h2 className="font-medium text-lg">Delete Account</h2>
            <img src={iconaros} alt="" />
        </div>
        <span className="border w-full"></span>
        <div className="flex items-center justify-between" >
            <h2 className="font-medium text-lg text-[#CB4959]">Sign out</h2>
            <img src={iconaros} alt="" />
        </div>
        
      
    </div>   


</div>
  )
}
AccountModal.propTypes ={
    visible:PropTypes.bool,
    onClose:PropTypes.any
}
export default AccountModal