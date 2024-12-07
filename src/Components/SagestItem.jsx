import iconarr from "../assets/Iconar.svg"

export default function SagestItem(props) {
  return (
    <div className="border rounded-[36px] flex items-start gap-3  p-6 ">
        <div className="flex flex-col  gap-3">
        <h2 className="font-semibold text-base">{props.Title}</h2>
        <p className="font-normal text-sm">{props.description}</p>
        </div>
    
      <img src={iconarr} alt="" />
    </div>
  )
}
