import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import HomePage from '@/components/HomePage'

export default function Page() {
  return (
    <HomePage/>
);
}