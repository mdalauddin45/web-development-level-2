"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../module/user/user.route");
const blog_route_1 = require("../module/blog/blog.route");
const admin_route_1 = require("../module/admin/admin.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.userRoutes,
    },
    {
        path: "/blogs",
        route: blog_route_1.blogRoutes,
    },
    {
        path: "/admin",
        route: admin_route_1.adminRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
