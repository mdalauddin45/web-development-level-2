"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Bike name is required'] },
    brand: { type: String, required: [true, 'Brand is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
    inStock: { type: Boolean, required: [true, 'In-stock status is required'] },
}, {
    timestamps: true,
});
exports.Bike = (0, mongoose_1.model)('Bike', bikeSchema);
