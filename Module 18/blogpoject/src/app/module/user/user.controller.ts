import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes"
import config from "../../config";

const createUser = catchAsync(async (req, res) => {
  try {
    const userData = req.body;

    const result = await UserServices.createUserIntoDB(userData);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Validation error",
      error: {
        details: typedError.message || "Invalid user data",
        stack:
          process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
      },
    });
  }
});
const loginUser = catchAsync(async (req, res) => {
  try{
    const result = await UserServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: {
      accessToken
    },
  });
  }catch (error: unknown) {
    const typedError = error as Error;
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Invalid credentials",
      error: {
        details: typedError.message || "Invalid user data",
        stack:
          process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
      },
    stack: "error stack",
    });
  }
});

export const UserControllers = {
  createUser,
  loginUser
};
