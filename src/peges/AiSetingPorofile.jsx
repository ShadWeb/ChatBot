import iconarrleft from "../assets/Iconarleft.svg"
import iconright from "../assets/Icon Right.svg"
export default function AiSetingPorofile() {
  return (
    <div>
        <div className="flex items-center justify-between py-3 px-4 ">
            <div className="flex items-center gap-3">
                <img src={iconarrleft} alt="" />
                <h2 className="font-semibold text-xl">Profile & Settings</h2>
            </div>
            <img src={iconright} alt="" />
        </div>
        <div className="w-full flex justify-center items-center">
            <div>
                <img src="" alt="" />
                <h1 className="font-bold text-2xl">Reza Alavi</h1>
            </div>
        </div>
    </div>
  )
}
