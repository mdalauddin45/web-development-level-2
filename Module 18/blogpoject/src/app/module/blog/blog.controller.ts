import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log("this is user",req.user);
    const result = await BlogServices.createBlogIntoDB({
      title,
      content,
    });
    const populatedBlog = await result.populate("author", "name email _id");
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blog created successfully",
      data: populatedBlog,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
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
    const result = await BlogServices.getAllBlogFromDB();
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blogs fetched successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
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
    console.log("given id: " + id);
    const updateData = req.body;

    const result = await BlogServices.updateBlogInDB(id, updateData);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blog update successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
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
    const result = await BlogServices.deleteBlogFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
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
