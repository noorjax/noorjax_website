import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().default(''),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topics: z.array(z.string()).default([]),
    duration: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default(''),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-es' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().default(''),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogAr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-ar' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().default(''),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'blog-es': blogEs, 'blog-ar': blogAr, services, courses, cases };
