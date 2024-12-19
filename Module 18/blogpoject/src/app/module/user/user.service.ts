import { IUser } from "./user.interface";
import User from "./user.model";

const createUserIntoDB = async (userData: IUser) => {
  const result = await User.create(userData);
  return result;
};
export const UserServices = {
  createUserIntoDB,
};
