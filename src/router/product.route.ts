import express from "express";
import { getAllCategory } from "../controller/product.controller/index.js";

export const productRoute = express.Router();
productRoute.get("/", getAllCategory);
