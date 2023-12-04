"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const middlewares_1 = require("../middlewares");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", user_controller_1.getAllUser);
exports.userRouter.get("/info", middlewares_1.isTokenVerify, user_controller_1.UsrInfo);
exports.userRouter
    .route("/:id")
    .get(user_controller_1.getSingleUser)
    .delete(user_controller_1.deleteUser)
    .patch(user_controller_1.updateUser);
//# sourceMappingURL=user.route.js.map