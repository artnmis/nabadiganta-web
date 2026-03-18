import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // নতুন লুডার ইম্পোর্ট

const initiatives = defineCollection({
  // 'type: content' এর বদলে এখন loader ব্যবহার হয়
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/initiatives" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date().or(z.string()),
  }),
});

const notices = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notices" }),
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()),
  }),
});

export const collections = { initiatives, notices };