"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
router.post('/api/v1/products', bike_controller_1.createBikeHandler);
router.get('/api/v1/products', bike_controller_1.getAllBikesHandler);
// router.get('/api/v1/products/:productId', getBikeByIdHandler);
// router.put('/api/v1/products/:productId', updateBikeHandler);
router.delete('/api/v1/products/:productId', bike_controller_1.deleteBikeHandler);
exports.bikeRoutes = router;
