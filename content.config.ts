import { defineCollection, z } from '@nuxt/content'

export const collections = {
  work: defineCollection({
    type: 'page',
    source: 'work/**/*.md',
    schema: z.object({
      title: z.string(),
      tagline: z.string(),
      year: z.union([z.number(), z.string()]),
      area: z.string(),
      cover: z.string().optional(),
      order: z.number().optional(),
      slug: z.string().optional(),
    }),
  }),
}
