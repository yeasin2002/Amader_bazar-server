"use strict";
/*
 *  Title: Amader Bazar
 *  Description: An E-commerce website.
 * Author : Md Kawsar Islam Yeasin (@yeasin2002)
 * Contact: yeasin2002.netlify.app
 * Date: 09/10/2023
 * Updated : 10/11/2023
                ?- Added TypeScript
                ?- Migration into MongoDB From PostgreSQL ( Sequelize to Mongoose )
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//? npm packages imports
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//?  Local Imports
const controller_1 = require("./controller");
const lib_1 = require("./lib");
const middlewares_1 = require("./middlewares");
const utils_1 = require("./utils");
const router_1 = require("./router");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDocs = (0, swagger_jsdoc_1.default)(lib_1.swaggerOptions);
//?  npm packages in use
exports.app = (0, express_1.default)();
exports.app.use((0, compression_1.default)());
exports.app.use((0, cookie_parser_1.default)());
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)({ origin: "*" }));
// ? custom global middlewares
exports.app.use(utils_1.reqLogger);
exports.app.use(middlewares_1.setIp);
exports.app.use(lib_1.limiter);
//? Routers
exports.app.get("/", controller_1.rootRoute);
exports.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
exports.app.use("/api/v1/seed", router_1.seedRoute);
exports.app.use("/api/v1/auth", router_1.authRoute);
exports.app.use("/api/v1/category", router_1.categoryRouter);
exports.app.use("/api/v1/product", router_1.productRoute);
exports.app.use("/api/v1/user", router_1.userRouter);
exports.app.use("/api/v1/order", router_1.orderProductRouter);
exports.app.use("/api/v1/dashboard", router_1.dashboardRouter);
exports.app.use("/api/v1/extra", router_1.extraRoute);
//? 404 not found And default error Handling
exports.app.use(middlewares_1.notFound);
exports.app.use(middlewares_1.defaultErrorHandler);
exports.app.listen(utils_1.Port, async () => {
    utils_1.logSquare.success("⚡", `Server is running on port http://localhost:${utils_1.Port}`);
    await (0, lib_1.connectDB)();
});
//# sourceMappingURL=app.js.map