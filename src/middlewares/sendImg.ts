import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { createPrettyError, errorResponse } from "../utils";

export const sendImg = (folderPath: string) => {
    console.log("SendImg Request accepted");
    return (req: Request, res: Response) => {
        try {
            const { src } = req.params;
            // const local = path.join(process.cwd(),`uploads/users/${src}`,);
            const local = path.join(
                `${process.cwd()}/uploads/${folderPath}/${src}`
            );

            if (!fs.existsSync(local))
                return createPrettyError(404, "Image not found");

            res.sendFile(local);
        } catch (error: any) {
            console.log(error.message);
            errorResponse({ res });
        }
    };
};
