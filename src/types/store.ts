import { z } from "zod";

export const updateStoreSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type UpdateStoreSchemaT = z.infer<typeof updateStoreSchema>;
