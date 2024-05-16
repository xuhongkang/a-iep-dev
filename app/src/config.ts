import {Pathnames} from 'next-intl/navigation';

export const localeNames = {en: 'English', es: 'Español'} as const;
export const locales = Object.keys(localeNames);
export const localeSwitcherButtonText = {en: 'Language', es: 'Idioma'} as const;
export const localeSwitcherModalLabels = {en: 'Choose Your Language', es: 'Elige tu idioma'} as const;
export const pathnames = {
  '/': '/',
  '/upload': '/upload',
  '/dashboard': '/dashboard',
  '/workspace': {
    en: '/workspace',
    es: '/interactivo'
  },

} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
