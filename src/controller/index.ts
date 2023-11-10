import { Request, Response } from "express";

export const fn = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ status: "success", data: "" });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ status: "failed", message: "" });
    }
};
