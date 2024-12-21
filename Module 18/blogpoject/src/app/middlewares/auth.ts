import { StatusCodes } from "http-status-codes";
import User from "../module/user/user.model";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { TUserRole } from "../module/user/user.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized!");
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;
    console.log(decoded);
    // checking if the user is exist
    const { role, email} = decoded;
  const user = await User.findOne({ email });
    
  if (!user) {
    throw new Error('This user is not found !')
  }
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, "This user is not found !");
    }
    // checking if the user is already deleted

    const isBlocked = user?.isBlocked;
    if (isBlocked) {
      throw new AppError(StatusCodes.FORBIDDEN, "This user is Blocked !");
    }

    console.log(user.role)
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        "You are not authorized  hi!"
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
