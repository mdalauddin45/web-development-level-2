import { IBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBikeIntoDB = async (bikeData: IBike) => {
  const result = await Bike.create(bikeData);
  return result;
};
const getAllBikeFromDB = async () => {
  const result = await Bike.find();
  return result;
};
const getSingleBikeFromDB = async (id: string) => {
  const result = await Bike.findById(id);
  return result;
};
const updateBikeInDB = async (id: string, updatedData: Partial<IBike>) => {
  const result = await Bike.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteBikeFromDB = async (id: string) => {
  const result = await Bike.updateOne({ _id: id }, { isDeleted: true });
  return result;
};
export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  getSingleBikeFromDB,
  deleteBikeFromDB,
  updateBikeInDB,
};
