"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedRoute = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
exports.seedRoute = express_1.default.Router();
const seed_controller_1 = require("../controller/seed.controller");
const middlewares_1 = require("../middlewares");
const upload = (0, multer_1.default)({ storage: (0, middlewares_1.CreateDiskStorage)("experiment") });
exports.seedRoute.route("/user").post(seed_controller_1.seedNewUser).delete(seed_controller_1.removeAllUser);
exports.seedRoute.route("/category").post(seed_controller_1.seedCategory).delete(seed_controller_1.DeleteAllCategories);
exports.seedRoute.route("/product").post(seed_controller_1.seedNewProduct);
exports.seedRoute.get("/test", seed_controller_1.experiment);
exports.seedRoute.post("/test", seed_controller_1.experimentPost);
//# sourceMappingURL=seed.route.js.map