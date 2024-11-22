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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBike = exports.updateBike = exports.getBikeById = exports.getAllBikes = exports.createBike = void 0;
const bike_model_1 = __importDefault(require("./bike.model"));
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = new bike_model_1.default(data);
    return yield bike.save();
});
exports.createBike = createBike;
const getAllBikes = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchTerm
        ? {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        }
        : {};
    return yield bike_model_1.default.find(query);
});
exports.getAllBikes = getAllBikes;
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bike_model_1.default.findById(id);
});
exports.getBikeById = getBikeById;
const updateBike = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bike_model_1.default.findByIdAndUpdate(id, data, { new: true });
    return bike;
});
exports.updateBike = updateBike;
const deleteBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield bike_model_1.default.findByIdAndDelete(id);
});
exports.deleteBike = deleteBike;
