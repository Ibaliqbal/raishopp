import { z } from "zod";

export const updateStoreSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type UpdateStoreSchemaT = z.infer<typeof updateStoreSchema>;

export const newsSchema = z.object({
  description: z.string().min(10),
  medias: z
    .object({
      keyFile: z.string(),
      name: z.string(),
      url: z.string(),
      type: z.string(),
    })
    .array()
    .default([]),
});

export type NewsSchemaT = z.infer<typeof newsSchema>;
