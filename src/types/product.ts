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

export const productSchema = z
  .object({
    name: z.string().min(6),
    description: z.string().min(15).max(1500),
    variant: variantSchema.array().default([]),
    category: z.string().min(1),
  })
  .refine((ctx) =>
    ctx.variant.length <= 0 ? "Please insert your variant products" : false
  );

export const promoSchema = z
  .object({
    code: z.string().min(3),
    amount: z
      .string()
      .refine((val) => !isNaN(Number(val)), { message: "Invalid number" })
      .transform((val) => Number(val))
      .pipe(z.number().min(0).max(100)),
    expireAt: z.date({ required_error: "A date of birth is required." }),
    allowedProducts: z.array(z.string()),
  })
  .refine(
    (data) => data.allowedProducts.length <= 0 || data.allowedProducts === null,
    {
      message: "Please insert allowed products",
    }
  );

export type PromoSchemaT = z.infer<typeof promoSchema>;

export type VariantSchemaT = z.infer<typeof variantSchema>;

export type ProductSchemaT = z.infer<typeof productSchema>;
