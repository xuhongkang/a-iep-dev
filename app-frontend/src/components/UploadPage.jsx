import PortalMenu from '@/components/PortalMenu';
import FileUpload from '@/components/FileUpload'

export default function HomePage() {
  return (
    <div className="w-screen overflow-auto flex flex-col h-screen">
        <div className="fixed top-0 left-0 w-full z-10">
            <PortalMenu />
        </div>
        <div className='mx-5 md:mx-20 h-auto mt-52'>
            <FileUpload />
        </div>
      </div>
  );
}
