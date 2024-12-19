import { Model } from "mongoose";

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
    isUserExists(id: string): Promise<IUser | null>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
  }