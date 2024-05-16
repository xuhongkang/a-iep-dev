'use client'
import TranslationPage from '@/components/TranslationPage'
import ChatBot from '@/components/chatbot/Chatbot'
import React, { useState } from 'react';
import {useRouter} from '@/navigation';
import LocaleSwitcherModal from './LocaleSwitcherModal';

export default function Workspace({goBackText, digestTitle, digestDescription, accessError, accessMessage, accessMessage2, accessPlaceholder, accessSubmit, downloadTabName, textTabName, servicesTabName, goalsTabName, scoresTabName, chatbotTitle, chatbotDescription, sendButtonText, p1, p2, p3, p4, sendPlaceholderText,
  detailText, baselineText, pr1, pr2, pr3, goalText, startText, durationText, frequencyText, providerText, commentsText, showDigest, showChatbot}) {
  const [isChatbotVisible, toggleChatbotVisibility] = useState(false);
  const router = useRouter();
  
  return (
    <div className='w-screen h-screen flex justify-center'>
      <div className="flex max-w-md md:w-2/3 items-center h-full">
        <div className="flex flex-col w-full h-full">
          <div className='flex'>
            <LocaleSwitcherModal className='flex-start'/>
            <button className="btn bg-whatsapp-main text-white"
              onClick={() => router.push('/')}>{goBackText}</button>
          </div>
          {!isChatbotVisible ? (
            <div className="w-full h-full">
              <TranslationPage digestTitle={digestTitle} digestDescription={digestDescription} accessError={accessError} accessMessage={accessMessage} accessPlaceholder={accessPlaceholder} accessSubmit={accessSubmit} downloadTabName={downloadTabName} textTabName={textTabName} servicesTabName={servicesTabName} goalsTabName={goalsTabName} scoresTabName={scoresTabName}
              detailText={detailText} baselineText={baselineText} pr1={pr1} pr2={pr2} pr3={pr3} goalText={goalText} startText={startText} durationText={durationText} frequencyText={frequencyText} providerText={providerText} commentsText={commentsText}/>
            </div>
          ) : (
            <div className="w-full h-full">
              <ChatBot chatbotTitle={chatbotTitle} chatbotDescription={chatbotDescription} sendButtonText={sendButtonText} p1={p1} p2={p2} p3={p3} p4={p4} sendPlaceholderText={sendPlaceholderText}/>
            </div>
          )}
        <button 
            className="w-full btn btn-outline bg-whatsapp-prompt btn-lg text-white"
            onClick={() => toggleChatbotVisibility(!isChatbotVisible)}
          >{isChatbotVisible ? showDigest : showChatbot}
        </button>
      </div>
    </div>
  </div>
  );
}