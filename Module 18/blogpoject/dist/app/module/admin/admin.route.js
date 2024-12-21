"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.patch('/users/:id/block', (0, auth_1.default)("admin"), admin_controller_1.AdminControllers.updateUser);
router.delete('/blogs/:id', (0, auth_1.default)("admin"), admin_controller_1.AdminControllers.deleteBlog);
exports.adminRoutes = router;
