import { ObjectId } from "mongoose";
import { IUser } from "../user/user.interface";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

// const createBlogIntoDB = async (title:string, content:string, author: ObjectId) => {
//   const result = await Blog.create({
//     title,
//     content,
//     author,
//   });
//   return result;
// };

export const createBlogIntoDB = async (data: Partial<IBlog>) => {
  const result = await Blog.create(data);
  return result;
};

const getAllBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
const updateBlogInDB = async (id: string, updateData: Partial<IBlog>) => {
  return await Blog.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  deleteBlogFromDB,
  updateBlogInDB,
};
