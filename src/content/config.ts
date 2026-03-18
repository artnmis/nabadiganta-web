import { defineCollection, z } from 'astro:content';

const initiatives = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date().or(z.string()),
  }),
});

const notices = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()),
  }),
});

export const collections = { initiatives, notices };