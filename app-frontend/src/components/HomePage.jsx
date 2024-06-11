import PortalMenu from '@/components/PortalMenu'

export default function HomePage() {
  return (
    <div className="w-screen overflow-auto flex flex-col">
        <div className="fixed top-0 left-0 w-full z-10">
            <PortalMenu />
        </div>
    </div>
  );
}
