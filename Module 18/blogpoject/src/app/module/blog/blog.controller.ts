import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";
import { string } from "zod";
import User from "../user/user.model";
import AppError from "../../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { StatusCodes } from "http-status-codes";
import { Blog } from "./blog.model";

const createBlog = catchAsync(async (req, res) => {
  try {
    const { title, content } = req.body;
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized!");
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;
    const {  email} = decoded;
    const user = await User.findOne({ email });
    const author = user?._id.toString() as string;
    const result = await BlogServices.createBlogIntoDB({ title, content,author });
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Validation error",
      error: {
        details: typedError.message || "Invalid blog data",
        stack:
          process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
      },
    });
  }
});

const getAllBlog = catchAsync(async (req, res) => {
  try {
    const result = await BlogServices.getAllBlogFromDB(req?.query);
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "Blogs fetched successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Validation error",
      error: {
        details: typedError.message || "Blogs fetched unsuccessfully!",
        stack:
          process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
      },
    });
  }
});

const updateBlog = catchAsync(async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const result = await BlogServices.updateBlogInDB(id, updateData);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "Blog update successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Validation error",
      error: {
        details: typedError.message || "Invalid Id",
        stack:
          process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
      },
    });
  }
});

const deleteBlog = catchAsync(async (req, res) => {
  try {
    const id = req.params.id;
    const existingBlog = await Blog.findById(id); 
    if (!existingBlog) {
      return sendResponse(res, {
        statusCode: StatusCodes.NOT_FOUND,
        success: false,
        message: "Blog not found",
      });
    }

    const result = await BlogServices.deleteBlogFromDB(id);
    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Validation error",
      error: {
        details: typedError.message || "Invalid blog data",
        stack:
          process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
      },
    });
  }
});

export const BlogControllers = {
  createBlog,
  deleteBlog,
  updateBlog,
  getAllBlog,
};
