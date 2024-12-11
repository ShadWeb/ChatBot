import iconarr from "../assets/Iconar.svg"
import PropTypes from 'prop-types';

export default function SagestItem({Title  , description }) {
  return (
    <div className="border rounded-[36px] flex items-start gap-3  p-6 ">
        <div className="flex flex-col  gap-3">
        <h2 className="font-semibold text-base">{Title}</h2>
        <p className="font-normal text-sm">{description}</p>
        </div>
    
      <img src={iconarr} alt="" />
    </div>
  )
}

SagestItem.propTypes ={
    Title:PropTypes.string,
    description:PropTypes.string
}