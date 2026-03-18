import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const initiatives = defineCollection({
  // এটি সরাসরি তোমার initiatives ফোল্ডারের .md ফাইলগুলো পড়বে
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/initiatives" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(), // ছবি না থাকলে যেন এরর না দেয় তাই optional রাখা ভালো
    date: z.coerce.date(), // এটি ব্যবহার করলে সর্টিং করা সহজ হবে
  }),
});

const notices = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notices" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { initiatives, notices };