import { Schema, model } from "mongoose";
import { IUser,UserModel } from "./user.interface";

const userSchema = new Schema<IUser,UserModel>(
  {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      select: false,
    },
    role: {
      type: "string",
      enum: ["user", "admin"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);



const User = model<IUser,UserModel>('User', userSchema);

export default User;