'use client'
import { useRouter } from "@/navigation"

export default function TaskCard({ title, bgRef, route }) {
    const router = useRouter();

    return (
        <div className="card w-52 h-44 md:w-52 md:h-48 outline p-2 md:p-5 shadow-xl">
            <img
                src={bgRef}
                alt="Background"
                className="h-16 align-top mb-3"
			/>
            <div className="card-body btn btn-primary" onClick={() => router.push(route)}>
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
      );
};