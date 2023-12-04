"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const auth_controller_1 = require("../controller/auth.controller");
const middlewares_1 = require("../middlewares");
exports.authRoute = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: (0, middlewares_1.CreateDiskStorage)("pendingUser") });
// log in
exports.authRoute.post("/register", upload.single("avatar"), auth_controller_1.registration);
exports.authRoute.post("/confirm-registration", auth_controller_1.confirmRegistration);
exports.authRoute.post("/login", auth_controller_1.logIn);
exports.authRoute.patch("/reset-password", auth_controller_1.resetPassword);
exports.authRoute.patch("/confirm-reset-password", auth_controller_1.confirmResetPassword);
exports.authRoute.get("/new-jwt-token", auth_controller_1.newJWT_Token);
//! Uncompleted
exports.authRoute.post("/forgot-password", auth_controller_1.forgotPassword);
exports.authRoute.post("/confirm-forgot-password", auth_controller_1.confirmForgotPassword);
//# sourceMappingURL=auth.router.js.map