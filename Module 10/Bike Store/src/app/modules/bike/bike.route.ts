import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

router.post('/create-bike', BikeControllers.createBike);
router.get('/', BikeControllers.getAllBikes);
router.get('/:id', BikeControllers.getSingleBike);
router.delete('/:id', BikeControllers.deleteBike);


export const bikeRoutes = router;