"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoute = void 0;
const utils_1 = require("../../utils");
const rootRoute = async (req, res) => {
    try {
        (0, utils_1.successResponse)({
            res,
            message: "Welcome to the Amader Bazar API",
            data: {
                routes: {
                    "api-docs": "/api-docs",
                    user: "/api/v1/user",
                    auth: "/api/v1/auth",
                    seed: "/api/v1/seed",
                    category: "/api/v1/category",
                    product: "/api/v1/product",
                    order: "/api/v1/order",
                    dashboard: "/api/v1/dashboard",
                    extra: "/api/v1/extra",
                },
            },
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.rootRoute = rootRoute;
//# sourceMappingURL=root.route.js.map