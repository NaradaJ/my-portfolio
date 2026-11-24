import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { profile, journey, href } from '../data/site';

// A plain-text summary for AI answer engines (https://llmstxt.org).
export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(href(p), site).href;
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);

  const body = `# ${profile.name}

> ${profile.description}

${profile.name} is a ${profile.jobTitle} at ${profile.employer.name}, based in ${profile.location.label}. He works on CMS publishing, website QA, SEO and accessibility for global clients, and builds software in C#/.NET and Python.

## Career
${journey.map((j) => `- ${j.when}: ${j.title}. ${j.desc}`).join('\n')}

## Education
${profile.education.map((e) => `- ${e.name}: ${e.detail}`).join('\n')}

## Skills
${profile.knowsAbout.join(', ')}

## Projects
${work.map((w) => `- [${w.data.title}](${abs(`/work/${w.id}/`)}): ${w.data.summary}`).join('\n')}

## Links
- Website: ${abs('/')}
- LinkedIn: ${profile.links.linkedin}
- GitHub: ${profile.links.github}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
