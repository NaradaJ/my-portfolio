import { getCollection } from 'astro:content';

/** Published journal entries, newest first. Drafts are hidden. */
export async function getEntries() {
  return (await getCollection('journal', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
