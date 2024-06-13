import SummaryCard from '@/components/SummaryCard'

export default function SummaryCards() {

  const cardData = [
    {
      gradient: "bg-gradient-to-r from-blue-900 to-blue-400",
      title: "Statewide Assessment",
      subtitle: "How your child will participate in district or state assessments.",
    },
    {
      gradient: "bg-gradient-to-r from-teal-800 to-teal-400",
      title: "Special Factors",
      subtitle: "What your child's unique needs are and the tools needed to help them learn better.",
    },
    {
      gradient: "bg-gradient-to-r from-orange-600 to-orange-300",
      title: "Annual Goals and Objectives",
      subtitle: "Where your child is expected to be in a year.",
    },
    {
      gradient: "bg-gradient-to-r from-purple-800 to-purple-400",
      title: "Offer of FAPE ‐ Services",
      subtitle: "Explains exactly what help/services will be available to your child.",
    },
    {
      gradient: "bg-gradient-to-r from-red-700 to-red-400",
      title: "Offer of FAPE ‐ Educational Setting",
      subtitle: "Where all this will happen.",
    },
    {
      gradient: "bg-gradient-to-r from-gray-800 to-gray-400",
      title: "Emergency Circumstances Program",
      subtitle: "How IEP will be delivered in emergencies. For instances, if school cannot operate in person.",
    }
  ];
  

  return (
    <div className="w-screen overflow-auto flex flex-col">
    <div className="p-4">
    <div className="space-y-6">
      {cardData.map((card, index) => (
        <SummaryCard
          key={index}
          gradient={card.gradient}
          title={card.title}
          subtitle={card.subtitle}
          imageSrc="/images/summary_card_bg.png"
        />
      ))}
       </div>
      {/* Add more CardComponent instances with different gradients and content as needed */}
    </div>

   
  </div>
  );
}
