import { defineCollection, z } from "astro:content";


const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    published: z.boolean(),
    featured: z.boolean().optional()
  }),
})

export const collections = {blog}