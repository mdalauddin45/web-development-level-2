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
exports.BlogServices = exports.createBlogIntoDB = void 0;
const blog_model_1 = require("./blog.model");
const querybuilder_1 = __importDefault(require("../../builder/querybuilder"));
const createBlogIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newBlog = yield blog_model_1.Blog.create(data);
    return newBlog;
});
exports.createBlogIntoDB = createBlogIntoDB;
const getAllBlogFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogQuery = new querybuilder_1.default(blog_model_1.Blog.find(), query)
        .search(['title', 'content'])
        .filter()
        .sort()
        .paginate()
        .select();
    const result = yield blogQuery.modelQuery;
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
const updateBlogInDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.Blog.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
});
exports.BlogServices = {
    createBlogIntoDB: exports.createBlogIntoDB,
    getAllBlogFromDB,
    deleteBlogFromDB,
    updateBlogInDB,
};
