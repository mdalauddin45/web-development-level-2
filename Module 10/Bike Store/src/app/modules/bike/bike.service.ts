import { IBike, IOrder } from "./bike.interface";
import { Bike, Order } from "./bike.model";
import mongoose from "mongoose";
import { Types } from 'mongoose';

const createBikeIntoDB = async (bikeData: IBike) => {
  const result = await Bike.create(bikeData);
  return result;
};
const getAllBikeFromDB = async () => {
  const result = await Bike.find();
  return result;
};
const getBikesBySearchTerm = async (searchTerm: string) => {
  searchTerm = searchTerm.trim().toLowerCase();
  return await Bike.find({
    $or: [
      { category: { $regex: searchTerm, $options: "i" } },
      { name: { $regex: searchTerm, $options: "i" } },
      { brand: { $regex: searchTerm, $options: "i" } },
    ],
  });
};
const getSingleBikeFromDB = async (id: string) => {
  const result = await Bike.findById(id);
  return result;
};

const deleteBikeFromDB = async (id: string) => {
  const result = await Bike.findByIdAndDelete(id);
  return result;
};
const updateBikeInDB = async (id: string, updateData: Partial<IBike>) => {
  return await Bike.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

const placeOrder = async (
  email: string,
  product: string,
  quantity: number,
  totalPrice: number
) => {
  const productObjectId = new Types.ObjectId(product);
  const bike = await Bike.findById(product);
  if (!bike) {
    throw new Error("Bike not found");
  }

  if (bike.quantity < quantity) {
    throw new Error("Insufficient stock");
  }
  bike.quantity -= quantity;
  if (bike.quantity === 0) {
    bike.inStock = false;
  }
  await bike.save();
  const order = new Order({
    email,
    product: productObjectId,
    quantity,
    totalPrice,
  });
  await order.save();
  return order;
};
const calculateTotalRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' }, 
      },
    },
  ]);

  return revenue[0]?.totalRevenue || 0; 
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  getBikesBySearchTerm,
  getSingleBikeFromDB,
  deleteBikeFromDB,
  updateBikeInDB,
  placeOrder,
  calculateTotalRevenue,
};
