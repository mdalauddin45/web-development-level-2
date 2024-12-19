import { object } from "zod";
import { ILoginUser, IUser, UserModel } from './user.interface';
import User from "./user.model";
import httpStatus from 'http-status';
import AppError from "../../errors/AppError";
import config from "../../config";
import { createToken } from "../../utils/auth";
import { userLoginSchema } from "./user.validation";

const createUserIntoDB = async (userData: IUser) => {
  const result = await User.create(userData);
  return result;
};
const loginUser = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email } );
  console.log('Stored Hashed Password:', user);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    const isBlocked = user?.isBlocked;
  
    if (isBlocked) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is isBlocked !');
    }
    console.log(payload.password);
    console.log(User.isPasswordMatched);
    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
      throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  
    const jwtPayload = {
      email: user.email, password: user.password 
    };
  
    const accessToken = createToken(
      jwtPayload,
      config.JWT_SECRET_KEY as string,
      config.jwt_access_expires_in as string,
    );
  
    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expires_in as string,
    );
  
    return {
      accessToken,
      refreshToken,
    };
  };

export const UserServices = {
  createUserIntoDB,
  loginUser
};
