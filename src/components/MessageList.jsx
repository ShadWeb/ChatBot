
import PropTypes from 'prop-types';
import ChatUser from './ChatUser';
import MassegeBot from './MassegeBot';
function MessageList({massages}) {
  return (
    <div className='snap-end'>
       {massages.length === 0 ? (  
        <p></p>  
      ) : (  
        massages.map((msg, index) => (  
        //   <div key={index} className={`message ${msg.sender}`}>  
        //     <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}  
        //   </div>  
        msg.sender === 'user' ? <ChatUser key={index} textuser={msg.text}/> : <MassegeBot key={index} massege={msg.text}/>
        
        ))  
      )}

    </div>
  )
}
MessageList.propTypes ={
    massages:PropTypes.array,
    
}
export default MessageList
