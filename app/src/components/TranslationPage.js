'use client'
import {useState} from 'react';
import GoalCard from './GoalCard';
import { getSessionData } from './API';
import AccommodationCard from './AccommodationCard'
import { useLocale } from 'next-intl';

export default function TranslationPage({digestTitle, digestDescription, accessError, accessMessage, accessMessage2, accessPlaceholder, accessSubmit, downloadTabName, textTabName, servicesTabName, goalsTabName, scoresTabName,
    detailText, baselineText, pr1, pr2, pr3, goalText, startText, durationText, frequencyText, providerText, commentsText}) {
    const [translationText, setTranslationText] = useState([]);
    const [goalsData, setGoalsData] = useState([]);
    const [servicesData, setServicesData] = useState([]);
    const [pageIndex, setpageIndex] = useState(0);
    const [accessCode, setAccessCode] = useState('');
    const [isTablistVisible, setIsTablistVisible] = useState(false);
    const [isAccessCodeError, setAccessCodeError] = useState(false);
    const currentLocale = useLocale();

    const handleAccessCodeSubmit = (e) => {
        e.preventDefault();
        const fetchData = async (accessCode) => {
            try {
                const data = await getSessionData(accessCode)
                if (currentLocale == 'es') {
                    setTranslationText(data[1]['pages'])
                    setGoalsData(data[3]['pages'])
                    setServicesData(data[5]['pages'])
                } else {
                    setTranslationText(data[0]['pages'])
                    setGoalsData(data[2]['pages'])
                    setServicesData(data[4]['pages'])
                }
                setAccessCodeError(false)
                setIsTablistVisible(true)
            } catch (error) {
                setAccessCodeError(true)
            }
        }
        if (accessCode) {
          try {
            console.log(accessCode)
            fetchData(accessCode)
          } catch (error) {
          }
        } else {
        }
        setAccessCode('')
    };

    return (
        <div className="flex flex-col h-full w-full rounded-md p-2 md:p-6">
            <div className='pb-6 w-full'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                    <h1 className='chatbot-text-primary text-xl md:text-2xl font-medium'>{digestTitle}</h1>
                    </div>
                </div>
                <p className="text-sm md:text-base mt-2 md:mt-4">{digestDescription}</p>
            </div>
            {!isAccessCodeError ? (
                <div></div>
            ):(
                <div role="alert" className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{accessError}</span>
              </div>
            )}
            {!isTablistVisible ? (
                <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <p className="text-sm md:text-base mt-2 md:mt-4">{accessMessage}</p>
                    <form onSubmit={handleAccessCodeSubmit}>
                        <input className='input input-bordered w-full max-w-xs'
                            type="text" 
                            placeholder={accessPlaceholder}
                            value={accessCode} 
                            onChange={(e) => setAccessCode(e.target.value)} />
                        <button className='btn btn-primary' type="submit">{accessSubmit}</button>
                    </form>
                    <p className="text-sm md:text-base mt-2 md:mt-4">{accessMessage2}</p>
                </div>
              </div>
            ) : (
            <div role="tablist" className="tabs tabs-boxed whitespace-nowrap flex-grow items-start overflow-hidden">
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label={goalsTabName}/>
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none" id='haha'>
                <ul>
                    {goalsData.map((goalData, index) => (
                    <li key={index}>
                    <GoalCard 
                    areaOfNeed={goalData['area_of_need']}
                    goalDescription={goalData['details']}
                    progressRate={goalData['current_percentage']}
                    baselineDescription={goalData['baseline']}
                    progessReport1Date={goalData['report_1_date']}
                    progessReport1Description={goalData["report_1"]}
                    progessReport2Date={goalData["report_2_date"]}
                    progessReport2Description={goalData["report_2"]}
                    progessReport3Date={goalData["report_3_date"]}
                    progessReport3Description={goalData["report_3"]}
                    annualGoalDate={goalData["due_date"]}
                    isGoalMet={goalData['is_met']}
                    detailText={detailText} baselineText={baselineText} pr1={pr1} pr2={pr2} pr3={pr3} goalText={goalText}/>
                    </li>
                    ))}
                </ul>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label={servicesTabName}/>
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none">
                    <ul>
                        {servicesData.map((serviceData, index) => (
                        <li key={index}>
                            <AccommodationCard
                                service={serviceData['service']}
                                provider={serviceData['provider']}
                                comments={serviceData['comments']}
                                startDate={serviceData['startDate']} 
                                endDate={serviceData['endDate']}
                                location={serviceData['location']}
                                frequency={serviceData['frequency']}
                                duration={serviceData['duration']}
                                startText={startText} detailText={detailText} durationText={durationText} frequencyText={frequencyText} providerText={providerText} commentsText={commentsText}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label={textTabName} />
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none">
                    <div className="join p-0">
                        <button className="join-item btn" onClick={() => {setpageIndex(Math.max(pageIndex - 1, 0))}}>«</button>
                        <button className="join-item btn">Página {pageIndex+1}</button>
                        <button className="join-item btn" onClick={() => {setpageIndex(Math.min(pageIndex + 1, Math.max(translationText.length-1, 0)))}}>»</button>
                    </div>
                    <text className='leading-relaxed whitespace-pre-line overflow-y-auto'>{translationText[pageIndex]}</text>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab justify-start" aria-label={downloadTabName} />
                <div role="tabpanel" className="tab-content p-5 h-full overflow-auto flex-none">
                    <div role="alert" className="alert alert-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Feature Currently Working In Progress</span>
                    </div>
                    <div role="alert" className="alert alert-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Uncionalidad Actualmente en Proceso de Desarrollo</span>
                    </div>
                    {/*
                    <iframe className='iframe h-screen' src={`/iep_translated.pdf`} type="application/pdf" width='100%'/>
                    */}
                </div>
            </div>)}
        </div>
    );
}