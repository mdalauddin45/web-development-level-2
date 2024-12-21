import { ObjectId } from "mongoose";
import { IUser } from "../user/user.interface";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import QueryBuilder from "../../builder/querybuilder";

interface CreateBlogInput {
  title: string;
  content: string;
  author: string;
  // author: ObjectId;
}

export const createBlogIntoDB = async (data: CreateBlogInput) => {
  const newBlog = await Blog.create(data);
  return newBlog;
};

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(
    Blog.find(),
    query
  )
    .search(['title', 'content'])  
    .filter()
    .sort()
    .paginate()
    .select();

  const result = await blogQuery.modelQuery;
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
