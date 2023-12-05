import express from "express";
import multer from "multer";
import { deleteCategory } from "../controller/category.controller";
import {
    banOrUnbannedUser,
    createProduct,
    updateProduct,
    updateSingleCategory,
    updatedAdminRole,
} from "../controller/dashboard";
import {
    deleteProduct,
    getAllProduct,
    getSingleProductById,
} from "../controller/product.controller";
import { deleteUser, getAllUser } from "../controller/user.controller";
import { CreateDiskStorage } from "../middlewares";

export const dashboardRouter = express.Router();
const upload = multer({ storage: CreateDiskStorage("products") });

//? manage Product
dashboardRouter
    .route("/product")
    .get(getAllProduct)
    .post(upload.single("img"), createProduct);

dashboardRouter
    .route("/product/:id")
    .get(getSingleProductById)
    .delete(deleteProduct)
    .patch(updateProduct);

//? manage User
dashboardRouter.route("/user").get(getAllUser);
dashboardRouter.put("/ban-or-unbanned", banOrUnbannedUser);
dashboardRouter
    .route("/user/:id")
    .get(getAllUser)
    .delete(deleteUser)
    .patch(updatedAdminRole);

//? manage category
dashboardRouter
    .route("/category/:id")
    .delete(deleteCategory)
    .patch(updateSingleCategory);
