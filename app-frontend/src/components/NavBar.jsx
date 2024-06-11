import LanguageSelectionModal from '@/components/LanguageSelectionModal'
import UserLoginModal from '@/components/UserLoginModal'

export default function NavBar() {
  return (
    <div className="navbar bg-secondary w-screen h-10 sm:h-16 md:h-20 lg:h-24">
        <div className="flex-none h-full">
            <button className="btn btn-ghost h-full">
                <img src='/images/icon.svg' alt="Logo" className="h-full"/>
            </button>
        </div>
    	<div className="flex-grow justify-end">
    		<LanguageSelectionModal/>
        <UserLoginModal/>
      </div>
    </div>
  );
}