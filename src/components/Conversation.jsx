import React, { useState } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import ChatBubble from './chatBubble';
import axios from 'axios';
import Loading from "../components/Loading"
import uuid from 'uuid4'

function Conversation() {

  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  function changeHandler(event) {
    setPrompt(event.target.value);
  }

  function clickHandler(event){
      event.preventDefault();
      //sending user input to flask api
      setLoading(true);
      axios.post('https://mind-ease-backend-test.vercel.app/v1/chat/completions', { prompt : prompt}, {
        headers : {
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then((resp) => {
          setConversation([...conversation, {id : uuid() ,user : prompt, ai : resp.data.response}]);
          setPrompt('');
          setLoading(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoading(false);
          setPrompt('');
        });
  }

  function endChat(event){
    event.preventDefault();
    setConversation([]);
    setPrompt('');
  }


  return (
    <>
        <div className = "font-monty w-full flex justify-center">
            <div className = "w-1/2 flex-wrap mt-16 overflow-y-auto max-h-[calc(100vh-14rem)]">
            {conversation.map((convo) => (
              <ChatBubble conversation={convo} key={convo.id} />
            ))}
            {loading &&  <Loading/> }
            </div>
            

            <form className = " flex fixed bottom-14 w-full px-4 bg-white z-10 justify-center py-1">
              <input type = "text" placeholder = "Enter your prompt here" className = "border-[1.5px] shadow-sm py-3 bg-gray-100 rounded-sm text-left px-2 w-1/3 outline-none" value={prompt} onChange={changeHandler}/>
              <button className = "mx-3 border-[1.5px] px-3 border-gray-400 rounded-md text-2xl hover:scale-105 transition-all duration-300" onClick={clickHandler}><FaCircleArrowUp/></button>
              <button className = "border-[1.5px] border-gray-400 rounded-sm px-2 hover:scale-105 transition-all duration-300" onClick={endChat}>End Chat</button>
            </form>

          </div>
    </>
  )
}

export default Conversation