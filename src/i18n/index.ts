import en from './en.json';
import es from './es.json';
import ar from './ar.json';

const translations = { en, es, ar } as const;

export type Locale = keyof typeof translations;
export const locales: Locale[] = ['en', 'es', 'ar'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ar: 'العربية',
};

export function t(locale: Locale): typeof en {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang as Locale)) return lang as Locale;
  return defaultLocale;
}

export function getAlternateUrl(url: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(url);
  return url.pathname.replace(`/${currentLocale}/`, `/${targetLocale}/`);
}

// Locales shown in the language switcher (ar excluded for now but pages still exist)
const visibleLocales: Locale[] = ['en', 'es'];

export function getOtherLocales(currentLocale: Locale): Locale[] {
  return visibleLocales.filter((l) => l !== currentLocale);
}
