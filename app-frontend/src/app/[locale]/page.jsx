import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import LandingPage from '@/components/LandingPage'

export default function Workspace() {
  return (<LandingPage/>);
}