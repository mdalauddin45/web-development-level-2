import { error } from "console";
import { Response } from "express";
interface IErrorResponse {
  details: string;
  stack?: string;
}
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  error?: IErrorResponse;
  stack?: string;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    statuscode: data.statusCode,
    data: data.data,
    error: data.error?.details,
    stack: data.stack,
  });
};

export default sendResponse;
