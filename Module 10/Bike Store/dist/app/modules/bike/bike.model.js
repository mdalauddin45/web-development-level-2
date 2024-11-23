"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Bike = void 0;
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Bike name is required"],
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    inStock: {
        type: Boolean,
        required: [true, "In-stock status is required"],
    },
}, {
    timestamps: true,
});
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    product: {
        type: String,
        ref: "Bike",
        required: [true, "Product is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"],
    },
}, { timestamps: true });
exports.Bike = (0, mongoose_1.model)("Bike", bikeSchema);
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
