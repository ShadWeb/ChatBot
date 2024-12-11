import { Link } from "react-router-dom";

function Cardhistory({Title,descripton,date,id}) {

    if(descripton.length >100){
        descripton = descripton.slice(0,100 -3) +"...";
    }
    if(Title.length >61){
        Title = Title.slice(0,61 -3) +"...";
    }
    
  return (
   
    <div className="border border-[#EBEDEC] px-[24px] py-8 rounded-[36px] min-[370px]:max-w-[165px] min-[412px]:max-w-[190px]  flex flex-col gap-3">
       <Link to={`/ChatNew/${id}/${false}`}>
    <h2 className="font-semibold text-base text-[#01CD98]">{Title}</h2>
    <p className="text-[#616161] font-normal text-base">{descripton}</p>
    <span className="text-[#616161] font-normal text-sm">{date} mins ago</span>
    </Link>
  </div>
 
  )
}

export default Cardhistory