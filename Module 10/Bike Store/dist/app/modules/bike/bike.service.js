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
const createBikeIntoDB = (bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.create(bikeData);
    return result;
});
const getAllBikeFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.find();
    return result;
});
const getSingleBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.findById(id);
    return result;
});
const updateBikeInDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.Bike.updateOne({ _id: id }, { isDeleted: true });
    return result;
});
exports.BikeServices = {
    createBikeIntoDB,
    getAllBikeFromDB,
    getSingleBikeFromDB,
    deleteBikeFromDB,
    updateBikeInDB,
};
