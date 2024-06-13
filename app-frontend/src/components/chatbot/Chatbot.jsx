"use client";
import {useEffect, useRef} from 'react';
import Bubble from './Bubble'
import { useChat } from 'ai/react';
import Markdown from "react-markdown";
import PromptSuggestionRow from './PromptSuggestionsRow';

export default function Chatbot({chatbotTitle, chatbotDescription, sendButtonText, p1, p2, p3, p4, sendPlaceholderText}) {
  const { append, messages, input, handleInputChange, handleSubmit } = useChat();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    handleSubmit(e, { options: { body: { useRag: true, llm: 'gpt-3.5-turbo', similarityMetric: 'cosine'}}});
  }

  const handlePrompt = (promptText) => {
    const msg = { id: crypto.randomUUID(),  content: promptText, role: 'user' };
    append(msg, { options: { body: {useRag: true, llm: 'gpt-3.5-turbo', similarityMetric: 'cosine'}}});
    console.log(msg)
  };

  return (
    <main className="flex bg-primary w-full h-full flex-col items-center justify-center">
      <section className='flex flex-col w-full h-full rounded-md p-2 md:p-6 pb-5 md:pb-8'>
      <div className='pb-6 w-full'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <h1 className='text-xl md:text-2xl font-medium'>{chatbotTitle}</h1>
            </div>
          </div>
        <Markdown components={{a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>}} className="text-sm md:text-base mt-2 md:mt-4">{chatbotDescription}</Markdown>
      </div>
        <div className='flex-1 relative overflow-y-auto my-4 md:my-6 w-full'>
          <div className='absolute w-full'>
            {messages.map((message, index) => <Bubble ref={messagesEndRef} key={`message-${index}`} content={message}/>)}
          </div>
        </div>
        {!messages || messages.length === 0 && (
          <PromptSuggestionRow onPromptClick={handlePrompt} prompts={[
            p1, p2, p3, p4
          ]} />
        )}
        <form className='flex h-[40px] gap-2 mt-4 mb-8' onSubmit={handleSend}>
          <input onChange={handleInputChange} value={input} className='flex-1 input text-lg md:text-base outline-none bg-transparent' placeholder={sendPlaceholderText} />
          <button type="submit" className='flex btn btn-md rounded-md items-center justify-center px-2.5 origin:px3'>
            <span className='origin:block font-semibold text-lg'>{sendButtonText}</span>
          </button>
        </form>
      </section>
    </main>
  )
}