"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post('/create-bike', bike_controller_1.BikeControllers.createBike);
router.get('/', bike_controller_1.BikeControllers.getAllBikes);
router.get('/:id', bike_controller_1.BikeControllers.getSingleBike);
router.delete('/:id', bike_controller_1.BikeControllers.deleteBike);
router.put('/:id', bike_controller_1.BikeControllers.updateBike);
router.post('/orders', bike_controller_1.BikeControllers.placeOrder);
router.get('/orders/revenue', bike_controller_1.BikeControllers.getRevenue);
exports.bikeRoutes = router;
