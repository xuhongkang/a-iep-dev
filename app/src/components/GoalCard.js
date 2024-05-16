export default function GoalCard({areaOfNeed, goalDescription, progressRate, baselineDescription, progessReport1Date, progessReport1Description, progessReport2Date, progessReport2Description, progessReport3Date, progessReport3Description, annualGoalDate, isGoalMet,
detailText, baselineText, pr1, pr2, pr3, goalText}) {
    return (
        <div className={`${"card w-full text-primary-content"} ${isGoalMet ? 'bg-green-700' : 'bg-error'}`}>
            <div className="card-body p-0">
                <div className='flex p-5'>
                    <div className='flex-1 whitespace-nowrap text-wrap'>
                        <h2 className="card-title">{areaOfNeed}</h2>
                        <p>{goalDescription}</p>
                    </div>
                    <div className="flex-2 radial-progress" style={{"--value":progressRate}} role="progressbar">{`${progressRate}%`}</div>
                </div>
                <div className="card-actions justify-end">
                    <details className="collapse bg-neutral">
                        <summary className="collapse-title text-xl font-medium">{detailText}</summary>
                        <div className="collapse-content"> 
                            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                                <li>
                                    <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-start md:text-end mb-10 text-wrap">
                                        <div className="text-lg font-black">{baselineText}</div>
                                        {baselineDescription}
                                    </div>
                                    <hr className="bg-primary"/>
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-end mb-10 text-wrap">
                                    <time className="font-mono italic">{progessReport1Date}</time>
                                    <div className="text-lg font-black">{pr1}</div>
                                    {progessReport1Description}
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-start md:text-end mb-10 text-wrap">
                                    <time className="font-mono italic">{progessReport2Date}</time>
                                    <div className="text-lg font-black">{pr2}</div>
                                    {progessReport2Description}
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-end mb-10 text-wrap">
                                    <time className="font-mono italic">{progessReport3Date}</time>
                                    <div className="text-lg font-black">{pr3}</div>
                                    {progessReport3Description}
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-start md:text-end mb-10 text-wrap">
                                    <time className="font-mono italic">{annualGoalDate}</time>
                                    <div className="text-lg font-black">{goalText}</div>
                                    {goalDescription}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}