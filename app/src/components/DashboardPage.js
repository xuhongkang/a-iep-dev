'use client'
import {useRouter, getURLWithSearchParams} from '@/navigation';
import { useLocale } from 'next-intl';

function DashboardPage({errorMessage, menuButtonMessage}) {
  const router = useRouter();
  const currentLocale = useLocale();

  const handleNavigateToHomePage = () => {
    console.log('triggered')
    if (typeof window !== 'undefined') {
      router.replace(getURLWithSearchParams('/', 'langSet', true), {locale: currentLocale});
    }
  };
  
  return (
    <div className="mx-auto w-3/4">
      <div role="alert" className="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>{errorMessage} </span>
      </div>
      <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleNavigateToHomePage}>{menuButtonMessage}</button>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-60 w-full"></div>
      </div>
    </div>
  );
}
  
export default DashboardPage;