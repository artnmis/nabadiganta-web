import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // এখানে 'astro:loaders' এর বদলে 'astro/loaders' (স্ল্যাশ) ব্যবহার করে দেখো

// ১. Initiatives Collection
const initiatives = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/initiatives" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

// ২. Notices Collection
const notices = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notices" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { initiatives, notices };