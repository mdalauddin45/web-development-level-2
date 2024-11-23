import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

router.get('/', BikeControllers.getAllBikes);
router.get('/:id', BikeControllers.getSingleBike);
router.get('/orders/revenue', BikeControllers.getRevenue);
router.post('/create-bike', BikeControllers.createBike);
router.post('/orders', BikeControllers.placeOrder);
router.put('/:id', BikeControllers.updateBike);
router.delete('/:id', BikeControllers.deleteBike);

export const bikeRoutes = router;