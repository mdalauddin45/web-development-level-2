import Bike from './bike.model';
import { IBike } from './bike.interface';

export const createBike = async (data: IBike): Promise<IBike> => {
  const bike = new Bike(data);
  return await bike.save();
};

export const getAllBikes = async (searchTerm?: string): Promise<IBike[]> => {
  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  return await Bike.find(query);
};

export const getBikeById = async (id: string): Promise<IBike | null> => {
  return await Bike.findById(id);
};

export const updateBike = async (id: string, data: Partial<IBike>): Promise<IBike | null> => {
  const bike = await Bike.findByIdAndUpdate(id, data, { new: true });
  return bike;
};

export const deleteBike = async (id: string): Promise<void> => {
  await Bike.findByIdAndDelete(id);
};

