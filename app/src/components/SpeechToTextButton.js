'use client'
import useSpeechSynthesis from '@/lib/useSpeechSynthesis'; // Ensure the path is correct

function SpeechToTextButton({ text, locale }) {
    const speak = useSpeechSynthesis();
    return (
        <button className="btn-sm size-5 btn-circle transition-transform duration-200 ease-in-out hover:scale-110" onClick={() => speak(text, locale)}>
            <img src="/images/speaker.svg" alt="Speak"/>
        </button>
    );
}

export default SpeechToTextButton;