import './Message.css';

function Message({text}) {
  return ( 
    <div className='text_mes'><span className='title'>Сообщение:</span>"{text}"</div>
   );
}

export default Message;