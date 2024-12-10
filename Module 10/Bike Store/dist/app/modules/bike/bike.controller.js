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
exports.BikeControllers = void 0;
const bike_service_1 = require("./bike.service");
const bike_validation_1 = require("./bike.validation");
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeData = req.body;
        const zodParsedData = bike_validation_1.bikeValidation.bikeValidationSchema.parse(bikeData);
        const result = yield bike_service_1.BikeServices.createBikeIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: 'Bike is created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getAllBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        let result;
        if (searchTerm) {
            result = yield bike_service_1.BikeServices.getBikesBySearchTerm(searchTerm);
        }
        else {
            result = yield bike_service_1.BikeServices.getAllBikeFromDB();
        }
        res.status(200).json({
            success: true,
            message: 'Bikes retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeId = req.params.productId;
        const result = yield bike_service_1.BikeServices.getSingleBikeFromDB(bikeId);
        console.log(result);
        res.status(200).json({
            success: true,
            message: 'Bike is retrieved succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const updateBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const updateData = req.body;
        const updatedBike = yield bike_service_1.BikeServices.updateBikeInDB(id, updateData);
        res.status(200).json({
            success: true,
            message: 'Bike updated successfully',
            data: updatedBike,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const deleteBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield bike_service_1.BikeServices.deleteBikeFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Bike deleted succesfully',
            data: {},
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const placeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, product, quantity, totalPrice } = req.body;
        const validatedData = bike_validation_1.bikeValidation.createOrderSchema.parse({
            email,
            product,
            quantity,
            totalPrice,
        });
        const order = yield bike_service_1.BikeServices.placeOrder(validatedData.email, validatedData.product, validatedData.quantity, validatedData.totalPrice);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: order,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield bike_service_1.BikeServices.calculateTotalRevenue();
        res.status(200).json({
            success: true,
            message: 'Revenue calculated successfully',
            data: {
                totalRevenue,
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
exports.BikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
    deleteBike,
    updateBike,
    placeOrder,
    getRevenue,
};
