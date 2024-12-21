"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const admin_service_1 = require("./admin.service");
const blog_service_1 = require("../blog/blog.service");
const user_model_1 = __importDefault(require("../user/user.model"));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            return (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.NOT_FOUND,
                success: false,
                message: "User not found",
                error: { details: "The provided user ID does not exist." },
            });
        }
        const result = yield admin_service_1.AdminServices.updateUserInDB(id, { isBlocked: true });
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "User blocked successfully",
        });
    }
    catch (error) {
        const typedError = error;
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "Validation error",
            error: {
                details: typedError.message || "Invalid Id",
                stack: process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
            },
        });
    }
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const blog = yield user_model_1.default.findById(id);
        if (!blog) {
            return (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.NOT_FOUND,
                success: false,
                message: "Blog not found",
                error: { details: "The provided blog ID does not exist." },
            });
        }
        const result = yield blog_service_1.BlogServices.deleteBlogFromDB(id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Blog Delete successfully",
            data: result,
        });
    }
    catch (error) {
        const typedError = error;
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "Validation error",
            error: {
                details: typedError.message || "Invalid blog data",
                stack: process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
            },
        });
    }
}));
exports.AdminControllers = {
    updateUser,
    deleteBlog
};
