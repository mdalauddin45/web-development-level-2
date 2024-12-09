"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.get('/products', bike_controller_1.BikeControllers.getAllBikes);
router.get('/products/:productId', bike_controller_1.BikeControllers.getSingleBike);
router.get('/orders/revenue', bike_controller_1.BikeControllers.getRevenue);
router.post('/products', bike_controller_1.BikeControllers.createBike);
router.post('/orders', bike_controller_1.BikeControllers.placeOrder);
router.put('/products/:productId', bike_controller_1.BikeControllers.updateBike);
router.delete('/products/:productId', bike_controller_1.BikeControllers.deleteBike);
exports.bikeRoutes = router;
