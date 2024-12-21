import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AdminServices } from "./admin.service";
import { BlogServices } from "../blog/blog.service";
import User from "../user/user.model";

const updateUser = catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);

      if (!user) {
        return sendResponse(res, {
          statusCode: httpStatus.NOT_FOUND,
          success: false,
          message: "User not found",
          error: { details: "The provided user ID does not exist." },
        });
      }
  
      const result = await AdminServices.updateUserInDB(id, {isBlocked: true});
      sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User blocked successfully",
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
      const blog = await User.findById(id);

      if (!blog) {
        return sendResponse(res, {
          statusCode: httpStatus.NOT_FOUND,
          success: false,
          message: "Blog not found",
          error: { details: "The provided blog ID does not exist." },
        });
      }
      const result = await BlogServices.deleteBlogFromDB(id);
      sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog Delete successfully",
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
  export const AdminControllers = {
    updateUser,
    deleteBlog
  }