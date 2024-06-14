"use client"; // This must be the first line in the file
import { useState } from 'react';

export default function SummaryCard({ gradient, title, subtitle, imageSrc, percentageProgress, percentageCurrent, percentageGoal, subCards }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  const CircleProgress = ({ percentage, color }) => {
    return (
      <div className="relative flex items-center justify-center w-10 h-10 sm:scale-100 scale-75">
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
    <div className="w-full flex flex-col justify-center max-w-[1400px] mx-auto">
      <div className={`rounded-lg p-6 h-32 sm:h-64 ${gradient} relative flex items-center justify-between z-10`}>
        <div className={`p-6 w-full h-full sm:ml-40 flex flex-col justify-center relative z-10 sm:bg-none`}>
          <h2 className="text-primary-content font-bold">{title}</h2>
          <p className="text-primary-content mt-2">{subtitle}</p>
        </div>
        <div
          className="hidden sm:block absolute inset-0 "
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            zIndex: 0
          }}
        />
        {percentageProgress < 100 && (
          <div className="absolute right-0 sm:right-6 top-0 mt-1 sm:mt-6 flex items-center  z-20">
            <span className="mr-2 text-white hidden sm:inline">Processed</span>
            <CircleProgress percentage={percentageProgress} color="#666" />
          </div>
        )}
        <button
          onClick={handleButtonClick}
          className="sm:text-[80px] text-[40px] text-white bottom-0 right-2 absolute"
          style={{
        
            zIndex:'30'
          }}
        >
          {isCardOpen ? '-' : '+'}
        </button>
      
      </div>
      

      {isCardOpen && (
        <div style={{ margin: `0 auto` }} className="sm:p-6 p-2 mx-auto  w-full max-w-[960px] mb-2  font-black rounded-lg ml-2 flex flex-col space-y-4">
          {subCards.map((subCard, index) => (
            <div key={index} className="sm:p-8 p-2 bg-[#D9D9D9] rounded-lg flex flex-row">
              <div >
              <p className="font-bold sm:text-[20px] text-[12px]">{subCard.title}</p>
              <p className="mt-2 text-black-500">{subCard.description}</p>
              </div>
           
              <div className="flex flex-col justify-around mt-4 sm:ml-4 ml-2">
                <div className="flex flex-col items-center">
                  <span className="text-black sm:text-[16px] text-[10px]">Current</span>
                  <CircleProgress percentage={subCard.percentageCurrent} color="#FF703B"/>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-black sm:text-[16px] text-[10px]">Goal</span>
                  <CircleProgress percentage={subCard.percentageGoal} color="#72CA3D"  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}