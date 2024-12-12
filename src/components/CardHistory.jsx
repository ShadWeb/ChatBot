 import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Cardhistory({Title ,content,date,id}) {
    // console.log(props);

    // const data = props;

// const d = props?.descripton;
// const t = props?.Title;
    if(content.length >100){
        content = content.slice(0,100 -3) +"...";
    }
    if(Title.length >61){
        Title = Title.slice(0,61 -3) +"...";
    }

  return (
   
    <div className="border border-[#EBEDEC] px-[24px] py-8 rounded-[36px] min-[370px]:max-w-[165px] min-[412px]:max-w-[190px]  flex flex-col gap-3">
       <Link to={`/homechat/${id}`}>
    <h2 className="font-semibold text-base text-[#01CD98]">{Title}</h2>
    <p className="text-[#616161] font-normal text-base">{content}</p>
    <span className="text-[#616161] font-normal text-sm">{date} mins ago</span>
    </Link>
  </div>
 
  )
}

Cardhistory.propTypes ={
    Title : PropTypes.node,
    content: PropTypes.node,
    date:PropTypes.node,
    id:PropTypes.node,
}


export default Cardhistory