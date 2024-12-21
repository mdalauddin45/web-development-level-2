"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('', (0, auth_1.authMiddleware)(user_constant_1.USER_ROLE.user), blog_controller_1.BlogControllers.createBlog);
router.put('/:id', blog_controller_1.BlogControllers.updateBlog);
router.delete('/:id', blog_controller_1.BlogControllers.deleteBlog);
router.get('', blog_controller_1.BlogControllers.getAllBlog);
exports.blogRoutes = router;
