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
exports.UserServices = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const config_1 = __importDefault(require("../../config"));
const auth_1 = require("../../utils/auth");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(userData);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: payload.email });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user is not found !');
    }
    const isBlocked = user === null || user === void 0 ? void 0 : user.isBlocked;
    if (isBlocked) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'This user is isBlocked !');
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid credentials');
    }
    // if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    //   throw new AppError(httpStatus.FORBIDDEN, 'Invalid credentials',);
    const jwtPayload = {
        email: user.email, password: user.password
    };
    const accessToken = (0, auth_1.createToken)(jwtPayload, config_1.default.JWT_SECRET_KEY, config_1.default.jwt_access_expires_in);
    const refreshToken = (0, auth_1.createToken)(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.UserServices = {
    createUserIntoDB,
    loginUser
};
