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
    //  under development - Have a Bug 
    .post(upload.single("img"), addProduct)
    

ProductRoute.route("/:id")
    .get(getSingleProduct)
    .delete(deleteProduct)
    .patch(updateProduct);;
ProductRoute.get("/img/:id", getProductImg);

module.exports = ProductRoute;


