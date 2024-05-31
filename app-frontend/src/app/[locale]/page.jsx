import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Test from '@/components/Test'
import LandingPage from '@/components/LandingPage'

export default function Page() {
  return (
    <Test/>
  //<LandingPage/>
);
}