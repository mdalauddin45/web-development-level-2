import express from 'express';
import { BikeControllers } from './bike.controller';
const router = express.Router();

router.post('/create-bike', BikeControllers.createBike);

// router.get('/:studentId', BikeControllers.getSingle);

// router.delete('/:studentId', BikeControllers.deleteStudent);

// router.get('/', BikeControllers.getAllStudents);

export const bikeRoutes = router;