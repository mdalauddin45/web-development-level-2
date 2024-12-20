import { Router } from "express";
import { userRoutes } from "../module/user/user.route";
import { blogRoutes } from "../module/blog/blog.route";
import { adminRoutes } from "../module/admin/admin.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/blogs",
    route: blogRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
