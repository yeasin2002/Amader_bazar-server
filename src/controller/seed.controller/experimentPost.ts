import fs from "fs/promises";
import { Request, Response } from "express";
import { createPrettyError, errorResponse, successResponse } from "../../utils";

export const experimentPost = async (req: Request, res: Response) => {
    try {
        const oldPath = process.cwd() + "/uploads/pendingUser/yeasin.jpeg";
        const newPath = process.cwd() + "/uploads/users/yeasin.jpeg";

        await fs.rename(oldPath, newPath);

        return successResponse({ res, message: "file moved" });
    } catch (error: any) {
        console.log(error?.message);
        errorResponse({ res, message: error?.message });
    }
};
