import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { imgSubFolder } from "../types";
import { errorResponse } from "../utils";

export const sendImg = (folderPath: imgSubFolder) => {
    return (req: Request, res: Response) => {
        try {
            const { src } = req.params;
            const local = path.join(
                `${process.cwd()}/uploads/${folderPath}/${src}`
            );

            if (!fs.existsSync(local)) {
                console.log("Image not found");
                const defaultImg = path.join(
                    `${process.cwd()}/uploads/${folderPath}/default.png`
                );

                return res.sendFile(defaultImg);
            }

            res.sendFile(local);
        } catch (error: any) {
            console.log(error.message);
            errorResponse({ res });
        }
    };
};
