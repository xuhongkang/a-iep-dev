import { useCallback } from 'react';

const useSpeechSynthesis = () => {
  const speak = useCallback((text = '', lang = 'en-US') => {
    if (text && window.speechSynthesis) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = lang;
      window.speechSynthesis.speak(speech);
    }
  }, []);

  return speak;
};

export default useSpeechSynthesis;
