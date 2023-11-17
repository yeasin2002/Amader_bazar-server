import express from "express";
import multer from "multer";
import {
    createCategory,
    deleteCategory,
    getAllCategory,
    getCategoryByTitle,
} from "../controller/category.controller";
import { CreateDiskStorage } from "../middlewares";

export const categoryRouter = express.Router();
 const upload = multer({ storage: CreateDiskStorage("categories") });

 categoryRouter.get("/:title", getCategoryByTitle);
 categoryRouter
     .route("/")
     .get(getAllCategory)
     .post(upload.single("icon"), createCategory);
categoryRouter.route("/:id").delete(deleteCategory);
