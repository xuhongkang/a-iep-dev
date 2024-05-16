import WorkspacePage from '@/components/WorkspacePage'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Workspace({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Workspace2');
  
  return (
    <div className='flex flex-col items-start'>
      <WorkspacePage goBackText={t('goBackText')}
      digestTitle={t('digestTitle')} 
      digestDescription={t('digestDescription')} 
      accessError={t('accessError')} 
      accessMessage={t('accessMessage')} 
      accessMessage2={t('accessMessage2')} 
      accessPlaceholder={t('accessPlaceholder')} 
      accessSubmit={t('accessSubmit')} 
      downloadTabName={t('downloadTabName')} 
      textTabName={t('textTabName')} 
      servicesTabName={t('servicesTabName')} 
      goalsTabName={t('goalsTabName')} 
      scoresTabName={t('scoresTabName')} 
      chatbotTitle={t('chatbotTitle')} 
      chatbotDescription={t('chatbotDescription')} 
      sendButtonText={t('sendButtonText')} 
      p1={t('p1')} p2={t('p2')} p3={t('p3')} p4={t('p4')}
      detailText={t('detailText')}
      baselineText={t("baselineText")}
      pr1={t('pr1')} pr2={t('pr2')} pr3={t('pr3')}
      goalText={t('goalText')}
      startText={t('startText')}
      durationText={t('durationText')}
      frequencyText={t('frequencyText')}
      providerText={t('providerText')}
      commentsText={t('commentsText')}
      sendPlaceholderText={t('sendPlaceholderText')}
      showDigest={t("showDigest")} 
      showChatbot={t("showChatbot")}/>
    </div>
  );
}