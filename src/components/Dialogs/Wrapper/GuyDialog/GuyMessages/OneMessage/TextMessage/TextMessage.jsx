import React from 'react';

function TextMessage(props) {
  // ОДНО сообщение для диалога с пользователем
  return (
   <div className="text-message">{props.message}</div> 
  )
}

export default TextMessage;