import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { AdminServices } from "./admin.service";
import { BlogServices } from "../blog/blog.service";

const updateUser = catchAsync(async (req, res) => {
    try {
      const id = req.params.id;
      const result = await AdminServices.updateUserInDB(id, {isBlocked: true});
        console.log(result);
      sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User blocked successfully",
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
      console.log(id);
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