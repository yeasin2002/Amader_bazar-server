"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraRoute = void 0;
const express_1 = __importDefault(require("express"));
const extra_controller_1 = require("../controller/extra.controller");
const middlewares_1 = require("../middlewares");
exports.extraRoute = express_1.default.Router();
exports.extraRoute.post("/newsletter", extra_controller_1.weeklyNewsletterConfirm);
exports.extraRoute.post("/contact", extra_controller_1.CollectContactInfo);
//  Image Sending Route
exports.extraRoute.get("/user-img/:src", (0, middlewares_1.sendImg)("users"));
exports.extraRoute.get("/product-img/:src", (0, middlewares_1.sendImg)("products"));
exports.extraRoute.get("/category-img/:src", (0, middlewares_1.sendImg)("categories"));
exports.extraRoute.get("/pending-user-img/:src", (0, middlewares_1.sendImg)("pendingUser"));
exports.extraRoute.get("/experiment-user-img/:src", (0, middlewares_1.sendImg)("experiment"));
//# sourceMappingURL=extra.route.js.map