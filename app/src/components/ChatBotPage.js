'use client'
import { useState, useEffect } from "react";
import ChatBotFeed from './ChatBotFeed';
import { getChatReponse } from "./API";

export default function ChatBotPage({accessCode, assistantId, botText, userText, askText, promptText, inputText, conversationHistory}) {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages(conversationHistory);
  },  [conversationHistory]);

  const handlePrompt = async (e) => {
    e.preventDefault();
    try {
      const data = await getChatReponse(accessCode, assistantId, prompt)
      setMessages(JSON.parse(data[1]).messages)
    } catch (error) {
      alert('Clave de Acceso Incorrecta');
    }
  };
  
  return (
  <div className="w-full p-4 h-screen">
    <div className="h-3/4 overflow-auto">
      <div className="p-4 shadow rounded">
        <ChatBotFeed messages={messages} botTranslation={botText} userTranslation={userText}/>
      <div/>
    </div>
    </div>
        <div className="label">
          <span className="label-text">{promptText}</span>
        </div>
    <form className="" onSubmit={handlePrompt}>
      <div className="flex items-center space-x-2 w-full">
        <input type="text" placeholder={inputText} className="input input-bordered w-full" onChange={(e) => setPrompt(e.target.value)}/>
        <button className="btn btn-primary btn-md text-lg">{askText}</button>
      </div>
    </form>
    </div>
  );
}