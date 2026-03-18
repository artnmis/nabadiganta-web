import { defineCollection, z } from 'astro:content';

const initiatives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(), // z.date() এর বদলে z.coerce.date() ব্যবহার করো (নিরাপদ)
    image: z.string().optional(),
  }),
});

const notices = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { initiatives, notices };