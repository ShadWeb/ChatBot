import serchicon from "../assets/serch.svg"
export default function History() {
  return (
    <div className="p-4 flex items-center gap-4">  
        <h2 className="text-2xl font-semibold  mb-4">History</h2>  
        <div className="flex items-center  py-2 px-6 px  border border-gray-300 rounded-full ">  
          <input  
            type="text"  
            placeholder="Search ..."  
            className="outline-none"  
          />  
        
        <img src={serchicon} alt="" />
        </div>  
  </div>
  )
}
