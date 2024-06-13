"use client"; // This must be the first line in the file
import { useEffect } from 'react';

export default function SummaryCard({ gradient, title, subtitle, imageSrc, percentage }) {
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

  return (
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
       <div className="absolute right-6 top-0 mt-2 flex items-center">
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
        </svg>
        <span className="ml-2 text-white">{percentage}%</span>
        <span className="ml-2 text-white">Processed</span>
      </div>
    </div>
  );
  };