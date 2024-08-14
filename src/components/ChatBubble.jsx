import React from 'react';

function ChatBubble({ conversation }) {
  return (
    <div className= "mb-4 mt-1">
      <div className="bg-gray-200 p-3 rounded-lg text-left inline-block">
        <p>{conversation.user}</p>
      </div>
      <div className="p-3 rounded-lg text-left mt-1">
        <p>AI : {conversation.ai}</p>
      </div>
    </div>
  );
}

export default ChatBubble;