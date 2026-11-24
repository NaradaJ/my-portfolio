import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { profile, href } from '../data/site';
import { getEntries } from '../data/journal';

export const GET: APIRoute = async ({ site }) => {
  const entries = await getEntries();
  return rss({
    title: `${profile.name} — Journal`,
    description: 'Notes on work, learning to code, photography and the small details.',
    site: new URL(href('/'), site).href,
    items: entries.map((e) => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.summary,
      link: href(`/journal/${e.id}/`),
    })),
  });
};
