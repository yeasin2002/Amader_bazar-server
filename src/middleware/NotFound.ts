import { Request, Response } from "express";

const notFound = (req: Request, res: Response): void => {
    res.status(404).json({
        status: "error",
        message: `Route ${req.method} - ${req.originalUrl} not found`,
    });
};

export default notFound;
