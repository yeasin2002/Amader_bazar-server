import express from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategory,
    getCategoryByTitle,
} from "../controller/category.controller";

export const categoryRouter = express.Router();

categoryRouter.get("/:title", getCategoryByTitle);
categoryRouter.route("/").get(getAllCategory).post(createCategory);
categoryRouter.route("/:id").delete(deleteCategory);
