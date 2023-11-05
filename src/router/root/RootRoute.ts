import express, { Request, Response, Router } from "express";
export const RootRoute: Router = express.Router();

RootRoute.get("/json", (req: Request, res: Response) => {
    const data = {
        message: "Hello, world!",
        timestamp: new Date().toISOString(),
    };
    res.json(data);
});
