"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send({ status: true, message: "welcome to our Blog Project!" });
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use("*", (req, res) => {
    res.status(404).json({
        status: false,
        message: "Route not found",
    });
});
exports.default = app;
