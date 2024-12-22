import { ILoginUser, IUser } from "./user.interface";
import User from "./user.model";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import config from "../../config";
import { createToken } from "../../utils/auth";

const createUserIntoDB = async (userData: IUser) => {
  userData.role= 'admin';
  const result = await User.create(userData);
  return result;
};
const loginUser = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "This user is not found !");
  }
  const isBlocked = user?.isBlocked;

  if (isBlocked) {
    throw new AppError(StatusCodes.FORBIDDEN, "This user is isBlocked !");
  }
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(StatusCodes.FORBIDDEN, "Password do not matched");

  const jwtPayload = {
    id:user?.id,
    email: user?.email,
    role: user?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_SECRET_KEY as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
};
