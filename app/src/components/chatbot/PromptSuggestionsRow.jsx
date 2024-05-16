const PromptSuggestionRow = ({ onPromptClick, prompts }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full pb-4">
      {prompts.map((prompt, index) => (
        <button
          key={`suggestion-${index}`}
          onClick={() => onPromptClick(prompt)}
          className="btn font-normal bg-whatsapp-prompt sm:btn-md md:btn-lg lg:btn-lg border-none
          rounded-lg whitespace-normal break-words max-w-full text-left text-white"
        >{prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestionRow;
