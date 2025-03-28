"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bike_route_1 = require("../src/app/modules/bike/bike.route");
const app = (0, express_1.default)();
// Middleware parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.use('/api', bike_route_1.bikeRoutes);
app.get('/', (req, res) => {
    res.send("welcome to out bike store API!");
});
exports.default = app;
