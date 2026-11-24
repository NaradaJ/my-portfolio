import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    ticket: z.string(),
    kind: z.string(),
    summary: z.string(),
    role: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { work };
