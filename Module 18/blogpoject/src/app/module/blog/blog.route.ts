import express from 'express';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';
const router = express.Router();


router.post('',auth('user'),BlogControllers.createBlog);
router.put('/:id',auth('user','admin'), BlogControllers.updateBlog);
router.delete('/:id',auth('user','admin'), BlogControllers.deleteBlog);
router.get('', BlogControllers.getAllBlog);

export const blogRoutes = router;