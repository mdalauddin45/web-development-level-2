"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBikeHandler = exports.updateBikeHandler = exports.getBikeByIdHandler = exports.getAllBikesHandler = exports.createBikeHandler = void 0;
const bike_service_1 = require("./bike.service");
const createBikeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield (0, bike_service_1.createBike)(req.body);
        res.status(201).json({
            message: 'Bike created successfully',
            success: true,
            data: bike,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});
exports.createBikeHandler = createBikeHandler;
const getAllBikesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const bikes = yield (0, bike_service_1.getAllBikes)(searchTerm);
        res.status(200).json({
            message: 'Bikes retrieved successfully',
            status: true,
            data: bikes,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});
exports.getAllBikesHandler = getAllBikesHandler;
const getBikeByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield (0, bike_service_1.getBikeById)(req.params.productId);
        if (!bike) {
            return res.status(404).json({ message: 'Bike not found', status: false });
        }
        res.status(200).json({
            message: 'Bike retrieved successfully',
            status: true,
            data: bike,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});
exports.getBikeByIdHandler = getBikeByIdHandler;
const updateBikeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield (0, bike_service_1.updateBike)(req.params.productId, req.body);
        if (!bike) {
            return res.status(404).json({ message: 'Bike not found', status: false });
        }
        res.status(200).json({
            message: 'Bike updated successfully',
            status: true,
            data: bike,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});
exports.updateBikeHandler = updateBikeHandler;
const deleteBikeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, bike_service_1.deleteBike)(req.params.productId);
        res.status(200).json({
            message: 'Bike deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});
exports.deleteBikeHandler = deleteBikeHandler;
