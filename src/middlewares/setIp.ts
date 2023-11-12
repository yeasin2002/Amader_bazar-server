import { Request, Response } from "express";

export const setIp = (req: Request, res: Response, next: any) => {
    req.body.ip = req.ip;
    next();
};
