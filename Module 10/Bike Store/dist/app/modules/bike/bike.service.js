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
exports.BikeServices = void 0;
const bike_model_1 = require("./bike.model");
const mongoose_1 = require("mongoose");
const createBikeIntoDB = (bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.create(bikeData);
    return result;
});
const getAllBikeFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.find();
    return result;
});
const getBikesBySearchTerm = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    searchTerm = searchTerm.trim().toLowerCase();
    return yield bike_model_1.Bike.find({
        $or: [
            { category: { $regex: searchTerm, $options: "i" } },
            { name: { $regex: searchTerm, $options: "i" } },
            { brand: { $regex: searchTerm, $options: "i" } },
        ],
    });
});
const getSingleBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.findById(id);
    return result;
});
const deleteBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.findByIdAndDelete(id);
    return result;
});
const updateBikeInDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bike_model_1.Bike.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
});
const placeOrder = (email, product, quantity, totalPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const productObjectId = new mongoose_1.Types.ObjectId(product);
    const bike = yield bike_model_1.Bike.findById(product);
    if (!bike) {
        throw new Error("Bike not found");
    }
    if (bike.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    bike.quantity -= quantity;
    if (bike.quantity === 0) {
        bike.inStock = false;
    }
    yield bike.save();
    const order = new bike_model_1.Order({
        email,
        product: productObjectId,
        quantity,
        totalPrice,
    });
    yield order.save();
    return order;
});
const calculateTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const revenue = yield bike_model_1.Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return ((_a = revenue[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.BikeServices = {
    createBikeIntoDB,
    getAllBikeFromDB,
    getBikesBySearchTerm,
    getSingleBikeFromDB,
    deleteBikeFromDB,
    updateBikeInDB,
    placeOrder,
    calculateTotalRevenue,
};
