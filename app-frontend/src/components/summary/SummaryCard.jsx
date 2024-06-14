"use client";
import { useEffect, useState } from 'react';

export default function SummaryCard({ gradient, title, subtitle, imageSrc, percentageProgress, percentageCurrent, percentageGoal }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    setCircleCompletion(percentageProgress, `progress-${title}`);
    setCircleCompletion(percentageCurrent, `current-${title}`);
    setCircleCompletion(percentageGoal, `goal-${title}`);
  }, [percentageProgress, percentageCurrent, percentageGoal, title]);

  function setCircleCompletion(percentage, id) {
    const circle = document.getElementById(id);
    if (circle) {
      const radius = 16;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percentage / 100) * circumference;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = offset;
    }
  }

  const handleButtonClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="w-full">
      <div className={`rounded-lg p-6 h-32 sm:h-64 ${gradient} relative flex items-center justify-between z-10`}>
        <div className={`p-6 w-full h-full flex flex-col justify-center relative z-10 sm:bg-none`}>
          <h2 className="text-primary-content font-bold">{title}</h2>
          <p className="text-primary-content mt-2">{subtitle}</p>
        </div>
        <div 
          className="hidden sm:block absolute inset-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            zIndex: 0
          }}
        />
        {percentageProgress < 100 && (
          <div className="absolute right-0 sm:right-6 top-0 mt-1 sm:mt-6 flex items-center sm:scale-100 scale-75 z-20">
            <span className="mr-2 text-white hidden sm:inline">Processed</span>
            <svg width="40" height="40" viewBox="0 0 36 36">
              <circle
                cx="18" cy="18" r="16"
                stroke="#d2d3d400" strokeWidth="4" fill="none"
              />
              <circle
                id={`progress-${title}`}
                cx="18" cy="18" r="16"
                stroke="#fff" strokeWidth="4" fill="none"
                strokeDasharray="100, 100" strokeDashoffset="0"
                transform="rotate(-90 18 18)"
              />
              <text
                x="18" y="20.35"
                fill="#fff"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {percentageProgress}%
              </text>
            </svg>
          </div>
        )}
        <button 
          onClick={handleButtonClick} 
          className="ml-4 rounded-full text-white absolute bottom-2 right-2"
          style={{ fontSize: `30px` }}
        >
          {isCardOpen ? '-' : '+'}
        </button>
      </div>

      {isCardOpen && (
        <div className="p-6 bg-white shadow-lg font-black rounded-lg ml-2 flex flex-row justify-between">
          <p className="mt-2 text-black-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <span className="mr-2 text-black sm:inline">Current</span>
              <svg width="40" height="40" viewBox="0 0 36 36">
                <circle
                  cx="18" cy="18" r="16"
                  stroke="#fff" strokeWidth="4" fill="none"
                />
                <circle
                  id={`current-${title}`}
                  cx="18" cy="18" r="16"
                  stroke="#a00124" strokeWidth="4" fill="none"
                  strokeDasharray="100, 100" strokeDashoffset="0"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="18" y="20.35"
                  fill="#000"
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {percentageCurrent}%
                </text>
              </svg>
            </div>
            <div className="flex items-center justify-center mt-4 self-end">
              <span className="mr-2 text-black sm:inline">Goal</span>
              <svg width="40" height="40" viewBox="0 0 36 36">
                <circle
                  cx="18" cy="18" r="16"
                  stroke="#fff" strokeWidth="4" fill="none"
                />
                <circle
                  id={`goal-${title}`}
                  cx="18" cy="18" r="16"
                  stroke="#00ff69" strokeWidth="4" fill="none"
                  strokeDasharray="100, 100" strokeDashoffset="0"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="18" y="20.35"
                  fill="#000"
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {percentageGoal}%
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}