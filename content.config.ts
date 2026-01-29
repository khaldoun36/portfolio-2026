import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md", // Looks for files in content/blog/
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        // We will calculate this server-side or make it optional
        readingMinutes: z.number(),
      }),
    }),
  },
});
