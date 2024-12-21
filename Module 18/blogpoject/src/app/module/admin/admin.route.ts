import express from 'express';
import { AdminControllers } from './admin.controller';
import auth from '../../middlewares/auth';
const router = express.Router();


router.patch('/users/:id/block',auth("admin"), AdminControllers.updateUser);
router.delete('/blogs/:id',auth("admin"), AdminControllers.deleteBlog);

export const adminRoutes = router;