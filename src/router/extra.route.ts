import express from "express";
import { getImg } from "../controller";

export const extraRoute = express.Router();

extraRoute.get("/img/:src", getImg);
