const express = require("express");
const ProductRoute = express.Router();
const { multer } = require("$npmModules");
const { storeImageInServer } = require("$utils/multerImageHandler");

const upload = multer({ storage: storeImageInServer("products") });
// const { addProductSchema } = require("$reqSchema/products");
// const { validationRunner } = require("$middleware");
const {
    getAllProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    getProductImg,
} = require("$controller/ProductControllers");

ProductRoute.route("/")
    .get(getAllProduct)
    .post(
        // addProductSchema,
        //  validationRunner,
        upload.single("img"),
        addProduct
    )
    .patch(updateProduct)
    .delete(deleteProduct);

ProductRoute.get("/:id", getSingleProduct);
ProductRoute.get("/img/:id", getProductImg);

module.exports = ProductRoute;


