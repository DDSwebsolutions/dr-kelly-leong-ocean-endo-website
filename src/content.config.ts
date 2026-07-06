import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Education / blog collection. Typed frontmatter; the build fails on violations.
const education = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/education' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Dr. Kelly Kimiko Leong, DMD'),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      category: z.enum([
        'Root Canals',
        'Emergencies',
        'Procedures',
        'Patient Guides',
        'Technology',
      ]),
      readingTime: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { education };
