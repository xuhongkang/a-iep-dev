"use client"; // This must be the first line in the file
import { useEffect, useState } from 'react';

export default function SummaryCard({ gradient, title, subtitle, imageSrc, percentage }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    setCircleCompletion(percentage);
  }, [percentage]);

  function setCircleCompletion(percentage) {
    const circle = document.getElementById(`progress-${title}`);
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
        {percentage < 100 && (
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
                {percentage}%
              </text>
            </svg>
          </div>
        )}
        <button 
          onClick={handleButtonClick} 
          className="ml-4 p-2 rounded-full bg-white shadow z-30"
        >
          {isCardOpen ? '-' : '+'}
        </button>
      </div>

      {isCardOpen && (
        <div className="p-6 bg-white shadow-lg font-black rounded-lg mt-2">
          {/* <h2 className="text-primary-content font-bold">{title}</h2>
          <p className="text-primary-content mt-2">{subtitle}</p> */}
          <p className=" mt-2 text-black-500">
            Additional content goes here. You can add more details about the assessment or any other relevant information.
            Additional content goes here. You can add more details about the assessment or any other relevant information.
            Additional content goes here. You can add more details about the assessment or any other relevant information.
            Additional content goes here. You can add more details about the assessment or any other relevant information.
          </p>
          <span className="mr-2 text-white hidden sm:inline">Processed</span>
            <svg width="40" height="40" viewBox="0 0 36 36">
              <circle
                cx="18" cy="18" r="16"
                stroke="#d2d3d4" strokeWidth="4" fill="none"
              />
              <circle
                id={`progress-${title}`}
                cx="18" cy="18" r="16"
                stroke="#000" strokeWidth="4" fill="none"
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
                {percentage}%
              </text>
            </svg>
        </div>
      )}
    </div>
  );
}
