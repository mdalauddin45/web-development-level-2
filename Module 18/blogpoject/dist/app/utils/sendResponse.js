"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    var _a;
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: data.success,
        message: data.message,
        statuscode: data.statusCode,
        data: data.data,
        error: (_a = data.error) === null || _a === void 0 ? void 0 : _a.details,
        stack: data.stack,
    });
};
exports.default = sendResponse;
