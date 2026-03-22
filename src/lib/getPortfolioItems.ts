import { portfolioItems } from './portfolioItems';
import { portfolioItemsEs } from './portfolioItems.es';
import { portfolioItemsAr } from './portfolioItems.ar';

const itemsByLocale: Record<string, typeof portfolioItems> = {
  en: portfolioItems,
  es: portfolioItemsEs,
  ar: portfolioItemsAr,
};

export function getPortfolioItems(locale: string) {
  return itemsByLocale[locale] || portfolioItems;
}
