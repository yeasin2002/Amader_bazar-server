import { Request, Response } from "express";
import fs from "fs";
import kleur from "kleur";
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
                console.log(kleur.bgBlue("Image not found"));
                console.log(kleur.bgYellow("Path"), `${folderPath}/${src}`);
                return errorResponse({ res });
            }
            if (fs.existsSync(local)) {
                return res.sendFile(local);
            }

            // if (!fs.existsSync(local)) {
            //     console.log(kleur.bgBlue("Image not found"));
            //     const defaultImg = path.join(`${process.cwd()}/uploads/${folderPath}/${defaultImgPath}`);
            //     return res.sendFile(defaultImg);
            // }
        } catch (error: any) {
            console.log(kleur.bgRed("Error - sendImg"), error.message);
            errorResponse({ res });
        }
    };
};
