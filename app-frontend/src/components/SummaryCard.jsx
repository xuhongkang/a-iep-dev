"use client"; // This must be the first line in the file
import { useState } from 'react';

export default function SummaryCard({ gradient, title, subtitle, imageSrc, percentageProgress, percentageCurrent, percentageGoal }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  const CircleProgress = ({ percentage, color }) => {
    return (
      <div className="relative flex items-center justify-center w-10 h-10">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background: `conic-gradient(${color} ${percentage * 3.6}deg, #d9d9d9 0deg)`
          }}
        ></div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white absolute top-1 left-1 z-10">
          <span className="text-xs font-bold" style={{ color: color }}>{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center">
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
            <CircleProgress percentage={percentageProgress} color="#666" />
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
        <div className="p-6 mx-auto self-center max-w-[1200px] mb-2 bg-[#D9D9D9] shadow-lg font-black rounded-lg ml-2 flex flex-row justify-between">
          <div className='flex flex-col'>
            <h3>title</h3>
            <p className="mt-2 text-black-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <div className="flex flex-col justify-around">
            <div className="flex flex-col items-center justify-center w-full ">
              <span className="mr-2 text-black sm:inline">Current</span>
              <CircleProgress percentage={percentageCurrent} color="#FF703B" />
            </div>
            <div className="flex flex-col items-center justify-center mt-4 self-end w-full">
              <span className="mr-2 text-black sm:inline">Goal</span>
              <CircleProgress percentage={percentageGoal} color="#72CA3D" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
