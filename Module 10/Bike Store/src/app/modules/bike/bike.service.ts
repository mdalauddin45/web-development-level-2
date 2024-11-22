import { IBike } from "./bike.interface";
import { Bike } from "./bike.model";
import mongoose from "mongoose";


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
const updateBikeInDB = async (id: string, updatedData: Partial<IBike>) => {
  const result = await Bike.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  getBikesBySearchTerm,
  getSingleBikeFromDB,
  deleteBikeFromDB,
  updateBikeInDB,
};
