"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('', (0, auth_1.default)('user'), blog_controller_1.BlogControllers.createBlog);
router.put('/:id', (0, auth_1.default)('user', 'admin'), blog_controller_1.BlogControllers.updateBlog);
router.delete('/:id', (0, auth_1.default)('user', 'admin'), blog_controller_1.BlogControllers.deleteBlog);
router.get('', blog_controller_1.BlogControllers.getAllBlog);
exports.blogRoutes = router;
