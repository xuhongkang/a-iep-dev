export default function SummaryCard({ gradient, title, subtitle, imageSrc }) {
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
            zIndex: 0}}/>
      </div>
    );
  };