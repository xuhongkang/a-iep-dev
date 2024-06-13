import PortalMenu from '@/components/PortalMenu'
import SummaryCards from '@/components/summary/SummaryCards'

export default function SummaryPage() {
  return (
    <div className="w-screen overflow-auto flex flex-col">
        <div className="fixed top-0 left-0 w-full z-10">
            <PortalMenu />
        </div>
        <div className="mt-20 md:mt-32 left-0 w-full z-0">
            <SummaryCards />
        </div>
    </div>
  );
}