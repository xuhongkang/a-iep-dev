'use client'
import LanguageSelectionModal from '@/components/LanguageSelectionModal'
import UserLoginModal from '@/components/UserLoginModal'
import { useRouter } from '@/navigation';

export default function PortalMenu() {
  const router = useRouter();

  function userLogout() {
    router.push('/')
  }

  function routeToHome() {
    router.push('/home')
  }

  return (
    <div className="navbar bg-gray-300 w-screen h-10 sm:h-16 md:h-20 lg:h-24">
        <div className="flex-none h-full">
            <button className="btn btn-ghost h-full" onClick={routeToHome}>
                <img src='/images/icon.svg' alt="Logo" className="h-full"/>
            </button>
        </div>
    	<div className="flex-grow justify-end">
        <button className="btn bg-transparent btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={routeToHome}>
            <h3>Portal Home</h3>
        </button>
    		<LanguageSelectionModal/>
        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={userLogout}>
            <h3>Logout</h3>
        </button>
      </div>
    </div>
  );
}