import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // New in the Content Layer API

const furniture = defineCollection({
  // The 'loader' is now required.
  // It tells Astro to look for .md or .mdx files in this specific directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/furniture" }),
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
