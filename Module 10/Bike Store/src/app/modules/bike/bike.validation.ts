import { z } from "zod";

export const bikeValidationSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string(),
  description: z.string(),
  quantity: z.number().int().min(0, "Quantity must be a positive integer"),
  inStock: z.boolean(),
});

export const createOrderSchema = z.object({
  email: z.string(),
  product: z.string(),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
  totalPrice: z.number().min(0, "Total price must be a positive number"),
});

export const bikeValidation = {
  bikeValidationSchema,
  createOrderSchema,
};
