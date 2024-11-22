import express from 'express';
import {
  createBikeHandler,
  getAllBikesHandler,
  getBikeByIdHandler,
  updateBikeHandler,
  deleteBikeHandler,
} from './bike.controller';

const router = express.Router();

router.post('/api/v1/products', createBikeHandler);
router.get('/api/v1/products', getAllBikesHandler);
// router.get('/api/v1/products/:productId', getBikeByIdHandler);
// router.put('/api/v1/products/:productId', updateBikeHandler);
router.delete('/api/v1/products/:productId', deleteBikeHandler);

export const bikeRoutes=router;
