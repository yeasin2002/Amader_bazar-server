import express from "express";
import { seedUser } from "../controller/seed.controller/seedUser.js";

export const seed = express.Router();

seed.get("/", (req, res) => {
    res.send("seed");
});
seed.post("/", seedUser);
