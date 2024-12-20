import { Model } from "mongoose";
import { USER_ROLE } from './user.constant';

export interface IUser{
    name: string;
    email: string;
    password: string;
    role?:'user'| 'admin';
    isBlocked?: boolean;
}
export type ILoginUser = {
    email:string;
    password: string;
 };

 export interface UserModel extends Model<IUser> {
    //instance methods for checking if the user exist
    isUserExists(email: string): Promise<IUser | null>;
    isUserExistsById(id: string): Promise<IUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
  }
export type TUserRole = keyof typeof USER_ROLE;