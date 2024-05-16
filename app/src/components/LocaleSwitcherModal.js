'use client';

import {useTransition, useEffect} from 'react';
import {useSearchParams} from 'next/navigation';
import {localeNames, localeSwitcherButtonText, localeSwitcherModalLabels} from '@/config';
import {useRouter, usePathname, getURLWithSearchParams} from '@/navigation';
import {useLocale} from 'next-intl';

export default function LocaleSwitcherModal({defaultLangSet=true}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();

  useEffect(() => {
    if (!defaultLangSet) {
      const isLanguageSet = searchParams.get('langSet')
      if (!isLanguageSet) 
      {openModal()}
    }
  },  [router.isReady]);

  function switchLocale(nextLocale) {
    startTransition(() => {
      router.replace(getURLWithSearchParams(pathname, 'langSet', true), {locale: nextLocale});
    });
    closeModal();
  }

  function openModal() {
    document.getElementById('localeSwitcherModal').showModal()
  }

  function closeModal() {
    document.getElementById('localeSwitcherModal').close()
  }

  const formatLocaleSwitcherText = (localeSwitcherText) => {
    // Ensure the current locale exists in the locales object
    if (!(currentLocale in localeSwitcherText)) {
      throw new Error("Current locale not found in locale map.");
    }
    // Extract the value for the current locale
    const currentValue = localeSwitcherText[currentLocale];
    // Remove the current locale from the list and then concatenate with the current value
    const otherValues = Object.entries(localeSwitcherText)
      .filter(([key]) => key !== currentLocale)
      .map(([, value]) => value)
      .join('/');
  
    // Concatenate the current locale's value with the other values, separated by '/'
    return `${currentValue}/${otherValues}`;
  };

  return (
    <div>
      <button className="btn bg-whatsapp-prompt text-white" onClick={openModal}>{formatLocaleSwitcherText(localeSwitcherButtonText)}</button>
      <dialog id="localeSwitcherModal" className="modal">
        <div className="modal-box modal-action join join-vertical">
        <div className='p-2'>{formatLocaleSwitcherText(localeSwitcherModalLabels)}</div>
        {Object.entries(localeNames).map(([localeID, localeName]) => (
          <button className="btn" key={localeID}
          disabled={isPending} onClick={() => switchLocale(localeID)}>{localeName}</button>
        ))}
        </div>
      </dialog>
    </div>
  );
}
