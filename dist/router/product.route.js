"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const middlewares_1 = require("../middlewares");
const product_controller_1 = require("../controller/product.controller");
exports.productRoute = express_1.default.Router();
const upload = (0, multer_1.default)({ storage: (0, middlewares_1.CreateDiskStorage)("products") });
//? Products
exports.productRoute.post("/search", product_controller_1.searchProduct); //! Bug: Not working as expected
exports.productRoute.get("/feature", product_controller_1.getAllFeatureProduct);
exports.productRoute
    .route("/all")
    .get(product_controller_1.getAllProduct)
    .post(upload.single("img"), product_controller_1.createProduct);
exports.productRoute
    .route("/all/:id")
    .get(product_controller_1.getSingleProductById)
    .patch(product_controller_1.updateProduct)
    .delete(product_controller_1.deleteProduct);
// ? Rating
exports.productRoute.route("/rating").post(middlewares_1.isTokenVerify, product_controller_1.ProvideRating);
exports.productRoute.get("/rating/:id", product_controller_1.getProductRatingsController);
//? Features Products
exports.productRoute.route("/feature/:id").put(product_controller_1.makeFeatureProduct);
// productRoute.get("/popular", PopularProduct);
// productRoute.get("/discounted", discountedProduct);
// productRoute.post("/related-product", getRelatedProduct);
/*
-  All Product

- Featured Product
- Most Popular/Sold Product
- discounted Product
*/
//# sourceMappingURL=product.route.js.map