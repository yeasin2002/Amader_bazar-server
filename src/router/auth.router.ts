import express from "express";
import { registration } from "../controller/auth.controller";
export const authRoute = express.Router();

authRoute.post("/register", registration);
