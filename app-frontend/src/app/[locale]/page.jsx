import LandingPage from '@/components/LandingPage'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export default function Page() {
  if (cookies().get('payload-token')) {
    redirect('/portal')
  }

  return (
    <LandingPage/>
);
}