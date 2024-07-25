import { z } from "zod"

export const candleFormSchema = z
  .object({
    id: z.number().int().positive(),
    // TODO IMAGE URL WILL GO HERE
    name: z.string().trim().min(1, { message: "Name is required" }).max(50),
    price: z.number().positive(),
  })
  .transform((data) => ({
    ...data,
  }))

export type TCandleForm = z.infer<typeof candleFormSchema>
