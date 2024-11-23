"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bike_route_1 = require("../src/app/modules/bike/bike.route");
const app = (0, express_1.default)();
const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
};
// Middleware parsers
app.use(express_1.default.json());
app.options("", (0, cors_1.default)(corsConfig));
app.use((0, cors_1.default)(corsConfig));
// Application routes
app.use('/api/v1/bikes', bike_route_1.bikeRoutes);
app.get('/', (req, res) => {
    res.send("Nice World");
});
exports.default = app;
