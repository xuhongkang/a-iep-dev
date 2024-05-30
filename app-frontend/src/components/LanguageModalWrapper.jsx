import {useLocale, useTranslations} from 'next-intl';
import {LanguageModal} from '@/components/LanguageModal'

export default function LanguageModalWrapper() {
    const t = useTranslations('Metadata');
    return (<LanguageModal />)
}