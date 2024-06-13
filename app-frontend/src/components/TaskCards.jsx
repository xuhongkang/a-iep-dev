import TaskCard from '@/components/TaskCard'

export default function TaskCards() {
    const taskData = [
        {
            title: "Upload & Translate",
            bgRef: "/images/landingicon1.svg",
            route: "/portal/upload"
        },
        {
            title: "Get Summary",
            bgRef: "/images/landingicon2.svg",
            route: "/portal/summary"
        },
        {
            title: "Ask Questions",
            bgRef: "/images/landingicon3.svg",
            route: "/portal/chatbot"
        },
    ];

    return (
        <div className="p-4 rounded-xl w-full h-full outline-dotted">
            <div className="flex flex-col lg:flex-row align-middle items-center justify-between md:m-5 gap-5">
                {taskData.map((task, index) => (
                    <TaskCard key={index} title={task.title} bgRef={task.bgRef} route={task.route}/>
                ))}
            </div>
        </div>
    )
}