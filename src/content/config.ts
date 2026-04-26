import { defineCollection, z } from "astro:content";

const furniture = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.string().optional(),
      status: z
        .enum(["Available", "Sold", "Commission Only"])
        .default("Available"),
      species: z.string(),
      dimensions: z.string(),
      coverImage: image(),
      order: z.number(),
    }),
});

export const collections = { furniture };
