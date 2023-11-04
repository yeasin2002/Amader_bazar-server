import express, { Request, Response } from "express";
export const RootRoute = express.Router();

RootRoute.get("/json", (req: Request, res: Response) => {
    const data = {
        message: "Hello, world!",
        timestamp: new Date().toISOString(),
    };
    res.json(data);
});
