"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    jwt_access_expires_in: process.env.jwt_access_expires_in,
    jwt_refresh_secret: process.env.jwt_refresh_secret,
    jwt_refresh_expires_in: process.env.jwt_refresh_expires_in,
    NODE_ENV: process.env.NODE_ENV,
    jwt_access_secret: process.env.jwt_access_secret
};
