import { Blog } from "../blog/blog.model";
import { IUser } from "../user/user.interface";
import User from "../user/user.model";

const updateUserInDB = async (id: string, updateData: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};
const deleteUserFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;
  };
export const AdminServices = {
    updateUserInDB,
    deleteUserFromDB
}