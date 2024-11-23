import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

router.post('/create-bike', BikeControllers.createBike);
router.get('/', BikeControllers.getAllBikes);
router.get('/:id', BikeControllers.getSingleBike);
router.delete('/:id', BikeControllers.deleteBike);
router.put('/:id', BikeControllers.updateBike);
router.post('/orders', BikeControllers.placeOrder);
router.get('/orders/revenue', BikeControllers.getRevenue);

export const bikeRoutes = router;