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
exports.BlogControllers = exports.createBlog = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const blog_service_1 = require("./blog.service");
// const createBlog = catchAsync(async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const result = await BlogServices.createBlogIntoDB({
//       title,
//       content,
//     });
//     const populatedBlog = await result.populate("author", "name email _id");
//     sendResponse(res, {
//       statusCode: httpStatus.CREATED,
//       success: true,
//       message: "Blog created successfully",
//       data: populatedBlog,
//     });
//   } catch (error: unknown) {
//     const typedError = error as Error;
//     sendResponse(res, {
//       statusCode: httpStatus.BAD_REQUEST,
//       success: false,
//       message: "Validation error",
//       error: {
//         details: typedError.message || "Invalid blog data",
//         stack:
//           process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
//       },
//     });
//   }
// });
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // Retrieve user ID from the authenticated request
        const { title, content } = req.body;
        console.log(title, content, userId);
        const newBlog = yield blog_service_1.BlogServices.createBlogIntoDB({ title, content, author: userId });
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            success: true,
            message: "Blog created successfully",
            data: newBlog,
        });
    }
    catch (error) {
        const typedError = error;
        (0, sendResponse_1.default)(res, {
            statusCode: 400,
            success: false,
            message: "Failed to create blog",
            error: {
                details: typedError.message,
                stack: process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
            },
        });
    }
});
exports.createBlog = createBlog;
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_service_1.BlogServices.getAllBlogFromDB();
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Blogs fetched successfully",
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
                details: typedError.message || "Blogs fetched unsuccessfully!",
                stack: process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
            },
        });
    }
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("given id: " + id);
        const updateData = req.body;
        const result = yield blog_service_1.BlogServices.updateBlogInDB(id, updateData);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Blog update successfully",
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
                details: typedError.message || "Invalid Id",
                stack: process.env.NODE_ENV !== "production" ? typedError.stack : undefined,
            },
        });
    }
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield blog_service_1.BlogServices.deleteBlogFromDB(id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Blog created successfully",
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
exports.BlogControllers = {
    createBlog: exports.createBlog,
    deleteBlog,
    updateBlog,
    getAllBlog,
};
