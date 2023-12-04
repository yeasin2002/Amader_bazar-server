"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
// import { OrderProduct } from "../../model";
const utils_1 = require("../../utils");
const rootRoute = async (req, res) => {
    try {
        (0, utils_1.successResponse)({
            res,
            message: "Your Order has been placed successfully",
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.rootRoute = rootRoute;
//# sourceMappingURL=createRoute.controller.js.map