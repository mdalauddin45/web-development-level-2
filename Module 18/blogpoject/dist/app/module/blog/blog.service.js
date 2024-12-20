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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = exports.createBlogIntoDB = void 0;
const blog_model_1 = require("./blog.model");
// const createBlogIntoDB = async (title:string, content:string, author: ObjectId) => {
//   const result = await Blog.create({
//     title,
//     content,
//     author,
//   });
//   return result;
// };
const createBlogIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(data);
    return result;
});
exports.createBlogIntoDB = createBlogIntoDB;
const getAllBlogFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.find();
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
