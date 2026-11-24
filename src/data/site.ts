// Profile text lives in profile.json so it can be edited in Pages CMS (or on GitHub) without touching code.
import data from './profile.json';

export const profile = {
  ...data,
  title: data.seoTitle,
  description: data.seoDescription,
  location: { label: data.location, city: data.location.split(',')[0].trim(), country: 'LK' },
};

export const journey = data.journey;
export const faq = data.faq;

/** Prefix an internal path with the configured base path. */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
