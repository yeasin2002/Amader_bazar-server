"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const category_controller_1 = require("../controller/category.controller");
const middlewares_1 = require("../middlewares");
exports.categoryRouter = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: (0, middlewares_1.CreateDiskStorage)("categories") });
exports.categoryRouter.get("/:title", category_controller_1.getCategoryByTitle);
exports.categoryRouter
    .route("/")
    .get(category_controller_1.getAllCategory)
    .post(upload.single("icon"), category_controller_1.createCategory);
exports.categoryRouter.route("/:id").delete(category_controller_1.deleteCategory);
//# sourceMappingURL=category.route.js.map