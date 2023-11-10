import express from "express";
import { Insert } from "../controller/seed.controller";

export const seedRoute = express.Router();

seedRoute
    .route("/")
    .post(Insert)
    .get((req, res) => {
        res.send("seed");
    });
