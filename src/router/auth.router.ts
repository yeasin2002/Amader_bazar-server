import express from "express";
import {
    confirmRegistration,
    forgotPassword,
    logIn,
    newJWT_Token,
    registration,
    resetPassword,
} from "../controller/auth.controller";
// import { regSchema, validationRunner } from "../reqSchema";
export const authRoute = express.Router();

// log in
authRoute.post("/register", registration);
authRoute.post("/confirm-registration", confirmRegistration);
authRoute.post("/login", logIn);
authRoute.post("/reset-password", resetPassword);
authRoute.post("/new-jwt-token", newJWT_Token);
authRoute.post("/forgot-password", forgotPassword);
