import { Schema, model } from "mongoose";
import { IBike,IOrder } from "./bike.interface";

const bikeSchema = new Schema<IBike>(
  {
    name: {
      type: String,
      required: [true, "Bike name is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    inStock: {
      type: Boolean,
      required: [true, "In-stock status is required"],
    },
  },
  {
    timestamps: true,
  }
);

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    product: {
      type: String,
      ref: "Bike",
      required: [true, "Product is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },
  },
  { timestamps: true }
);

export const Bike = model<IBike>("Bike", bikeSchema);
export const Order = model<IOrder>("Order", orderSchema);
