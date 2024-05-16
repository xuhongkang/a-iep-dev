'use client'
import Link from "next/link";
import {useRouter} from '@/navigation';
import { useLocale} from "next-intl";


export default function UserSelect({l1, l2, l3, r1, r2, r3}) {
    const router = useRouter();
    const currentLocale = useLocale();

    function navigateToWorkspace() {
        router.push('/workspace');
    }

    return (
        <div className="flex w-full">
            <div className="grid flex-grow card rounded-box place-items-center">
                {/* Left Side */}
                <div className="w-full bg-primary flex items-center justify-center cursor-pointer">
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <header className="font-bold text-3xl mb-2 text-center">{l1}</header>
                        <button className="btn">
                            <Link className='w-full' href={`https://iep-kb-24839890c1f5.herokuapp.com${currentLocale === 'en' ? '' : `/${currentLocale}`}/quickstart/guide`} passHref>
                                {l2}
                            </Link>
                        </button>
                        <p>{l3}</p>
                    </div>
                </div>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid flex-grow card rounded-box place-items-center">
                <div className="w-full h-full bg-info flex items-center justify-center">
                    <div className="text-white flex flex-col items-center justify-center p-4">
                        <header className="font-bold text-3xl mb-2 text-center">{r1}</header>
                        <button className='btn' onClick={navigateToWorkspace}>{r2}</button>
                        <p>{r3}</p>
                    </div>
                </div>
            </div>     
        </div>);
}