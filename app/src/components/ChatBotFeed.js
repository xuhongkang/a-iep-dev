import {useLocale} from 'next-intl';
import SpeechToTextButton from './SpeechToTextButton'

export default function ChatBotFeed({ messages, botTranslation, userTranslation}) {
    const currentLocale = useLocale();
    
    return (
        messages.map((message, index) => (
            <div key={index} className={message.owner === "bot" ? "chat chat-start " : "chat chat-end"}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Avatar" src={message.owner === "bot" ? "/images/bot.png" : "/images/user.png"} />
                </div>
            </div>
            <div className="chat-header">
                {message.owner === "bot" ? botTranslation : userTranslation}
            </div>
            <div className={message.owner === "bot" ? "chat-bubble chat-bubble-secondary" : "chat-bubble chat-bubble-primary"}>
                {message.text}<SpeechToTextButton text={message.text} locale={currentLocale}/></div>
        </div>
        ))
    );
}