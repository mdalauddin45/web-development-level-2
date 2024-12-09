import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

router.get('/products', BikeControllers.getAllBikes);
router.get('/products/:productId', BikeControllers.getSingleBike);
router.get('/orders/revenue', BikeControllers.getRevenue);
router.post('/products', BikeControllers.createBike);
router.post('/orders', BikeControllers.placeOrder);
router.put('/products/:productId', BikeControllers.updateBike);
router.delete('/products/:productId', BikeControllers.deleteBike);

export const bikeRoutes = router;