import { z } from "zod";

export const variantSchema = z.object({
  name_variant: z.string(),
  price: z
    .string()
    .refine((val) => !isNaN(Number(val)), { message: "Invalid number" })
    .transform((val) => Number(val))
    .pipe(z.number()),
  stock: z
    .string()
    .refine((val) => !isNaN(Number(val)), { message: "Invalid number" })
    .transform((val) => Number(val))
    .pipe(z.number()),
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

export const createProductSchema = z
  .object({
    name: z.string().min(6),
    description: z.string().min(15).max(1500),
    variant: variantSchema.array().default([]),
    category: z.string().min(1),
  })
  .refine((ctx) =>
    ctx.variant.length <= 0 ? "Please insert your variant products" : false
  );

export type VariantSchemaT = z.infer<typeof variantSchema>;

export type CreateProductSchemaT = z.infer<typeof createProductSchema>;
